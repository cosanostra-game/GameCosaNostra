// api.js — Frontend API helper + Socket.IO real-time
// Ogtagorcum: <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
//             <script src="api.js"></script>

const API_BASE  = 'https://cosa-nostra.onrender.com'; // ← dzher URL
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
  if (!res.ok) throw new Error(data.message || 'Servreri skhal');
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

    // Offline-ի ժամանակ կուտակված pending transfer-ներ — ցույց տալ load-ի ժամանակ
    if (data.pendingTransfers && data.pendingTransfers.length > 0) {
      _handlePendingTransfers(data.pendingTransfers);
      apiRequest('/game/transfers/clear', 'POST').catch(() => {});
    }

    return data.playerData;
  } catch (err) {
    if (err.message.includes('404') || err.message.toLowerCase().includes('save')) return null;
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

// ── Socket.IO — Real-time ─────────────────────────────────────────
let _socket = null;

/**
 * initSocket(userId) — Login-ից հետո կանչել։
 * Socket-ը JWT-ով authenticate է լինում, հետո real-time transfer event-եր ստանում։
 */
function initSocket() {
  const token = getToken();
  if (!token) return;

  // Արդեն կապված է — չկրկնել
  if (_socket && _socket.connected) return;

  _socket = io(API_BASE, {
    auth: { token },
    transports: ['websocket', 'polling'],
  });

  _socket.on('connect', () => {
    console.log('🔌 Socket connected:', _socket.id);
  });

  _socket.on('connect_error', (err) => {
    console.warn('Socket connect error:', err.message);
  });

  // ── Real-time bancayin mutoq ──────────────────────────────────
  _socket.on('bankTransfer', (data) => {
    // data = { fromName, fromAccount, amount, newBalance }

    // 1. Ծանուցում ցույց տալ
    const msg = `🏦 Բankayin mutoq  +$${Number(data.amount).toLocaleString()}  ←  ${data.fromName} (${data.fromAccount})`;
    if (typeof showNotification === 'function') {
      showNotification(msg, true);
    } else {
      alert(msg);
    }

    // 2. Խաղի player.bank-ը թարմացնել (landing.html-ի global player object)
    //    + UI-ն թարմացնել
    if (typeof window !== 'undefined' && typeof player !== 'undefined') {
      player.bank = data.newBalance;
      if (typeof updateUI === 'function') updateUI();
    }

    // 3. Հատուկ callback — եթե game-ը ավելի ճկուն handling ուզի
    if (typeof window.onBankTransferReceived === 'function') {
      window.onBankTransferReceived(data);
    }
  });
}

/**
 * disconnectSocket() — Logout-ի ժամանակ կանչել։
 */
function disconnectSocket() {
  if (_socket) {
    _socket.disconnect();
    _socket = null;
  }
}

// ── Internal: pending notifications (offline fallback) ────────────
function _handlePendingTransfers(transfers) {
  transfers.slice(-5).forEach((t, i) => {
    setTimeout(() => {
      const msg = `🏦 Bancayin mutoq  +$${Number(t.amount).toLocaleString()}  ←  ${t.fromName} (${t.fromAccount})`;
      if (typeof showNotification === 'function') {
        showNotification(msg, true);
      } else {
        alert(msg);
      }
    }, i * 2000);
  });
}
