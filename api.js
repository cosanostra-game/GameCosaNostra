// api.js — Frontend API helper + Socket.IO real-time
// Ogtagorcum: <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
//             <script src="api.js"></script>

const API_BASE  = 'https://cosa-nostra.onrender.com';
const TOKEN_KEY = 'cosaNostra_JWT';

const getToken   = ()  => localStorage.getItem(TOKEN_KEY);
const saveToken  = (t) => localStorage.setItem(TOKEN_KEY, t);
const clearToken = ()  => localStorage.removeItem(TOKEN_KEY);

async function apiRequest(endpoint, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = { method, headers };
  if (body) config.body = JSON.stringify(body);

  const res  = await fetch(`${API_BASE}/api${endpoint}`, config);
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(data.message || 'Serverի sxal');
    err.status = res.status;
    throw err;
  }
  return data;
}

// ── Auth ──────────────────────────────────────────────────────────
async function apiRegister(name, email, password, avatarColor) {
  const data = await apiRequest('/auth/register', 'POST', { name, email, password, avatarColor });
  saveToken(data.token);
  return data.user;
}
async function apiLogin(email, password) {
  const data = await apiRequest('/auth/login', 'POST', { email, password });
  saveToken(data.token);
  return data.user;
}
function apiLogout() {
  disconnectSocket();
  clearToken();
  window.location.href = 'index.html';
}
async function apiGetMe() {
  return (await apiRequest('/auth/me')).user;
}
async function apiUpdateProfile(updates) {
  return (await apiRequest('/auth/profile', 'PATCH', updates)).user;
}

// ── Game Save ─────────────────────────────────────────────────────
async function apiLoadGame() {
  try {
    const data = await apiRequest('/game/save');
    if (data.pendingTransfers && data.pendingTransfers.length > 0) {
      _handlePendingTransfers(data.pendingTransfers);
      apiRequest('/game/transfers/clear', 'POST').catch(() => {});
    }
    return data.playerData;
  } catch (err) {
    if (err.status === 404) return null;
    throw err;
  }
}
async function apiSaveGame(playerData) {
  return apiRequest('/game/save', 'POST', { playerData });
}
async function apiResetGame() {
  return apiRequest('/game/save', 'DELETE');
}

// ── Bank Transfer ─────────────────────────────────────────────────
async function apiTransferMoney(toAccount, amount) {
  return apiRequest('/game/transfer', 'POST', { toAccount, amount });
}

// ── Family ────────────────────────────────────────────────────────
async function apiGetMyFamily()                          { return (await apiRequest('/family/my')).family; }
async function apiCreateFamily(name, color)              { return (await apiRequest('/family/create', 'POST', { name, color })).family; }
async function apiInviteToFamily(toAccount)              { return apiRequest('/family/invite', 'POST', { toAccount }); }
async function apiRespondFamilyInvite(familyId, action)  { return apiRequest('/family/invite/respond', 'POST', { familyId, action }); }
async function apiGetFamilyInvites()                     { return (await apiRequest('/family/invites')).invites; }
async function apiFamilyUpgradePower()                   { return apiRequest('/family/upgrade-power', 'POST'); }
async function apiFamilyRecruit()                        { return apiRequest('/family/recruit', 'POST'); }
async function apiLeaveFamily()                          { return apiRequest('/family/leave', 'DELETE'); }
async function apiKickFamilyMember(userId)               { return apiRequest(`/family/kick/${userId}`, 'DELETE'); }

// ── Family list (bolor yntaniqnery — paterazm haytararelu hamar) ──
async function apiFamilyList() {
  return (await apiRequest('/family/list')).families;
}

// ── War system ────────────────────────────────────────────────────

/**
 * Paterazm haytararel.
 * @param {string} enemyFamilyId  - Tshnamiyntaniqy MongoDB _id
 * @returns {{ success, message, attackerHP, defenderHP, warStake }}
 */
async function apiDeclareWar(enemyFamilyId) {
  return apiRequest('/family/war/declare', 'POST', { enemyFamilyId });
}

/**
 * Harcum — boss-y kkam yntaniqy andamy karogh e kanchet.
 * Cooldown: 10 rope mtqatsutyunic hetо.
 * @returns {{ success, damage, attackerHP, defenderHP, warEnded, winner?, message }}
 */
async function apiWarAttack() {
  return apiRequest('/family/war/attack', 'POST');
}

