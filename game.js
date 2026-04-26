// routes/game.js — Խաghի Save / Load / Transfer
const express  = require('express');
const GameSave = require('./GameSave');
const { protect } = require('./auth');

const router = express.Router();
router.use(protect);

// ════════════════════════════════════════════════════════════════════
// GET /api/game/save — Բerna Save
// ════════════════════════════════════════════════════════════════════
router.get('/save', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });
    if (!save) {
      return res.status(404).json({ success: false, message: 'Save գtavnvac che — nor khagh' });
    }
    res.json({
      success:          true,
      playerData:       save.playerData,
      savedAt:          save.savedAt,
      pendingTransfers: save.pendingTransfers || [],   // ← aryunabervel
    });
  } catch (err) {
    console.error('Load error:', err);
    res.status(500).json({ success: false, message: 'Սervreri skhal' });
  }
});

// ════════════════════════════════════════════════════════════════════
// POST /api/game/save — Pahel (upsert)
// ════════════════════════════════════════════════════════════════════
router.post('/save', async (req, res) => {
  try {
    const { playerData } = req.body;
    if (!playerData || typeof playerData !== 'object') {
      return res.status(400).json({ success: false, message: 'playerData-ə bacakayum e' });
    }
    const save = await GameSave.findOneAndUpdate(
      { user: req.user._id },
      { playerData, savedAt: new Date() },
      { new: true, upsert: true, runValidators: true }
    );
    res.json({ success: true, message: 'Khaghə pahvec', savedAt: save.savedAt });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ════════════════════════════════════════════════════════════════════
// DELETE /api/game/save — Jnjel (reset)
// ════════════════════════════════════════════════════════════════════
router.delete('/save', async (req, res) => {
  try {
    await GameSave.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: 'Khaghə jnjvec' });
  } catch (err) {
    console.error('Delete save error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ════════════════════════════════════════════════════════════════════
// POST /api/game/transfer — Bancayin popoxantsun
// Body: { toAccount: "AM123456", amount: 5000 }
// ════════════════════════════════════════════════════════════════════
router.post('/transfer', async (req, res) => {
  try {
    const { toAccount, amount } = req.body;

    if (!toAccount || typeof toAccount !== 'string') {
      return res.status(400).json({ success: false, message: 'Հաшвехамер ншвац че' });
    }
    const amt = parseInt(amount, 10);
    if (!amt || amt <= 0) {
    return res.status(400).json({ success: false, message: 'Անվավեր գումար' });
    }

    // Load sender
    const senderSave = await GameSave.findOne({ user: req.user._id });
    if (!senderSave) {
      return res.status(404).json({ success: false, message: 'Dzer save-ə gtnvac che' });
    }
    const senderData = senderSave.playerData;

    if (senderData.bankAccount === toAccount) {
      return res.status(400).json({ success: false, message: 'Iren hashvin chi kareli popoxancel' });
    }
    if ((senderData.bank || 0) < amt) {
      return res.status(400).json({
        success: false,
        message: `Bank-um bavarar gumar chka. Mot e $${(senderData.bank || 0).toLocaleString()}`,
      });
    }

    // Find recipient by bankAccount field inside playerData
    const recipientSave = await GameSave.findOne({ 'playerData.bankAccount': toAccount });
    if (!recipientSave) {
      return res.status(404).json({
        success: false,
        message: `«${toAccount}» hashvehamerov khaghatsogh gtnvac che`,
      });
    }

    // Deduct sender
    senderData.bank = (senderData.bank || 0) - amt;
    senderSave.playerData = senderData;
    senderSave.savedAt    = new Date();
    senderSave.markModified('playerData');
    await senderSave.save();

    // Credit recipient + push notification
    const recipientData = recipientSave.playerData;
    recipientData.bank  = (recipientData.bank || 0) + amt;
    recipientSave.playerData = recipientData;
    recipientSave.savedAt    = new Date();
    recipientSave.markModified('playerData');
    recipientSave.pendingTransfers.push({
      fromName:    senderData.name    || req.user.name || 'Ananun',
      fromAccount: senderData.bankAccount || 'Ancanot',
      amount:      amt,
      sentAt:      new Date(),
    });
    await recipientSave.save();

    return res.json({
      success:       true,
      message:       `✅ $${amt.toLocaleString()} popoxancvec ${toAccount}-in`,
      newSenderBank: senderData.bank,
    });
  } catch (err) {
    console.error('Transfer error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ════════════════════════════════════════════════════════════════════
// POST /api/game/transfers/clear — Karda xyanotsumn-nerə azatel
// ════════════════════════════════════════════════════════════════════
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
