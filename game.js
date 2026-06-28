// routes/game.js — Save / Load / Transfer / Chat
const express   = require('express');
const mongoose  = require('mongoose');
const GameSave  = require('./GameSave');
const { protect } = require('./auth');

const _msgSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true, maxlength: 2000 },
    read: { type: Boolean, default: false },
  }, { timestamps: true });

_msgSchema.index({ from: 1, to: 1, createdAt: 1 });
_msgSchema.index({ to: 1, read: 1 });
const Message = mongoose.models.Message || mongoose.model('Message', _msgSchema);

const router = express.Router();
router.use(protect);

router.get('/save', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });
    if (!save) return res.status(404).json({ success: false, message: 'Պահպանումը չի գտնվել' });
    
    res.json({ success: true, playerData: save.playerData, savedAt: save.savedAt, pendingTransfers: save.pendingTransfers || [] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/save', async (req, res) => {
  try {
    const { playerData } = req.body;
    if (!playerData || typeof playerData !== 'object') return res.status(400).json({ success: false, message: 'playerData-ն բացակայում է' });
    
    const save = await GameSave.findOneAndUpdate({ user: req.user._id }, { $set: { playerData, savedAt: new Date() } }, { new: true, upsert: true, runValidators: true });
    res.json({ success: true, message: 'Պահպանվեց', savedAt: save.savedAt });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.delete('/save', async (req, res) => {
  try {
    await GameSave.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: 'Ջնջվեց' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/transfer', async (req, res) => {
  try {
    const { toAccount, amount } = req.body;

    if (!toAccount || typeof toAccount !== 'string' || !/^AM\d{6}$/.test(toAccount.trim())) {
      return res.status(400).json({ success: false, message: 'Հաշվեհամարը սխալ է (AM + 6 թիվ)' });
    }
    const amt = parseInt(amount, 10);
    if (!amt || amt <= 0) return res.status(400).json({ success: false, message: 'Անվավեր գումար' });

    const acc = toAccount.trim().toUpperCase();

    const senderSave = await GameSave.findOneAndUpdate(
      { user: req.user._id, 'playerData.bank': { $gte: amt } },
      { $inc: { 'playerData.bank': -amt } },
      { new: true }
    );

    if (!senderSave) {
      const existingSave = await GameSave.findOne({ user: req.user._id }).lean();
      if (!existingSave) return res.status(404).json({ success: false, message: 'Ձեր պահպանումը չի գտնվել' });
      return res.status(400).json({ success: false, message: `Բանկում բավարար գումար չկա։ Ունեք $${(existingSave.playerData?.bank || 0).toLocaleString()}` });
    }

    const senderData = senderSave.playerData;

    if (senderData.bankAccount === acc) {
      await GameSave.findOneAndUpdate({ user: req.user._id }, { $inc: { 'playerData.bank': amt } });
      return res.status(400).json({ success: false, message: 'Ինքներդ ձեր հաշվին չեք կարող փոխանցել' });
    }

    const recipientSave = await GameSave.findOne({ 'playerData.bankAccount': acc });
    if (!recipientSave) {
      await GameSave.findOneAndUpdate({ user: req.user._id }, { $inc: { 'playerData.bank': amt } });
      return res.status(404).json({ success: false, message: `«${acc}» հաշվեհամարով խաղացող չի գտնվել` });
    }

    const recipientData = recipientSave.playerData;
    recipientData.bank  = (recipientData.bank || 0) + amt;
    recipientSave.playerData = recipientData;
    recipientSave.markModified('playerData');

    const io          = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const recipientId = String(recipientSave.user);
    const socketId    = userSockets && userSockets.get(recipientId);

    if (io && socketId) {
      io.to(socketId).emit('bankTransfer', { fromName: senderData.name || req.user.name || 'Անանուն', fromAccount: senderData.bankAccount || '?', amount: amt, newBalance: recipientData.bank });
    } else {
      recipientSave.pendingTransfers.push({ fromName: senderData.name || req.user.name || 'Անանուն', fromAccount: senderData.bankAccount || '?', amount: amt, sentAt: new Date() });
    }

    await recipientSave.save();

    return res.json({ success: true, message: `$${amt.toLocaleString()} փոխանցվեց ${acc}-ին`, newSenderBank: senderData.bank });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/transfers/pending', async (req, res) => {
  try {
    const save = await GameSave.findOneAndUpdate({ user: req.user._id }, { $set: { pendingTransfers: [] } }, { new: false });
    if (!save || !save.pendingTransfers || save.pendingTransfers.length === 0) return res.json({ success: true, transfers: [] });
    res.json({ success: true, transfers: save.pendingTransfers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/transfers/clear', async (req, res) => {
  try {
    await GameSave.findOneAndUpdate({ user: req.user._id }, { $set: { pendingTransfers: [] } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    if (!name || name.trim().length < 2) return res.status(400).json({ success: false, message: 'Մուտքագրեք առնվազն 2 նիշ' });
    
    const regex = new RegExp(name.trim(), 'i');
    const saves = await GameSave.find({ 'playerData.name': regex }).limit(8).lean();
    const userSockets = req.app.get('userSockets');
    // avatarImg/avatarColor are synced into GameSave.playerData on every PATCH /auth/profile
    const results = saves.filter(s => String(s.user) !== String(req.user._id)).map(s => {
        const pd  = s.playerData || {};
        const uid = String(s.user);
        return { userId: uid, name: pd.name || 'Անanun', rank: pd.rank || 'Datatarkaporth', bankAccount: pd.bankAccount || '—', avatarColor: pd.avatarColor || '#ff3b30', avatarImg: pd.avatarImg || null, online: !!(userSockets && userSockets.has(uid)) };
      });
    res.json({ success: true, results });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/friend-request', async (req, res) => {
  try {
    const { toUserId } = req.body;
    if (!toUserId) return res.status(400).json({ success: false, message: 'UserId-ն բացակայում է' });
    if (String(toUserId) === String(req.user._id)) return res.status(400).json({ success: false, message: 'Ինքներդ ձեզ չեք կարող ուղարկել' });

    const senderSave    = await GameSave.findOne({ user: req.user._id });
    const recipientSave = await GameSave.findOne({ user: toUserId });
    if (!senderSave)    return res.status(404).json({ success: false, message: 'Ձեր պահպանումը չի գտնվել' });
    if (!recipientSave) return res.status(404).json({ success: false, message: 'Ստացողի պահպանումը չի գտնվել' });

    if ((senderSave.friends || []).some(f => String(f.userId) === String(toUserId))) return res.status(400).json({ success: false, message: 'Արդեն ընկերներ եք' });
    if ((recipientSave.friendRequests || []).some(f => String(f.fromUserId) === String(req.user._id))) return res.status(400).json({ success: false, message: 'Հայտն արդեն ուղարկված է' });

    const sd = senderSave.playerData || {};
    // Fetch sender's avatar from User record for fresh data
    const User = require('./User');
    const senderUser = await User.findById(req.user._id).select('avatarImg avatarColor').lean();
    const fromAvatarImg   = (senderUser && senderUser.avatarImg)   || null;
    const fromAvatarColor = (senderUser && senderUser.avatarColor) || '#ff3b30';

    recipientSave.friendRequests.push({ fromUserId: req.user._id, fromName: sd.name || req.user.name || 'Անanun', fromAccount: sd.bankAccount || '?', fromRank: sd.rank || '', fromAvatarImg, fromAvatarColor, sentAt: new Date() });
    await recipientSave.save();

    const io = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const socketId = userSockets && userSockets.get(String(toUserId));
    if (io && socketId) {
      io.to(socketId).emit('friendRequest', { fromUserId: String(req.user._id), fromName: sd.name || req.user.name, fromAccount: sd.bankAccount || '?', fromRank: sd.rank || '', fromAvatarImg, fromAvatarColor });
    }
    res.json({ success: true, message: 'Ընկերության հայտն ուղարկված է' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/friend-requests', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id }).lean();
    if (!save) return res.json({ success: true, requests: [], friends: [] });
    const userSockets = req.app.get('userSockets');

    const friendIds = (save.friends || []).map(f => f.userId);
    let avatarMap = {};
    if (friendIds.length > 0) {
      const friendSaves = await GameSave.find({ user: { $in: friendIds } }, { user: 1, 'playerData.avatarImg': 1, 'playerData.avatarColor': 1, 'playerData.rank': 1 }).lean();
      friendSaves.forEach(fs => { avatarMap[String(fs.user)] = { avatarImg: fs.playerData?.avatarImg || null, avatarColor: fs.playerData?.avatarColor || '#ff3b30', rank: fs.playerData?.rank || '' }; });
    }

    const friends = (save.friends || []).map(f => ({ ...f, online: !!(userSockets && userSockets.has(String(f.userId))), avatarImg: avatarMap[String(f.userId)]?.avatarImg || null, avatarColor: avatarMap[String(f.userId)]?.avatarColor || '#ff3b30', rank: avatarMap[String(f.userId)]?.rank || '' }));
    res.json({ success: true, requests: save.friendRequests || [], friends });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/friend-request/respond', async (req, res) => {
  try {
    const { fromUserId, action } = req.body;
    if (!fromUserId || !['accept', 'decline'].includes(action)) return res.status(400).json({ success: false, message: 'Սխալ պարամետրեր' });

    const mySave = await GameSave.findOne({ user: req.user._id });
    if (!mySave) return res.status(404).json({ success: false, message: 'Պահպանումը չի գտնվել' });

    const idx = mySave.friendRequests.findIndex(r => String(r.fromUserId) === String(fromUserId));
    if (idx === -1) return res.status(404).json({ success: false, message: 'Հայտ չկա' });

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
    res.json({ success: true, message: action === 'accept' ? 'Դարձաք ընկերներ' : 'Ընկերության հայտը մերժվեց' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.delete('/friends/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const mySave = await GameSave.findOne({ user: req.user._id });
    if (mySave) { mySave.friends = mySave.friends.filter(f => String(f.userId) !== userId); await mySave.save(); }
    const theirSave = await GameSave.findOne({ user: userId });
    if (theirSave) { theirSave.friends = theirSave.friends.filter(f => String(f.userId) !== String(req.user._id)); await theirSave.save(); }
    res.json({ success: true, message: 'Ընկերը հեռացվեց' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/chat/unread', async (req, res) => {
  try {
    const myObjId = new mongoose.Types.ObjectId(String(req.user._id));
    const unread = await Message.aggregate([ { $match: { to: myObjId, read: false } }, { $group: { _id: '$from', count: { $sum: 1 } } } ]);
    const counts = {};
    unread.forEach(u => { counts[String(u._id)] = u.count; });
    res.json({ success: true, counts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/chat/:userId', async (req, res) => {
  try {
    const myId    = req.user._id;
    const otherId = req.params.userId;
    const msgs = await Message.find({ $or: [ { from: myId, to: otherId }, { from: otherId, to: myId } ] }).sort({ createdAt: 1 }).limit(120).lean();

    await Message.updateMany({ from: otherId, to: myId, read: false }, { $set: { read: true } });

    res.json({ success: true, messages: msgs });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/chat', async (req, res) => {
  try {
    const { toUserId, text } = req.body;

    if (!toUserId || !text || !text.trim()) return res.status(400).json({ success: false, message: 'toUserId-ն և տեքստը պարտադիր են' });
    if (text.trim().length > 2000) return res.status(400).json({ success: false, message: 'Սահմանափակում՝ 2000 նիշ' });
    if (String(toUserId) === String(req.user._id)) return res.status(400).json({ success: false, message: 'Ինքներդ ձեզ չեք կարող գրել' });

    const mySave = await GameSave.findOne({ user: req.user._id }).lean();
    const isFriend = mySave && (mySave.friends || []).some(f => String(f.userId) === String(toUserId));
    if (!isFriend) return res.status(403).json({ success: false, message: 'Կարող եք գրել միայն ընկերներին' });

    const msg = await Message.create({ from: req.user._id, to: toUserId, text: text.trim() });

    const io          = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const socketId    = userSockets && userSockets.get(String(toUserId));

    if (io && socketId) {
      const senderPd   = mySave && mySave.playerData;
      const senderName = (senderPd && senderPd.name) || req.user.name || 'Անանուն';
      io.to(socketId).emit('chatMessage', { _id: String(msg._id), from: String(req.user._id), fromName: senderName, text: msg.text, createdAt: msg.createdAt });
    }

    res.json({ success: true, message: { _id: String(msg._id), from: String(req.user._id), to: String(toUserId), text: msg.text, createdAt: msg.createdAt, read: false } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/player/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const mySave = await GameSave.findOne({ user: req.user._id }).lean();
    const isFriend = mySave && (mySave.friends || []).some(f => String(f.userId) === String(userId));
    if (!isFriend) return res.status(403).json({ success: false, message: 'Դուք ընկերներ չեք' });

    const theirSave = await GameSave.findOne({ user: userId }).lean();
    if (!theirSave) return res.status(404).json({ success: false, message: 'Օգտատերը չի գտնվել' });

    const pd = theirSave.playerData || {};
    const userSockets = req.app.get('userSockets');

    res.json({
      success: true,
      player: {
        name:        pd.name        || 'Անանուն',
        rank:        pd.rank        || '',
        bankAccount: pd.bankAccount || '—',
        exp:         pd.exp         || 0,
        level:       pd.level       || 1,
        crimes:      pd.stats?.crimes    || 0,
        cars:        pd.stats?.cars      || 0,
        garage:      (pd.garage      || []).length,
        realEstate:  (pd.realEstate  || []).length,
        businesses:  (pd.businesses  || []).length,
        avatarImg:   pd.avatarImg   || null,
        avatarColor: pd.avatarColor || '#ff3b30',
        online:      !!(userSockets && userSockets.has(String(userId))),
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

module.exports = router;