// routes/auth.js — Գրանցում, Մուտք, Պրոֆիլ
const express = require('express');
const jwt     = require('jsonwebtoken');
const User    = require('./User');

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

// ─── Middleware: Պաշտպանված Route-երի համար ────────────────────────
const protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Մուտքը արգելված է' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: 'Անվավեր տոկեն' });
  }
};

// ─── Controllers: Ֆունկցիաների սահմանում ───────────────────────────

const register = async (req, res) => {
  try {
    const { name, email, password, avatarColor } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ success: false, message: 'Այս էլ. հասցեն արդեն զբաղված է' });
    }

    const user = await User.create({ name, email, password, avatarColor });
    sendAuthResponse(res, 201, user, 'Գրանցումը հաջողվեց');
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Սխալ էլ. հասցե կամ գաղտնաբառ' });
    }

    sendAuthResponse(res, 200, user, 'Մուտքը հաջողվեց');
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, avatarColor, avatarImg, bio } = req.body;
    const updates = {};
    if (name) updates.name = name;
    if (avatarColor) updates.avatarColor = avatarColor;
    if (avatarImg !== undefined) updates.avatarImg = avatarImg;
    if (bio !== undefined) updates.bio = bio;

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
};

const deleteAccount = async (req, res) => {
  try {
    const GameSave = require('./GameSave');
    await GameSave.findOneAndDelete({ user: req.user._id });
    await User.findByIdAndDelete(req.user._id);
    res.json({ success: true, message: 'Հաշիվը ջնջվեց' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
};

// ─── Routes: Ճանապարհների գրանցում ────────────────────────────────
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.delete('/account', protect, deleteAccount);

module.exports = router;