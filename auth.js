// auth.js — Authentication routes + protect middleware
const express = require('express');
const jwt     = require('jsonwebtoken');
const User    = require('./User');

const router = express.Router();

function signToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });
}

async function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Չկա token — մուտք գործեք' });
    }

    const token   = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Օգտատերը գոյություն չունի' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Անվավեր կամ ժամկետանց token' });
  }
}

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, avatarColor } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Անուն, email և գաղտնաբառ պարտադիր են' });
    }

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Այս email-ով օգտատեր արդեն գոյություն ունի' });
    }

    const user = await User.create({
      name:        name.trim(),
      email:       email.toLowerCase().trim(),
      password,
      avatarColor: avatarColor || '#ff3b30',
    });

    const token = signToken(user._id);

    res.status(201).json({ success: true, token, user });
  } catch (err) {
    console.error('Register error:', err);
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(e => e.message).join(', ');
      return res.status(400).json({ success: false, message });
    }
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email և գաղտնաբառ պարտադիր են' });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
    if (!user) return res.status(401).json({ success: false, message: 'Email-ը կամ գաղտնաբառը սխալ է' });

    const isMatch = await user.checkPassword(password);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Email-ը կամ գաղտնաբառը սխալ է' });

    const token = signToken(user._id);

    res.json({ success: true, token, user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/me', protect, async (req, res) => {
  try {
    res.json({ success: true, user: req.user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.patch('/profile', protect, async (req, res) => {
  try {
    const allowed = ['name', 'avatarColor', 'avatarImg', 'bio'];
    const updates = {};

    allowed.forEach(field => {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    if (req.body.password) {
      if (req.body.password.length < 6) {
        return res.status(400).json({ success: false, message: 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ' });
      }
      updates.password = req.body.password;
    }

    const user = await User.findById(req.user._id).select('+password');
    Object.assign(user, updates);
    await user.save();

    // Sync avatar to GameSave.playerData AND notify online friends via socket
    try {
      const GameSave    = require('./GameSave');
      const io          = req.app.get('io');
      const userSockets = req.app.get('userSockets');

      // Write avatarImg/avatarColor into GameSave so all game routes read from one place
      let save = await GameSave.findOne({ user: req.user._id });
      if (!save) {
        save = new GameSave({
          user:       req.user._id,
          playerData: { avatarImg: user.avatarImg || null, avatarColor: user.avatarColor || '#ff3b30' },
        });
        await save.save();
      } else {
        if (!save.playerData) save.playerData = {};
        save.playerData.avatarImg   = user.avatarImg   || null;
        save.playerData.avatarColor = user.avatarColor || '#ff3b30';
        save.markModified('playerData');
        await save.save();
      }

      // Notify online friends instantly about name/avatar change
      if (io && userSockets && save.friends && save.friends.length > 0) {
        const payload = {
          userId:      String(req.user._id),
          name:        user.name,
          avatarColor: user.avatarColor || '#ff3b30',
          avatarImg:   user.avatarImg   || null,
        };
        for (const f of save.friends) {
          const sid = userSockets.get(String(f.userId));
          if (sid) io.to(sid).emit('friendProfileUpdated', payload);
        }
      }
    } catch (_e) { /* non-critical */ }

    res.json({ success: true, user });
  } catch (err) {
    console.error('Profile update error:', err);
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(e => e.message).join(', ');
      return res.status(400).json({ success: false, message });
    }
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.delete('/account', protect, async (req, res) => {
  try {
    const GameSave = require('./GameSave');
    await GameSave.findOneAndDelete({ user: req.user._id });
    await User.findByIdAndDelete(req.user._id);
    res.json({ success: true, message: 'Հաշիվը հաջողությամբ ջնջվեց' });
  } catch (err) {
    console.error('Delete account error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

module.exports = router;
module.exports.protect = protect;