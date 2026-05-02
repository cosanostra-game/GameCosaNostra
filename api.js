// api.js — Frontend API helper + Socket.IO real-time
// Ogtagorcum: <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
//             <script src="api.js"></script>

const API_BASE  = 'https://cosa-nostra.onrender.com';
const TOKEN_KEY = 'cosaNostra_JWT';

const getToken   = ()  => localStorage.getItem(TOKEN_KEY);
const saveToken  = (t) => localStorage.setItem(TOKEN_KEY, t);
const clearToken = ()  => localStorage.removeItem(TOKEN_KEY);

// ── FIX: Error-ին status կոդ կցել, որ catch-ում ճիշտ detect անենք ──
async function apiRequest(endpoint, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = { method, headers };
  if (body) config.body = JSON.stringify(body);

  const res  = await fetch(`${API_BASE}/api${endpoint}`, config);
  const data = await res.json();
  if (!res.ok) {
    // FIX: status-ն error object-ին կցում ենք, ոչ թե string-ի մեջ թաղում
    const err = new Error(data.message || 'Սerverի sxal');
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

    // Offline-ի ժամանակ կուտակված pending transfer-ներ — ցույց տալ load-ի ժամանակ
    if (data.pendingTransfers && data.pendingTransfers.length > 0) {
      _handlePendingTransfers(data.pendingTransfers);
      apiRequest('/game/transfers/clear', 'POST').catch(() => {});
    }

    return data.playerData;
  } catch (err) {
    // FIX: err.status === 404 — ճիշտ check HTTP կոդի վրա, ոչ թե string-ի
    // Հին կոդը `err.message.includes('404')` — երբeq true չէր դaронум,
    // քանի որ message-ն server-ի text-ն է ('Save գtнvac che'), ոչ թե '404':
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

// ── Socket.IO — Real-time ─────────────────────────────────────────
let _socket = null;

function initSocket() {
  const token = getToken();
  if (!token) return;

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

  _socket.on('bankTransfer', (data) => {
    const msg = `🏦 Բankayin mutoq  +$${Number(data.amount).toLocaleString()}  ←  ${data.fromName} (${data.fromAccount})`;
    if (typeof showNotification === 'function') {
      showNotification(msg, true);
    } else {
      alert(msg);
    }

    if (typeof window !== 'undefined' && typeof player !== 'undefined') {
      player.bank = data.newBalance;
      if (typeof updateUI === 'function') updateUI();
    }

    if (typeof window.onBankTransferReceived === 'function') {
      window.onBankTransferReceived(data);
    }
  });
}

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
