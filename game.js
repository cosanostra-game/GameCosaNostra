// routes/game.js — Save / Load / Transfer / Chat
const express   = require('express');
const mongoose  = require('mongoose');
const GameSave  = require('./GameSave');
const { protect } = require('./auth');

// ── Message Model (inline — no extra file needed) ─────────────────
const _msgSchema = new mongoose.Schema(
  {
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true, maxlength: 2000 },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);
_msgSchema.index({ from: 1, to: 1, createdAt: 1 });
_msgSchema.index({ to: 1, read: 1 });
const Message = mongoose.models.Message || mongoose.model('Message', _msgSchema);

const router = express.Router();
router.use(protect);

// ─── GET /api/game/save ───────────────────────────────────────────
router.get('/save', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });
    if (!save) {
      return res.status(404).json({ success: false, message: 'Սeйвը չի գtнвeл' });
    }
    res.json({
      success:          true,
      playerData:       save.playerData,
      savedAt:          save.savedAt,
      pendingTransfers: save.pendingTransfers || [],
    });
  } catch (err) {
    console.error('Load error:', err);
    res.status(500).json({ success: false, message: 'Սerverի sxal' });
  }
});

// ─── POST /api/game/save ──────────────────────────────────────────
router.post('/save', async (req, res) => {
  try {
    const { playerData } = req.body;
    if (!playerData || typeof playerData !== 'object') {
      return res.status(400).json({ success: false, message: 'playerData-ը բackaum e' });
    }
    const save = await GameSave.findOneAndUpdate(
      { user: req.user._id },
      { $set: { playerData, savedAt: new Date() } },
      { new: true, upsert: true, runValidators: true }
    );
    res.json({ success: true, message: 'Pahvec', savedAt: save.savedAt });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ success: false, message: 'Սerverի sxal' });
  }
});

// ─── DELETE /api/game/save ────────────────────────────────────────
router.delete('/save', async (req, res) => {
  try {
    await GameSave.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: 'Jnjvec' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սerverի sxal' });
  }
});

