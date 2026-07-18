// routes/family.js — Yntaniq + War system
const express  = require('express');
const Family   = require('./FamilyModel');
const GameSave = require('./GameSave');
const { protect } = require('./auth');

const router = express.Router();
router.use(protect);

// ── Utilities ─────────────────────────────────────────────────────
function emitTo(io, userSockets, uid, event, payload) {
  const sid = userSockets && userSockets.get(String(uid));
  if (io && sid) { io.to(sid).emit(event, payload); return true; }
  return false;
}

function calcHP(power) { return Math.max(100, (power || 15) * 12); }

function calcDamage(pd) {
  const base  = Math.floor(Math.random() * 15) + 10;
  const bonus = Math.min(26, Math.floor((pd.level || 1) * 2 + ((pd.stats && pd.stats.crimes) || 0) / 50));
  return base + bonus;
}

// ── Helpers: end a war ────────────────────────────────────────────
async function endWar(attackerFam, defenderFam, winnerSide, io, userSockets) {
  const prize      = attackerFam.activeWar.warStake || 0;
  const winnerFam  = winnerSide === 'attacker' ? attackerFam : defenderFam;
  const loserFam   = winnerSide === 'attacker' ? defenderFam : attackerFam;

  winnerFam.treasury = (winnerFam.treasury || 0) + prize;

  winnerFam.warHistory.push({ enemyFamilyName: loserFam.name, result: 'won',  endedAt: new Date(), prizeAmount: prize });
  loserFam.warHistory.push({  enemyFamilyName: winnerFam.name, result: 'lost', endedAt: new Date(), prizeAmount: 0 });

  attackerFam.activeWar   = { enemyFamilyId: null, enemyFamilyName: null, declaredAt: null, attackerHP: 0, defenderHP: 0, warStake: 0, attacks: [] };
  defenderFam.underAttackBy = null;

  attackerFam.markModified('activeWar');

  await Promise.all([attackerFam.save(), defenderFam.save()]);

  const payload = { winnerName: winnerFam.name, winnerColor: winnerFam.color, loserName: loserFam.name, prize };

  emitTo(io, userSockets, String(attackerFam.bossId), 'warEnded', payload);
  emitTo(io, userSockets, String(defenderFam.bossId), 'warEnded', payload);
  for (const m of attackerFam.members) emitTo(io, userSockets, String(m.userId), 'warEnded', payload);
  for (const m of defenderFam.members) emitTo(io, userSockets, String(m.userId), 'warEnded', payload);
}

