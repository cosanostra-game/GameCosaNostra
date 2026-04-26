// routes/game.js — Save / Load / Transfer
const express  = require('express');
const GameSave = require('./GameSave');
const { protect } = require('./auth');

const router = express.Router();
router.use(protect);

// ─── GET /api/game/save ───────────────────────────────────────────
router.get('/save', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });
    if (!save) {
      return res.status(404).json({ success: false, message: 'Save գtнvac che' });
    }
    res.json({
      success:          true,
      playerData:       save.playerData,
      savedAt:          save.savedAt,
      pendingTransfers: save.pendingTransfers || [],
    });
  } catch (err) {
    console.error('Load error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── POST /api/game/save ──────────────────────────────────────────
router.post('/save', async (req, res) => {
  try {
    const { playerData } = req.body;
    if (!playerData || typeof playerData !== 'object') {
      return res.status(400).json({ success: false, message: 'playerData-ə batskaum e' });
    }
    const save = await GameSave.findOneAndUpdate(
      { user: req.user._id },
      { playerData, savedAt: new Date() },
      { new: true, upsert: true, runValidators: true }
    );
    res.json({ success: true, message: 'Pahvec', savedAt: save.savedAt });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── DELETE /api/game/save ────────────────────────────────────────
router.delete('/save', async (req, res) => {
  try {
    await GameSave.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: 'Jnjvec' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── POST /api/game/transfer ──────────────────────────────────────
// Body: { toAccount: "AM123456", amount: 5000 }
router.post('/transfer', async (req, res) => {
  try {
    const { toAccount, amount } = req.body;

    // Validation
    if (!toAccount || typeof toAccount !== 'string' || !/^AM\d{6}$/.test(toAccount.trim())) {
      return res.status(400).json({ success: false, message: 'Hashvehamerə skhale (AM + 6 tsan)' });
    }
    const amt = parseInt(amount, 10);
    if (!amt || amt <= 0) {
      return res.status(400).json({ success: false, message: 'Ankhor gumar' });
    }

    const acc = toAccount.trim().toUpperCase();

    // Load sender save
    const senderSave = await GameSave.findOne({ user: req.user._id });
    if (!senderSave) {
      return res.status(404).json({ success: false, message: 'Dzer save-ə gtnvac che' });
    }
    const senderData = senderSave.playerData;

    // Self-transfer check
    if (senderData.bankAccount === acc) {
      return res.status(400).json({ success: false, message: 'Irenid hashvin chi kareli popoxancel' });
    }

    // Balance check
    if ((senderData.bank || 0) < amt) {
      return res.status(400).json({
        success: false,
        message: `Bank-um bavarar gumar chka. Mot e $${(senderData.bank || 0).toLocaleString()}`,
      });
    }

    // Find recipient
    const recipientSave = await GameSave.findOne({ 'playerData.bankAccount': acc });
    if (!recipientSave) {
      return res.status(404).json({
        success: false,
        message: `«${acc}» hashvehamerov khaghatsogh gtnvac che`,
      });
    }

    // Deduct from sender
    senderData.bank = (senderData.bank || 0) - amt;
    senderSave.playerData = senderData;
    senderSave.markModified('playerData');
    await senderSave.save();

    // Credit recipient
    const recipientData = recipientSave.playerData;
    recipientData.bank  = (recipientData.bank || 0) + amt;
    recipientSave.playerData = recipientData;
    recipientSave.markModified('playerData');

    // ── Real-time check: արդյոք recipient-ը online է ────────────
    const io          = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const recipientId = String(recipientSave.user);
    const socketId    = userSockets && userSockets.get(recipientId);

    if (io && socketId) {
      // Online է — real-time ծանուցում, pendingTransfers-ին ավելացնել պետք չէ
      io.to(socketId).emit('bankTransfer', {
        fromName:    senderData.name    || req.user.name || 'Ananun',
        fromAccount: senderData.bankAccount || '?',
        amount:      amt,
        newBalance:  recipientData.bank,
      });
      // pendingTransfers-ը չենք ավելացնում (real-time ստացավ)
    } else {
      // Offline է — հերթ դնել, load-ի ժամանակ ցույց կտա
      recipientSave.pendingTransfers.push({
        fromName:    senderData.name    || req.user.name || 'Ananun',
        fromAccount: senderData.bankAccount || '?',
        amount:      amt,
        sentAt:      new Date(),
      });
    }

    await recipientSave.save();

    return res.json({
      success:       true,
      message:       `$${amt.toLocaleString()} popoxancvec ${acc}-in`,
      newSenderBank: senderData.bank,
    });
  } catch (err) {
    console.error('Transfer error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── POST /api/game/transfers/clear ──────────────────────────────
router.post('/transfers/clear', async (req, res) => {
  try {
    await GameSave.findOneAndUpdate(
      { user: req.user._id },
      { $set: { pendingTransfers: [] } }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

module.exports = router;