/**
 * Paterazmi vichak — qo yntaniqy HP-ery ev thshnamiyntaniqy HP-ery.
 * @returns {{ success, war: { role, enemyFamilyName, myHP, enemyHP, warStake, recentAttacks } | null }}
 */
async function apiGetWarStatus() {
  return apiRequest('/family/war/status');
}

/**
 * Kapitulyatsiya — boss-y ankumnery inknamiayn paterazm kapitulyatsiana.
 * Haxhogy thshnaminy.
 */
async function apiSurrender() {
  return apiRequest('/family/war/surrender', 'POST');
}

// ── Socket.IO — Real-time ─────────────────────────────────────────
let _socket = null;

function initSocket() {
  const token = getToken();
  if (!token) return;
  if (_socket && _socket.connected) return;

  _socket = io(API_BASE, {
    auth:       { token },
    transports: ['websocket', 'polling'],
  });

  // ── Existing events ──────────────────────────────────────────
  _socket.on('familyInvite', (data) => {
    const msg = `🏰 Yntaniqayin hraver: <b>${data.familyName}</b> (Boss՝ ${data.bossName})`;
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof window.onFamilyInviteReceived === 'function') window.onFamilyInviteReceived(data);
  });

  _socket.on('familyMemberJoined', (data) => {
    const msg = `👤 ${data.memberName} miatsav ${data.familyName} yntaniqy!`;
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof renderFamilies === 'function') renderFamilies();
  });

  _socket.on('bankTransfer', (data) => {
    const msg = `🏦 Bankayin mutoq +$${Number(data.amount).toLocaleString()} ← ${data.fromName} (${data.fromAccount})`;
    if (typeof showNotification === 'function') showNotification(msg, true);
    else alert(msg);
    if (typeof player !== 'undefined') {
      player.bank = data.newBalance;
      if (typeof updateUI === 'function') updateUI();
    }
    if (typeof window.onBankTransferReceived === 'function') window.onBankTransferReceived(data);
  });

  // ── War events ───────────────────────────────────────────────

  // Qo yntaniqin paterazm haytararvec
  _socket.on('warDeclared', (data) => {
    const msg = `⚔️ <b>${data.attackerFamilyName}</b>-ы (Boss՝ ${data.attackerBossName}) paterazm e haytararel qo yntaniqin dem!`;
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof window.onWarDeclared === 'function') window.onWarDeclared(data);
    // Refresh war UI if open
    if (typeof renderWarStatus === 'function') renderWarStatus();
  });

  // Harchum klinel
  _socket.on('warAttack', (data) => {
    const sideArm = data.side === 'attacker' ? '⚔️' : '🛡️';
    const msg = `${sideArm} <b>${data.attackerName}</b> harcvec <b>${data.damage}</b> vnasvacq!  [${data.attackerHP} vs ${data.defenderHP}]`;
    if (typeof showNotification === 'function') showNotification(msg, false);
    if (typeof window.onWarAttack === 'function') window.onWarAttack(data);
    if (typeof renderWarStatus === 'function') renderWarStatus();
  });

  // Paterazm avartvel
  _socket.on('warEnded', (data) => {
    const isWinner = data.winnerName === (
      typeof player !== 'undefined' && player.familyName ? player.familyName : null
    );
    const emoji = isWinner ? '🏆' : '💀';
    const msg   = `${emoji} Paterazm avartvec! Haxhog՝ <b>${data.winnerName}</b>` +
                  (data.prize > 0 ? ` (+$${data.prize.toLocaleString()})` : '');
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof window.onWarEnded === 'function') window.onWarEnded(data);
    if (typeof renderWarStatus === 'function') renderWarStatus();
    if (typeof renderFamilies === 'function') renderFamilies();
  });

  _socket.on('connect', () => {
    console.log('🔌 Socket connected:', _socket.id);
  });

  _socket.on('connect_error', (err) => {
    console.warn('Socket connect error:', err.message);
  });
}

function disconnectSocket() {
  if (_socket) {
    _socket.disconnect();
    _socket = null;
  }
}

// ── Internal: pending offline notifications ───────────────────────
function _handlePendingTransfers(transfers) {
  transfers.slice(-5).forEach((t, i) => {
    setTimeout(() => {
      const msg = `🏦 Bankayin mutoq +$${Number(t.amount).toLocaleString()} ← ${t.fromName} (${t.fromAccount})`;
      if (typeof showNotification === 'function') showNotification(msg, true);
      else alert(msg);
    }, i * 2000);
  });
}