// ─── POST /api/game/transfer ──────────────────────────────────────
// Body: { toAccount: "AM123456", amount: 5000 }
router.post('/transfer', async (req, res) => {
  try {
    const { toAccount, amount } = req.body;

    // Validation
    if (!toAccount || typeof toAccount !== 'string' || !/^AM\d{6}$/.test(toAccount.trim())) {
      return res.status(400).json({ success: false, message: 'Հaшvehamary sxal e (AM + 6 tiv)' });
    }
    const amt = parseInt(amount, 10);
    if (!amt || amt <= 0) {
      return res.status(400).json({ success: false, message: 'Anвавeр гумар' });
    }

    const acc = toAccount.trim().toUpperCase();

    // ── FIX: Sender-ի balance check + deduction atomically ────────
    // Հин կoдuм՝ findOne → check → save = race condition (2 request
    // կarox e miaжamanак gal, stugvel u negative bank andum):
    //   senderSave = findOne(...)
    //   if (bank < amt) error          ← check
    //   senderData.bank -= amt         ← 150ms later, ayer request-ն
    //   await senderSave.save()           nuyniski bank-ы уже аnuma
    //
    // FIX: findOneAndUpdate + $inc + condition — DB-ն atomically
    // նaйдum e և miайn eта gnaha balansy >= amt:
    const senderSave = await GameSave.findOneAndUpdate(
      {
        user: req.user._id,
        'playerData.bank': { $gte: amt },
      },
      { $inc: { 'playerData.bank': -amt } },
      { new: true }
    );

    if (!senderSave) {
      // Պарзaбanum ens՝ seyv cka, te balance ch'i бавараrum
      const existingSave = await GameSave.findOne({ user: req.user._id }).lean();
      if (!existingSave) {
        return res.status(404).json({ success: false, message: 'Ձeр сeйвը чи гtнвeл' });
      }
      return res.status(400).json({
        success: false,
        message: `Банкum бавараr гумар чkа. Уневk $${(existingSave.playerData?.bank || 0).toLocaleString()}`,
      });
    }

    const senderData = senderSave.playerData;

    // Self-transfer check
    if (senderData.bankAccount === acc) {
      // Rollback — վeрадарձнeл ğumary
      await GameSave.findOneAndUpdate(
        { user: req.user._id },
        { $inc: { 'playerData.bank': amt } }
      );
      return res.status(400).json({ success: false, message: 'Иreнid haшvin chi kaрeli popoxancel' });
    }

    // Find recipient
    const recipientSave = await GameSave.findOne({ 'playerData.bankAccount': acc });
    if (!recipientSave) {
      // Rollback — вернуть деньги отправителю
      await GameSave.findOneAndUpdate(
        { user: req.user._id },
        { $inc: { 'playerData.bank': amt } }
      );
      return res.status(404).json({
        success: false,
        message: `«${acc}» haшvehamarov xaغacox chi gtнвel`,
      });
    }

    // Credit recipient
    const recipientData = recipientSave.playerData;
    recipientData.bank  = (recipientData.bank || 0) + amt;
    recipientSave.playerData = recipientData;
    recipientSave.markModified('playerData');

    // ── Real-time check ──────────────────────────────────────────
    const io          = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const recipientId = String(recipientSave.user);
    const socketId    = userSockets && userSockets.get(recipientId);

    if (io && socketId) {
      io.to(socketId).emit('bankTransfer', {
        fromName:    senderData.name    || req.user.name || 'Ananun',
        fromAccount: senderData.bankAccount || '?',
        amount:      amt,
        newBalance:  recipientData.bank,
      });
    } else {
      recipientSave.pendingTransfers.push({
        fromName:    senderData.name    || req.user.name || 'Анануn',
        fromAccount: senderData.bankAccount || '?',
        amount:      amt,
        sentAt:      new Date(),
      });
    }

    await recipientSave.save();

    return res.json({
      success:       true,
      message:       `$${amt.toLocaleString()} pocoxancvec ${acc}-in`,
      newSenderBank: senderData.bank,
    });
  } catch (err) {
    console.error('Transfer error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── GET /api/game/transfers/pending ─────────────────────────────
router.get('/transfers/pending', async (req, res) => {
  try {
    // FIX: Atomic read-then-clear — findOneAndUpdate new:false-ով
    // Hин кodум՝ findOne → read → save — 2 hamajman request-ner
    // kkarohin кrknaki nuyniski transfer-nery ery cuyc tal:
    //   req1: finds [T1, T2], clears (save pending)
    //   req2: нaйдuma same [T1, T2] мinчev req1-ы save չи arnum
    //
    // FIX: findOneAndUpdate returns the doc BEFORE update (new:false),
    // поэтому pendingTransfers-ы мiaяn мek pahы կardinadrutyamb kkardacvutyamb:
    const save = await GameSave.findOneAndUpdate(
      { user: req.user._id },
      { $set: { pendingTransfers: [] } },
      { new: false } // ← returns OLD doc (with the transfers)
    );

    if (!save || !save.pendingTransfers || save.pendingTransfers.length === 0) {
      return res.json({ success: true, transfers: [] });
    }

    res.json({ success: true, transfers: save.pendingTransfers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
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
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── GET /api/game/search?name=xxx ───────────────────────────────
router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    if (!name || name.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Mutkagreq arnvazn 2 nish' });
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
          name:        pd.name        || 'Анануn',
          rank:        pd.rank        || 'Датаркапорt',
          bankAccount: pd.bankAccount || '—',
          avatarColor: pd.avatarColor || '#ff3b30',
          avatarImg:   pd.avatarImg   || null,
          online:      !!(userSockets && userSockets.has(uid)),
        };
      });
    res.json({ success: true, results });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── POST /api/game/friend-request ───────────────────────────────
router.post('/friend-request', async (req, res) => {
  try {
    const { toUserId } = req.body;
    if (!toUserId) return res.status(400).json({ success: false, message: 'UserId bацакаум e' });
    if (String(toUserId) === String(req.user._id))
      return res.status(400).json({ success: false, message: 'Inqd qez chi kareli' });

    const senderSave    = await GameSave.findOne({ user: req.user._id });
    const recipientSave = await GameSave.findOne({ user: toUserId });
    if (!senderSave)    return res.status(404).json({ success: false, message: 'Ձer сeйвəт чи гtнвeл' });
    // FIX: Uccum er 'Ձер сeйвəт' (Your) + кtrvac 'чи гtнве' (без л) —
    // уղղvaț՝ «Ստaкorтgolи сeйвəт» + avar verjnaradzev 'гtнвeл':
    if (!recipientSave) return res.status(404).json({ success: false, message: 'Ստaкorтgolи сeйвəт чи гtнвeл' });

    if ((senderSave.friends || []).some(f => String(f.userId) === String(toUserId)))
      return res.status(400).json({ success: false, message: 'Ardean ynkerner eq' });
    if ((recipientSave.friendRequests || []).some(f => String(f.fromUserId) === String(req.user._id)))
      return res.status(400).json({ success: false, message: 'Haytə ardean ugharkvats e' });

    const sd = senderSave.playerData || {};
    recipientSave.friendRequests.push({
      fromUserId:  req.user._id,
      fromName:    sd.name        || req.user.name || 'Анануn',
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
    res.json({ success: true, message: 'Ynkerutyան haytə ugharkvats' });
  } catch (err) {
    console.error('Friend request error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── GET /api/game/friend-requests ───────────────────────────────
router.get('/friend-requests', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id }).lean();
    if (!save) return res.json({ success: true, requests: [], friends: [] });
    const userSockets = req.app.get('userSockets');

    const friendIds = (save.friends || []).map(f => f.userId);
    let avatarMap = {};
    if (friendIds.length > 0) {
      const friendSaves = await GameSave.find(
        { user: { $in: friendIds } },
        { user: 1, 'playerData.avatarImg': 1, 'playerData.avatarColor': 1, 'playerData.rank': 1 }
      ).lean();
      friendSaves.forEach(fs => {
        avatarMap[String(fs.user)] = {
          avatarImg:   fs.playerData?.avatarImg   || null,
          avatarColor: fs.playerData?.avatarColor || '#ff3b30',
          rank:        fs.playerData?.rank        || '',
        };
      });
    }

    const friends = (save.friends || []).map(f => ({
      ...f,
      online:      !!(userSockets && userSockets.has(String(f.userId))),
      avatarImg:   avatarMap[String(f.userId)]?.avatarImg   || null,
      avatarColor: avatarMap[String(f.userId)]?.avatarColor || '#ff3b30',
      rank:        avatarMap[String(f.userId)]?.rank        || '',
    }));
    res.json({ success: true, requests: save.friendRequests || [], friends });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── POST /api/game/friend-request/respond ───────────────────────
router.post('/friend-request/respond', async (req, res) => {
  try {
    const { fromUserId, action } = req.body;
    if (!fromUserId || !['accept', 'decline'].includes(action))
      return res.status(400).json({ success: false, message: 'Ankor params' });

    const mySave = await GameSave.findOne({ user: req.user._id });
    if (!mySave) return res.status(404).json({ success: false, message: 'Сeйвə чи гtнвeл' });

    const idx = mySave.friendRequests.findIndex(r => String(r.fromUserId) === String(fromUserId));
    if (idx === -1) return res.status(404).json({ success: false, message: 'Hayt chka' });

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
    res.json({ success: true, message: action === 'accept' ? 'Darzav ynker' : 'Ynkerutyyan hayty merjvec' });
  } catch (err) {
    console.error('Respond error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
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
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── GET /api/game/chat/unread — unread counts per friend ────────
// (Must be before /chat/:userId to avoid route conflict)
router.get('/chat/unread', async (req, res) => {
  try {
    const myObjId = new mongoose.Types.ObjectId(String(req.user._id));
    const unread = await Message.aggregate([
      { $match: { to: myObjId, read: false } },
      { $group: { _id: '$from', count: { $sum: 1 } } },
    ]);
    const counts = {};
    unread.forEach(u => { counts[String(u._id)] = u.count; });
    res.json({ success: true, counts });
  } catch (err) {
    console.error('Unread error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── GET /api/game/chat/:userId — fetch conversation ─────────────
router.get('/chat/:userId', async (req, res) => {
  try {
    const myId    = req.user._id;
    const otherId = req.params.userId;
    const msgs = await Message.find({
      $or: [
        { from: myId, to: otherId },
        { from: otherId, to: myId },
      ],
    }).sort({ createdAt: 1 }).limit(120).lean();

    await Message.updateMany(
      { from: otherId, to: myId, read: false },
      { $set: { read: true } }
    );

    res.json({ success: true, messages: msgs });
  } catch (err) {
    console.error('Chat load error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── POST /api/game/chat — send message ──────────────────────────
router.post('/chat', async (req, res) => {
  try {
    const { toUserId, text } = req.body;

    if (!toUserId || !text || !text.trim()) {
      return res.status(400).json({ success: false, message: 'toUserId ev text patardir en' });
    }
    if (text.trim().length > 2000) {
      return res.status(400).json({ success: false, message: 'Sahmanapakum 2000 nish' });
    }
    if (String(toUserId) === String(req.user._id)) {
      return res.status(400).json({ success: false, message: 'Inqd qez chi kareli grel' });
    }

    const mySave = await GameSave.findOne({ user: req.user._id }).lean();
    const isFriend = mySave && (mySave.friends || []).some(f => String(f.userId) === String(toUserId));
    if (!isFriend) {
      return res.status(403).json({ success: false, message: 'Kareli e grel miayyn ynkerneryin' });
    }

    const msg = await Message.create({
      from: req.user._id,
      to:   toUserId,
      text: text.trim(),
    });

    const io          = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const socketId    = userSockets && userSockets.get(String(toUserId));

    if (io && socketId) {
      const senderPd   = mySave && mySave.playerData;
      const senderName = (senderPd && senderPd.name) || req.user.name || 'Анануn';
      io.to(socketId).emit('chatMessage', {
        _id:       String(msg._id),
        from:      String(req.user._id),
        fromName:  senderName,
        text:      msg.text,
        createdAt: msg.createdAt,
      });
    }

    res.json({
      success: true,
      message: {
        _id:       String(msg._id),
        from:      String(req.user._id),
        to:        String(toUserId),
        text:      msg.text,
        createdAt: msg.createdAt,
        read:      false,
      },
    });
  } catch (err) {
    console.error('Chat send error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

// ─── GET /api/game/player/:userId — public stats for a friend ────
router.get('/player/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const mySave = await GameSave.findOne({ user: req.user._id }).lean();
    const isFriend = mySave && (mySave.friends || []).some(f => String(f.userId) === String(userId));
    if (!isFriend) {
      return res.status(403).json({ success: false, message: 'Duq ynkerner cheq' });
    }

    const theirSave = await GameSave.findOne({ user: userId }).lean();
    if (!theirSave) {
      return res.status(404).json({ success: false, message: 'Ogtatery chi gtнвel' });
    }

    const pd = theirSave.playerData || {};
    const userSockets = req.app.get('userSockets');

    res.json({
      success: true,
      player: {
        name:        pd.name        || 'Ananun',
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
    console.error('Player stats error:', err);
    res.status(500).json({ success: false, message: 'Сerverи sxal' });
  }
});

module.exports = router;
