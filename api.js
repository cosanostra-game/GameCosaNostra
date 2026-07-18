// api.js — Frontend API helper + Socket.IO real-time

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
    const err = new Error(data.message || 'Սերվերի սխալ');
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

// ── Family list ──
async function apiFamilyList() {
  return (await apiRequest('/family/list')).families;
}

// ── War system ────────────────────────────────────────────────────
async function apiDeclareWar(enemyFamilyId) {
  return apiRequest('/family/war/declare', 'POST', { enemyFamilyId });
}

async function apiWarAttack() {
  return apiRequest('/family/war/attack', 'POST');
}

async function apiGetWarStatus() {
  return apiRequest('/family/war/status');
}

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
    auth:                { token },
    transports:          ['websocket', 'polling'],
    reconnection:        true,
    reconnectionAttempts: 10,
    reconnectionDelay:   1000,
  });

  _socket.on('familyInvite', (data) => {
    const msg = (window.t ? t('notif.familyInvite') : '🏰 Ընտանեկան հրավեր: <b>{family}</b> (Բոսս՝ {boss})')
                .replace('{family}', data.familyName)
                .replace('{boss}', data.bossName);
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof window.onFamilyInviteReceived === 'function') window.onFamilyInviteReceived(data);
  });

  _socket.on('familyMemberJoined', (data) => {
    const msg = (window.t ? t('notif.memberJoined') : '👤 {member}-ը միացավ {family} ընտանիքին!')
                .replace('{member}', data.memberName)
                .replace('{family}', data.familyName);
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof renderFamilies === 'function') renderFamilies();
  });

  _socket.on('bankTransfer', (data) => {
    const msg = (window.t ? t('notif.bankTransfer') : '🏦 Բանկային մուտք +${amount} ← {from} ({account})')
                .replace('{amount}', Number(data.amount).toLocaleString())
                .replace('{from}', data.fromName)
                .replace('{account}', data.fromAccount);
    if (typeof showNotification === 'function') showNotification(msg, true);
    else alert(msg);
    if (typeof player !== 'undefined') {
      player.bank = data.newBalance;
      if (typeof updateUI === 'function') updateUI();
    }
    if (typeof window.onBankTransferReceived === 'function') window.onBankTransferReceived(data);
  });

  // ── War events ───────────────────────────────────────────────

  _socket.on('warDeclared', (data) => {
    const msg = (window.t ? t('notif.warDeclared') : '⚔️ <b>{attacker}</b>-ը (Բոսս՝ {boss}) պատերազմ է հայտարարել ձեր ընտանիքի դեմ:')
                .replace('{attacker}', data.attackerFamilyName)
                .replace('{boss}', data.attackerBossName);
    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof window.onWarDeclared === 'function') window.onWarDeclared(data);
    if (typeof renderWarStatus === 'function') renderWarStatus();
  });

  _socket.on('warAttack', (data) => {
    const sideArm = data.side === 'attacker' ? '⚔️' : '🛡️';
    const msg = (window.t ? t('notif.warAttack') : '{icon} <b>{attacker}</b>-ը հասցրեց <b>{damage}</b> վնաս: [{myHp} vs {enemyHp}]')
                .replace('{icon}', sideArm)
                .replace('{attacker}', data.attackerName)
                .replace('{damage}', data.damage)
                .replace('{myHp}', data.attackerHP)
                .replace('{enemyHp}', data.defenderHP);
    if (typeof showNotification === 'function') showNotification(msg, false);
    if (typeof window.onWarAttack === 'function') window.onWarAttack(data);
    if (typeof renderWarStatus === 'function') renderWarStatus();
  });

  _socket.on('warEnded', (data) => {
    const isWinner = data.winnerName === (
      typeof player !== 'undefined' && player.familyName ? player.familyName : null
    );
    const emoji = isWinner ? '🏆' : '💀';
    const prizeStr = data.prize > 0 ? ` (+$${data.prize.toLocaleString()})` : '';
    const msg = (window.t ? t('notif.warEnded') : '{icon} Պատերազմն ավարտվեց: Հաղթող՝ <b>{winner}</b> {prize}')
                .replace('{icon}', emoji)
                .replace('{winner}', data.winnerName)
                .replace('{prize}', prizeStr);

    if (typeof showNotification === 'function') showNotification(msg, true);
    if (typeof window.onWarEnded === 'function') window.onWarEnded(data);
    if (typeof renderWarStatus === 'function') renderWarStatus();
    if (typeof renderFamilies === 'function') renderFamilies();
  });

  _socket.on('connect', () => { console.log('🔌 Socket connected:', _socket.id); });
  _socket.on('connect_error', (err) => { console.warn('Socket connect error:', err.message); });
}

function disconnectSocket() {
  if (_socket) {
    _socket.disconnect();
    _socket = null;
  }
}

function _handlePendingTransfers(transfers) {
  transfers.slice(-5).forEach((t, i) => {
    setTimeout(() => {
      const msg = (window.t ? window.t('notif.bankTransfer') : '🏦 Բանկային մուտք +${amount} ← {from} ({account})')
                  .replace('{amount}', Number(t.amount).toLocaleString())
                  .replace('{from}', t.fromName)
                  .replace('{account}', t.fromAccount);
      if (typeof showNotification === 'function') showNotification(msg, true);
      else alert(msg);
    }, i * 2000);
  });
}