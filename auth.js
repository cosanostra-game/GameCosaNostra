// auth.js — Authentication routes + protect middleware
const express = require('express');
const jwt     = require('jsonwebtoken');
const User    = require('./User');

const router = express.Router();

// ── Helper: generate JWT ──────────────────────────────────────────
function signToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });
}

// ── Middleware: protect (verify JWT) ─────────────────────────────
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

// ── POST /api/auth/register ───────────────────────────────────────
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

    res.status(201).json({
      success: true,
      token,
      user: {
        id:          user._id,
        name:        user.name,
        email:       user.email,
        avatarColor: user.avatarColor,
        avatarImg:   user.avatarImg,
        bio:         user.bio,
        createdAt:   user.createdAt,
      },
    });
  } catch (err) {
    console.error('Register error:', err);
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(e => e.message).join(', ');
      return res.status(400).json({ success: false, message });
    }
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ── POST /api/auth/login ──────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email և գաղտնաբառ պարտադիր են' });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Email-ը կամ գաղտնաբառը սխալ է' });
    }

    const isMatch = await user.checkPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Email-ը կամ գաղտնաբառը սխալ է' });
    }

    const token = signToken(user._id);

    res.json({
      success: true,
      token,
      user: {
        id:          user._id,
        name:        user.name,
        email:       user.email,
        avatarColor: user.avatarColor,
        avatarImg:   user.avatarImg,
        bio:         user.bio,
        createdAt:   user.createdAt,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ── GET /api/auth/me ──────────────────────────────────────────────
router.get('/me', protect, async (req, res) => {
  try {
    res.json({
      success: true,
      user: {
        id:          req.user._id,
        name:        req.user.name,
        email:       req.user.email,
        avatarColor: req.user.avatarColor,
        avatarImg:   req.user.avatarImg,
        bio:         req.user.bio,
        createdAt:   req.user.createdAt,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ── PATCH /api/auth/profile ───────────────────────────────────────
router.patch('/profile', protect, async (req, res) => {
  try {
    const allowed = ['name', 'avatarColor', 'avatarImg', 'bio'];
    const updates = {};

    allowed.forEach(field => {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    // Password change (optional)
    if (req.body.password) {
      if (req.body.password.length < 6) {
        return res.status(400).json({ success: false, message: 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ' });
      }
      updates.password = req.body.password;
    }

    const user = await User.findById(req.user._id).select('+password');
    Object.assign(user, updates);
    await user.save(); // triggers pre-save hash if password changed

    res.json({
      success: true,
      user: {
        id:          user._id,
        name:        user.name,
        email:       user.email,
        avatarColor: user.avatarColor,
        avatarImg:   user.avatarImg,
        bio:         user.bio,
        createdAt:   user.createdAt,
      },
    });
  } catch (err) {
    console.error('Profile update error:', err);
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(e => e.message).join(', ');
      return res.status(400).json({ success: false, message });
    }
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

module.exports = router;
module.exports.protect = protect;
