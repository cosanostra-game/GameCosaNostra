// routes/auth.js — Գրանցում, Մուտք, Պրոֆիլ
const express = require('express');
const jwt     = require('jsonwebtoken');
const User    = require('./User');
const { protect } = require('./auth');

const router = express.Router();

// ─── Helper: JWT token ստեղծել ────────────────────────────────────
const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  });

// ─── Helper: response ─────────────────────────────────────────────
const sendAuthResponse = (res, statusCode, user, message) => {
  const token = signToken(user._id);

  return res.status(statusCode).json({
    success: true,
    message,
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
};

// ════════════════════════════════════════════════════════════════════
// POST /api/auth/register — Նոր հաշիվ ստեղծել
// ════════════════════════════════════════════════════════════════════
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, avatarColor } = req.body;

    // Վավերականություն
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Անունը, էլ. հասցեն և գաղտնաբառը պարտադիր են',
      });
    }

    // Արդեն գրանցված?
    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return res.status(409).json({
        success: false,
        message: 'Այս էլ. հասցեով հաշիվ արդեն գոյություն ունի',
      });
    }

    // Ստեղծել user
    const user = await User.create({
      name,
      email,
      password,
      avatarColor: avatarColor || '#ff3b30',
    });

    sendAuthResponse(res, 201, user, 'Հաշիվը հաջողությամբ ստեղծվեց');
  } catch (err) {
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    console.error('Register error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ════════════════════════════════════════════════════════════════════
// POST /api/auth/login — Մուտք գործել
// ════════════════════════════════════════════════════════════════════
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Էլ. հասցեն և գաղտնաբառը պարտադիր են',
      });
    }

    // password field-ը select:false է → explicitly include
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Այս էլ. հասցեով հաշիվ գտնված չէ',
      });
    }

    const isMatch = await user.checkPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Գաղտնաբառը սխալ է',
      });
    }

    sendAuthResponse(res, 200, user, `Բարի գալուստ, ${user.name}`);
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ════════════════════════════════════════════════════════════════════
// GET /api/auth/me — Ընթացիկ user-ի տվյալները (protected)
// ════════════════════════════════════════════════════════════════════
router.get('/me', protect, async (req, res) => {
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
});

// ════════════════════════════════════════════════════════════════════
// PATCH /api/auth/profile — Պրոֆիլ թարմացնել (protected)
// ════════════════════════════════════════════════════════════════════
router.patch('/profile', protect, async (req, res) => {
  try {
    const allowed = ['name', 'bio', 'avatarColor', 'avatarImg'];
    const updates = {};

    allowed.forEach((field) => {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Պրոֆիլը թարմացվեց',
      user: {
        id:          user._id,
        name:        user.name,
        email:       user.email,
        avatarColor: user.avatarColor,
        avatarImg:   user.avatarImg,
        bio:         user.bio,
      },
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    console.error('Profile update error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ════════════════════════════════════════════════════════════════════
// DELETE /api/auth/account — Հաշիվն ամбольджоврапес ջнджел (protected)
// ════════════════════════════════════════════════════════════════════
router.delete('/account', protect, async (req, res) => {
  try {
    const GameSave = require('../models/GameSave');
    // Delete game save first
    await GameSave.findOneAndDelete({ user: req.user._id });
    // Delete user
    await User.findByIdAndDelete(req.user._id);
    res.json({ success: true, message: 'Хашивн джнджвец' });
  } catch (err) {
    console.error('Delete account error:', err);
    res.status(500).json({ success: false, message: 'Сервери схал' });
  }
});

module.exports = router;