// ─── GET /api/family/my ───────────────────────────────────────────
router.get('/my', async (req, res) => {
  try {
    const uid = String(req.user._id);
    let family = await Family.findOne({ bossId: uid }).lean();
    if (!family) family = await Family.findOne({ 'members.userId': uid }).lean();
    if (!family) return res.json({ success: true, family: null });
    res.json({ success: true, family });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ─── GET /api/family/list ─────────────────────────────────────────
router.get('/list', async (req, res) => {
  try {
    const families = await Family.find({}, 'name bossName color power members treasury activeWar underAttackBy').lean();
    res.json({
      success: true,
      families: families.map(f => ({
        _id:         f._id,
        name:        f.name,
        bossName:    f.bossName,
        color:       f.color,
        power:       f.power,
        treasury:    f.treasury || 0,
        memberCount: (f.members || []).length + 1,
        atWar:       !!(f.activeWar && f.activeWar.enemyFamilyId) || !!(f.underAttackBy),
      })),
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ─── POST /api/family/create ──────────────────────────────────────
router.post('/create', async (req, res) => {
  try {
    const { name, color } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Ընտանիքի անունը պարտադիր է' });
    }

    const save = await GameSave.findOne({ user: req.user._id });
    if (!save) return res.status(404).json({ success: false, message: 'Պահպանումը չի գտնվել' });

    const pd  = save.playerData || {};
    const uid = String(req.user._id);

    const rank = (pd.rank || '').toLowerCase();
    const rankOk =
      rank.includes('mafio') || rank.includes('մաֆիոզ') ||
      rank.includes('kapo')  || rank.includes('capo') || rank.includes('կապո') ||
      rank.includes('don')   || rank.includes('դոն') ||
      rank.includes('godfather') || rank.includes('կնքահայր') || rank.includes('knqhayr');
    
    if (!rankOk) {
      return res.status(403).json({ success: false, message: `Պահանջվում է Մաֆիոզ կամ ավելի բարձր կոչում։ Դուք ունեք «${pd.rank}»` });
    }

    const COST = 250000;
    if ((pd.money || 0) < COST) {
      return res.status(400).json({ success: false, message: `Անհրաժեշտ է $${COST.toLocaleString()}: Դուք ունեք $${(pd.money || 0).toLocaleString()}` });
    }

    const existingBoss = await Family.findOne({ bossId: uid });
    if (existingBoss) return res.status(400).json({ success: false, message: 'Դուք արդեն բոսս եք՝ ' + existingBoss.name });

    const existingMember = await Family.findOne({ 'members.userId': uid });
    if (existingMember) return res.status(400).json({ success: false, message: 'Դուք արդեն անդամ եք՝ ' + existingMember.name });

    const nameTaken = await Family.findOne({ name: name.trim() });
    if (nameTaken) return res.status(400).json({ success: false, message: `«${name}» անունով ընտանիք արդեն գոյություն ունի` });

    const family = await Family.create({
      name:        name.trim(),
      bossId:      uid,
      bossName:    pd.name || req.user.name,
      bossAccount: pd.bankAccount || '?',
      power:       15,
      color:       color || '#ff3b30',
    });

    save.playerData = { ...pd, money: (pd.money || 0) - COST, familyId: String(family._id) };
    save.markModified('playerData');
    await save.save();

    res.json({ success: true, family });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success: false, message: 'Այդ անունով ընտանիք արդեն գոյություն ունի' });
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ─── POST /api/family/invite ──────────────────────────────────────
router.post('/invite', async (req, res) => {
  try {
    const { toAccount } = req.body;
    if (!toAccount) return res.status(400).json({ success: false, message: 'toAccount-ը պարտադիր է' });

    const uid    = String(req.user._id);
    const family = await Family.findOne({ bossId: uid });
    if (!family) return res.status(403).json({ success: false, message: 'Դուք բոսս չեք' });

    const recipientSave = await GameSave.findOne({ 'playerData.bankAccount': toAccount.trim().toUpperCase() });
    if (!recipientSave) return res.status(404).json({ success: false, message: `«${toAccount}» հաշվեհամարով օգտատեր չի գտնվել` });

    const recipientUid = String(recipientSave.user);
    if (recipientUid === uid) return res.status(400).json({ success: false, message: 'Ինքներդ ձեզ չեք կարող հրավիրել' });

    const alreadyMember = family.members.some(m => String(m.userId) === recipientUid);
    if (alreadyMember) return res.status(400).json({ success: false, message: 'Արդեն անդամ է' });

    const alreadyInvited = (recipientSave.familyInvites || []).some(i => String(i.familyId) === String(family._id));
    if (alreadyInvited) return res.status(400).json({ success: false, message: 'Արդեն հրավիրված է' });

    recipientSave.familyInvites = recipientSave.familyInvites || [];
    recipientSave.familyInvites.push({ familyId: family._id, familyName: family.name, bossId: uid, bossName: family.bossName, sentAt: new Date() });
    await recipientSave.save();

    const io = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    emitTo(io, userSockets, recipientUid, 'familyInvite', { familyId: String(family._id), familyName: family.name, bossName: family.bossName });

    res.json({ success: true, message: `Հրավերն ուղարկված է ${recipientSave.playerData?.name || toAccount}-ին` });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ─── POST /api/family/invite/respond ─────────────────────────────
router.post('/invite/respond', async (req, res) => {
  try {
    const { familyId, action } = req.body;
    if (!familyId || !['accept', 'decline'].includes(action)) return res.status(400).json({ success: false, message: 'Սխալ պարամետրեր' });

    const uid  = String(req.user._id);
    const save = await GameSave.findOne({ user: uid });
    if (!save) return res.status(404).json({ success: false, message: 'Պահպանումը չի գտնվել' });

    const idx = (save.familyInvites || []).findIndex(i => String(i.familyId) === String(familyId));
    if (idx === -1) return res.status(404).json({ success: false, message: 'Հրավերը չի գտնվել' });

    save.familyInvites.splice(idx, 1);

    if (action === 'accept') {
      const inFamily = await Family.findOne({ $or: [{ bossId: uid }, { 'members.userId': uid }] });
      if (inFamily) { await save.save(); return res.status(400).json({ success: false, message: 'Դուք արդեն ընտանիքում եք՝ ' + inFamily.name }); }

      const family = await Family.findById(familyId);
      if (!family) { await save.save(); return res.status(404).json({ success: false, message: 'Ընտանիքը ջնջվել է' }); }

      const pd = save.playerData || {};
      family.members.push({ userId: uid, name: pd.name || req.user.name, account: pd.bankAccount || '?', role: 'soldier', joinedAt: new Date() });
      await family.save();

      save.playerData = { ...pd, familyId: String(family._id) };
      save.markModified('playerData');
      await save.save();

      const io = req.app.get('io');
      const userSockets = req.app.get('userSockets');
      emitTo(io, userSockets, String(family.bossId), 'familyMemberJoined', { familyName: family.name, memberName: pd.name || req.user.name });

      return res.json({ success: true, message: `Դարձաք ${family.name} ընտանիքի անդամ`, family });
    }

    await save.save();
    res.json({ success: true, message: 'Հրավերը մերժվեց' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/invites', async (req, res) => {
  try {
    const save = await GameSave.findOne({ user: req.user._id });
    res.json({ success: true, invites: (save && save.familyInvites) || [] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/upgrade-power', async (req, res) => {
  try {
    const uid    = String(req.user._id);
    const family = await Family.findOne({ bossId: uid });
    if (!family) return res.status(403).json({ success: false, message: 'Դուք բոսս չեք' });

    const COST = 50000;
    const save = await GameSave.findOneAndUpdate({ user: uid, 'playerData.money': { $gte: COST } }, { $inc: { 'playerData.money': -COST } }, { new: true });
    if (!save) return res.status(400).json({ success: false, message: 'Բավարար գումար չկա ($50,000)' });

    family.power += 10;
    await family.save();

    res.json({ success: true, power: family.power, message: `Ուժը դարձավ՝ ${family.power}` });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/recruit', async (req, res) => {
  try {
    const uid    = String(req.user._id);
    const family = await Family.findOne({ bossId: uid });
    if (!family) return res.status(403).json({ success: false, message: 'Դուք բոսս չեք' });

    const COST = 10000;
    const save = await GameSave.findOneAndUpdate({ user: uid, 'playerData.money': { $gte: COST } }, { $inc: { 'playerData.money': -COST } }, { new: true });
    if (!save) return res.status(400).json({ success: false, message: 'Բավարար գումար չկա ($10,000)' });

    family.members.push({ userId: new (require('mongoose').Types.ObjectId)(), name: 'NPC Զինվոր', account: '—', role: 'soldier' });
    await family.save();

    res.json({ success: true, totalMembers: family.members.length + 1 });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.delete('/leave', async (req, res) => {
  try {
    const uid = String(req.user._id);
    const assBoss = await Family.findOne({ bossId: uid });
    if (assBoss) {
      if (assBoss.activeWar && assBoss.activeWar.enemyFamilyId) {
        return res.status(400).json({ success: false, message: 'Պատերազմի ժամանակ չի կարելի լքել: Նախ կապիտուլյացիա հայտարարեք:' });
      }
      const memberIds = assBoss.members.map(m => String(m.userId));
      await GameSave.updateMany({ user: { $in: [...memberIds, uid] } }, { $unset: { 'playerData.familyId': '' } });
      await Family.findByIdAndDelete(assBoss._id);
      return res.json({ success: true, message: `${assBoss.name} ընտանիքը ցրվեց` });
    }

    const asMember = await Family.findOne({ 'members.userId': uid });
    if (asMember) {
      if ((asMember.activeWar && asMember.activeWar.enemyFamilyId) || asMember.underAttackBy) {
        return res.status(400).json({ success: false, message: 'Պատերազմի ժամանակ չի կարելի լքել' });
      }
      asMember.members = asMember.members.filter(m => String(m.userId) !== uid);
      await asMember.save();

      const save = await GameSave.findOne({ user: uid });
      if (save) {
        const pd = save.playerData || {};
        delete pd.familyId;
        save.playerData = pd;
        save.markModified('playerData');
        await save.save();
      }
      return res.json({ success: true, message: `Դուք դուրս եկաք ${asMember.name} ընտանիքից` });
    }
    res.status(404).json({ success: false, message: 'Դուք ընտանիքում չեք' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.delete('/kick/:userId', async (req, res) => {
  try {
    const uid    = String(req.user._id);
    const family = await Family.findOne({ bossId: uid });
    if (!family) return res.status(403).json({ success: false, message: 'Դուք բոսս չեք' });

    const targetId = req.params.userId;
    const before   = family.members.length;
    family.members = family.members.filter(m => String(m.userId) !== targetId);
    if (family.members.length === before) return res.status(404).json({ success: false, message: 'Անդամը չի գտնվել' });
    await family.save();

    const ts = await GameSave.findOne({ user: targetId });
    if (ts) {
      const pd = ts.playerData || {};
      delete pd.familyId;
      ts.playerData = pd;
      ts.markModified('playerData');
      await ts.save();
    }
    res.json({ success: true, message: 'Անդամը հեռացվեց' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

// ════════════════════════════════════════════════════════════════════
//  WAR SYSTEM
// ════════════════════════════════════════════════════════════════════

router.post('/war/declare', async (req, res) => {
  try {
    const { enemyFamilyId } = req.body;
    if (!enemyFamilyId) return res.status(400).json({ success: false, message: 'enemyFamilyId-ն պարտադիր է' });

    const uid   = String(req.user._id);
    const myFam = await Family.findOne({ bossId: uid });
    if (!myFam) return res.status(403).json({ success: false, message: 'Միայն բոսսը կարող է պատերազմ հայտարարել' });

    if (String(myFam._id) === String(enemyFamilyId)) return res.status(400).json({ success: false, message: 'Ձեր սեփական ընտանիքին չեք կարող պատերազմ հայտարարել' });
    if (myFam.activeWar && myFam.activeWar.enemyFamilyId) return res.status(400).json({ success: false, message: 'Դուք արդեն պատերազմի մեջ եք' });

    const enemyFam = await Family.findById(enemyFamilyId);
    if (!enemyFam) return res.status(404).json({ success: false, message: 'Թշնամի ընտանիքը չի գտնվել' });

    if ((enemyFam.activeWar && enemyFam.activeWar.enemyFamilyId) || enemyFam.underAttackBy) {
      return res.status(400).json({ success: false, message: `${enemyFam.name}-ը արդեն պատերազմի մեջ է` });
    }

    const COST = 100000;
    const save = await GameSave.findOneAndUpdate({ user: uid, 'playerData.money': { $gte: COST } }, { $inc: { 'playerData.money': -COST } }, { new: true });
    if (!save) return res.status(400).json({ success: false, message: `Պատերազմ հայտարարելն արժե $${COST.toLocaleString()} (գումարը չի բավականացնում)` });

    const attackerHP = calcHP(myFam.power);
    const defenderHP = calcHP(enemyFam.power);

    myFam.activeWar = { enemyFamilyId: enemyFam._id, enemyFamilyName: enemyFam.name, declaredAt: new Date(), attackerHP, defenderHP, warStake: COST, attacks: [] };
    myFam.markModified('activeWar');
    await myFam.save();

    enemyFam.underAttackBy = myFam._id;
    await enemyFam.save();

    const io = req.app.get('io');
    const userSockets = req.app.get('userSockets');
    const warPayload = { attackerFamilyId: String(myFam._id), attackerFamilyName: myFam.name, attackerBossName: myFam.bossName, attackerColor: myFam.color, myHP: defenderHP, enemyHP: attackerHP };

    emitTo(io, userSockets, String(enemyFam.bossId), 'warDeclared', warPayload);
    for (const m of enemyFam.members) emitTo(io, userSockets, String(m.userId), 'warDeclared', warPayload);

    res.json({ success: true, message: `⚔️ Պատերազմ հայտարարվեց ${enemyFam.name}-ի դեմ։`, attackerHP, defenderHP, warStake: COST });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/war/attack', async (req, res) => {
  try {
    const uid = String(req.user._id);

    let myFam = await Family.findOne({ bossId: uid });
    if (!myFam) myFam = await Family.findOne({ 'members.userId': uid });
    if (!myFam) return res.status(403).json({ success: false, message: 'Դուք ընտանիքում չեք' });

    let attackerFam, defenderFam, isDefender;

    if (myFam.activeWar && myFam.activeWar.enemyFamilyId) {
      attackerFam = myFam;
      defenderFam = await Family.findById(myFam.activeWar.enemyFamilyId);
      isDefender  = false;
    } else if (myFam.underAttackBy) {
      attackerFam = await Family.findById(myFam.underAttackBy);
      defenderFam = myFam;
      isDefender  = true;
    } else {
      return res.status(400).json({ success: false, message: 'Ձեր ընտանիքը պատերազմի մեջ չէ' });
    }

    if (!attackerFam || !attackerFam.activeWar || !attackerFam.activeWar.enemyFamilyId) return res.status(400).json({ success: false, message: 'Պատերազմն ընթացքի մեջ է' });

    const COOLDOWN_MS = 10 * 60 * 1000;
    const myLastAttack = (attackerFam.activeWar.attacks || []).filter(a => String(a.attackerId) === uid).sort((a, b) => new Date(b.attackedAt) - new Date(a.attackedAt))[0];

    if (myLastAttack) {
      const diff = Date.now() - new Date(myLastAttack.attackedAt).getTime();
      if (diff < COOLDOWN_MS) {
        const remaining = Math.ceil((COOLDOWN_MS - diff) / 60000);
        return res.status(429).json({ success: false, message: `⏳ Սպասեք ևս ${remaining} րոպե`, cooldownRemaining: COOLDOWN_MS - diff });
      }
    }

    const save = await GameSave.findOne({ user: uid }).lean();
    const pd   = (save && save.playerData) || {};
    const damage = calcDamage(pd);

    if (isDefender) {
      attackerFam.activeWar.attackerHP = Math.max(0, (attackerFam.activeWar.attackerHP || 0) - damage);
    } else {
      attackerFam.activeWar.defenderHP = Math.max(0, (attackerFam.activeWar.defenderHP || 0) - damage);
    }

    attackerFam.activeWar.attacks.push({ attackerId: uid, attackerName: pd.name || req.user.name || 'Անানун', side: isDefender ? 'defender' : 'attacker', damage, attackedAt: new Date() });
    if (attackerFam.activeWar.attacks.length > 50) {
        attackerFam.activeWar.attacks = attackerFam.activeWar.attacks.slice(-50);
    }
    attackerFam.markModified('activeWar');

    const attackerHP = attackerFam.activeWar.attackerHP;
    const defenderHP = attackerFam.activeWar.defenderHP;

    const io = req.app.get('io');
    const userSockets = req.app.get('userSockets');

    if (defenderHP <= 0) {
      await endWar(attackerFam, defenderFam, 'attacker', io, userSockets);
      return res.json({ success: true, damage, attackerHP: 0, defenderHP: 0, warEnded: true, winner: attackerFam.name, message: `🏆 ${attackerFam.name}-ը հաղթեց պատերազմը։` });
    }

    if (attackerHP <= 0) {
      await endWar(attackerFam, defenderFam, 'defender', io, userSockets);
      return res.json({ success: true, damage, attackerHP: 0, defenderHP: 0, warEnded: true, winner: defenderFam.name, message: `🛡️ ${defenderFam.name}-ը պաշտպանվեց պատերազմում։` });
    }

    await attackerFam.save();

    const attackPayload = { attackerName: pd.name || req.user.name, side: isDefender ? 'defender' : 'attacker', damage, attackerHP, defenderHP };

    emitTo(io, userSockets, String(attackerFam.bossId), 'warAttack', attackPayload);
    emitTo(io, userSockets, String(defenderFam.bossId), 'warAttack', attackPayload);
    for (const m of attackerFam.members) emitTo(io, userSockets, String(m.userId), 'warAttack', attackPayload);
    for (const m of defenderFam.members) emitTo(io, userSockets, String(m.userId), 'warAttack', attackPayload);

    res.json({ success: true, damage, attackerHP, defenderHP, warEnded: false, message: `⚔️ Հասցվեց ${damage} վնաս։`, cooldownMs: COOLDOWN_MS });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.get('/war/status', async (req, res) => {
  try {
    const uid = String(req.user._id);

    let myFam = await Family.findOne({ bossId: uid }).lean();
    if (!myFam) myFam = await Family.findOne({ 'members.userId': uid }).lean();
    if (!myFam) return res.json({ success: true, war: null });

    if (myFam.activeWar && myFam.activeWar.enemyFamilyId) {
      return res.json({ success: true, war: { role: 'attacker', enemyFamilyId: myFam.activeWar.enemyFamilyId, enemyFamilyName: myFam.activeWar.enemyFamilyName, declaredAt: myFam.activeWar.declaredAt, myHP: myFam.activeWar.attackerHP, enemyHP: myFam.activeWar.defenderHP, warStake: myFam.activeWar.warStake, recentAttacks: (myFam.activeWar.attacks || []).slice(-10) } });
    }

    if (myFam.underAttackBy) {
      const attackerFam = await Family.findById(myFam.underAttackBy).lean();
      if (!attackerFam || !attackerFam.activeWar) return res.json({ success: true, war: null });
      return res.json({ success: true, war: { role: 'defender', enemyFamilyId: attackerFam._id, enemyFamilyName: attackerFam.name, declaredAt: attackerFam.activeWar.declaredAt, myHP: attackerFam.activeWar.defenderHP, enemyHP: attackerFam.activeWar.attackerHP, warStake: attackerFam.activeWar.warStake, recentAttacks: (attackerFam.activeWar.attacks || []).slice(-10) } });
    }

    res.json({ success: true, war: null });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

router.post('/war/surrender', async (req, res) => {
  try {
    const uid = String(req.user._id);
    let attackerFam, defenderFam;

    const asAttacker = await Family.findOne({ bossId: uid, 'activeWar.enemyFamilyId': { $ne: null } });
    if (asAttacker) {
      attackerFam = asAttacker;
      defenderFam = await Family.findById(asAttacker.activeWar.enemyFamilyId);
    } else {
      const asDef = await Family.findOne({ bossId: uid, underAttackBy: { $ne: null } });
      if (!asDef) return res.status(400).json({ success: false, message: 'Ձեր ընտանիքը պատերազմի մեջ չէ' });
      defenderFam = asDef;
      attackerFam = await Family.findById(asDef.underAttackBy);
    }

    if (!attackerFam || !defenderFam) return res.status(400).json({ success: false, message: 'Պատերազմը չի գտնվել' });

    const surrenderingFamily = String(attackerFam.bossId) === uid ? 'attacker' : 'defender';
    const io = req.app.get('io');
    const userSockets = req.app.get('userSockets');

    await endWar(attackerFam, defenderFam, surrenderingFamily === 'attacker' ? 'defender' : 'attacker', io, userSockets);

    res.json({ success: true, message: '🏳️ Դուք կապիտուլյացիա հայտարարեցիք։' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Սերվերի սխալ' });
  }
});

module.exports = router;