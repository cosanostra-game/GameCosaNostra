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

// ─── GET /api/game/transfers/pending ─────────────────────────────
// Frontend polling-ի համար. Վերադարձնում է pending transfers-ը և ջնջում:
router.get('/transfers/pending', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });
    if (!save || !save.pendingTransfers || save.pendingTransfers.length === 0) {
      return res.json({ success: true, transfers: [] });
    }
    const transfers = [...save.pendingTransfers];
    save.pendingTransfers = [];
    await save.save();
    res.json({ success: true, transfers });
  } catch (err) {
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

// ─── GET /api/game/search?name=xxx ───────────────────────────────
router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Մուտqagreq arnavazn 2 nish' });
    }
    const regex = new RegExp(name.trim(), 'i');
    const saves = await GameSave.find({ 'playerData.name': regex }).limit(8).lean();
    const userSockets = req.app.get('userSockets');
    const results = saves
      .filter(s => String(s.user) !== String(req.user._id))
      .map(s => {
        const pd  = s.playerData || {};
        const uid = String(s.user);
        return {
          userId:      uid,
          name:        pd.name        || 'Ananun',
          rank:        pd.rank        || 'Datatarkaport',
          bankAccount: pd.bankAccount || '—',
          avatarColor: pd.avatarColor || '#ff3b30',
          avatarImg:   pd.avatarImg   || null,
          online:      !!(userSockets && userSockets.has(uid)),
        };
      });
    res.json({ success: true, results });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── POST /api/game/friend-request ───────────────────────────────
router.post('/friend-request', async (req, res) => {
  try {
    const { toUserId } = req.body;
    if (!toUserId) return res.status(400).json({ success: false, message: 'toUserId batskaum e' });
    if (String(toUserId) === String(req.user._id))
      return res.status(400).json({ success: false, message: 'Inkd kez ynker chi kareli' });

    const senderSave    = await GameSave.findOne({ user: req.user._id });
    const recipientSave = await GameSave.findOne({ user: toUserId });
    if (!senderSave)    return res.status(404).json({ success: false, message: 'Dzer save gtnvac che' });
    if (!recipientSave) return res.status(404).json({ success: false, message: 'Ogtagortse gtnvac che' });

    if ((senderSave.friends || []).some(f => String(f.userId) === String(toUserId)))
      return res.status(400).json({ success: false, message: 'Ardin ynkernerq eq' });
    if ((recipientSave.friendRequests || []).some(f => String(f.fromUserId) === String(req.user._id)))
      return res.status(400).json({ success: false, message: 'Haytn ardin ugharkvac e' });

    const sd = senderSave.playerData || {};
    recipientSave.friendRequests.push({
      fromUserId:  req.user._id,
      fromName:    sd.name        || req.user.name || 'Ananun',
      fromAccount: sd.bankAccount || '?',
      fromRank:    sd.rank        || '',
      sentAt:      new Date(),
    });
    await recipientSave.save();

    const io = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const socketId = userSockets && userSockets.get(String(toUserId));
    if (io && socketId) {
      io.to(socketId).emit('friendRequest', {
        fromUserId:  String(req.user._id),
        fromName:    sd.name        || req.user.name,
        fromAccount: sd.bankAccount || '?',
        fromRank:    sd.rank        || '',
      });
    }
    res.json({ success: true, message: 'Ynkerутyan haytn ugharkvec' });
  } catch (err) {
    console.error('Friend request error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── GET /api/game/friend-requests ───────────────────────────────
router.get('/friend-requests', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id }).lean();
    if (!save) return res.json({ success: true, requests: [], friends: [] });
    const userSockets = req.app.get('userSockets');
    const friends = (save.friends || []).map(f => ({
      ...f,
      online: !!(userSockets && userSockets.has(String(f.userId))),
    }));
    res.json({ success: true, requests: save.friendRequests || [], friends });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── POST /api/game/friend-request/respond ───────────────────────
router.post('/friend-request/respond', async (req, res) => {
  try {
    const { fromUserId, action } = req.body;
    if (!fromUserId || !['accept', 'decline'].includes(action))
      return res.status(400).json({ success: false, message: 'Ankor params' });

    const mySave = await GameSave.findOne({ user: req.user._id });
    if (!mySave) return res.status(404).json({ success: false, message: 'Save gtnvac che' });

    const idx = mySave.friendRequests.findIndex(r => String(r.fromUserId) === String(fromUserId));
    if (idx === -1) return res.status(404).json({ success: false, message: 'Hayty gtnvac che' });

    const reqData = mySave.friendRequests[idx];
    mySave.friendRequests.splice(idx, 1);

    if (action === 'accept') {
      const myPd = mySave.playerData || {};
      mySave.friends.push({ userId: fromUserId, name: reqData.fromName, account: reqData.fromAccount });
      const theirSave = await GameSave.findOne({ user: fromUserId });
      if (theirSave) {
        theirSave.friends.push({ userId: req.user._id, name: myPd.name || req.user.name, account: myPd.bankAccount || '?' });
        await theirSave.save();
        const io = req.app.get('io');
        const userSockets = req.app.get('userSockets');
        const sid = userSockets && userSockets.get(String(fromUserId));
        if (io && sid) io.to(sid).emit('friendAccepted', { byName: myPd.name || req.user.name, byAccount: myPd.bankAccount || '?' });
      }
    }
    await mySave.save();
    res.json({ success: true, message: action === 'accept' ? 'Ynker avlacvec' : 'Hayty merjvec' });
  } catch (err) {
    console.error('Respond error:', err);
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

// ─── DELETE /api/game/friends/:userId ────────────────────────────
router.delete('/friends/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const mySave = await GameSave.findOne({ user: req.user._id });
    if (mySave) { mySave.friends = mySave.friends.filter(f => String(f.userId) !== userId); await mySave.save(); }
    const theirSave = await GameSave.findOne({ user: userId });
    if (theirSave) { theirSave.friends = theirSave.friends.filter(f => String(f.userId) !== String(req.user._id)); await theirSave.save(); }
    res.json({ success: true, message: 'Ynkern jnjvec' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Servreri skhal' });
  }
});

module.exports = router;
