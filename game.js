// routes/game.js — Խաղի Save / Load
const express  = require('express');
const GameSave = require('./GameSave');
const { protect } = require('./auth');

const router = express.Router();

// Բոլոր route-ները պաշտպանված են JWT-ով
router.use(protect);

// ════════════════════════════════════════════════════════════════════
// GET /api/game/save — Խաղի save-ը բեռնել
// ════════════════════════════════════════════════════════════════════
router.get('/save', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });

    if (!save) {
      return res.status(404).json({
        success: false,
        message: 'Save գտնված չէ — նոր խաղ',
      });
    }

    res.json({
      success: true,
      playerData: save.playerData,
      savedAt:    save.savedAt,
    });
  } catch (err) {
    console.error('Load error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ════════════════════════════════════════════════════════════════════
// POST /api/game/save — Խաղը պահել (upsert)
// ════════════════════════════════════════════════════════════════════
router.post('/save', async (req, res) => {
  try {
    const { playerData } = req.body;

    if (!playerData || typeof playerData !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'playerData-ը բացակայում է կամ սխալ ձևաչափ',
      });
    }

    // Upsert — եթե save-ը գոյություն ունի → թարմացնի, չունի → ստեղծի
    const save = await GameSave.findOneAndUpdate(
      { user: req.user._id },
      { playerData, savedAt: new Date() },
      { new: true, upsert: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Խաղը պահվեց',
      savedAt: save.savedAt,
    });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ════════════════════════════════════════════════════════════════════
// DELETE /api/game/save — Save-ը ջնջել (reset)
// ════════════════════════════════════════════════════════════════════
router.delete('/save', async (req, res) => {
  try {
    await GameSave.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: 'Խաղի տվյալները ջնջվեցին' });
  } catch (err) {
    console.error('Delete save error:', err);
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

module.exports = router;
