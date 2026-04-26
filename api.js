// api.js — Frontend-ի API helper (index.html և landing.html-ում include անել)
// ══════════════════════════════════════════════════════════════════
// Օgtagorcum: <script src="api.js"></script>
// ══════════════════════════════════════════════════════════════════

const API_BASE = 'https://cosa-nostra.onrender.com'; // ← AYS POKHEQ
// Local dev-i jamanak:
// const API_BASE = 'http://localhost:5000';

const TOKEN_KEY = 'cosaNostra_JWT';

// ─── Token helpers ────────────────────────────────────────────────
const getToken   = ()       => localStorage.getItem(TOKEN_KEY);
const saveToken  = (token)  => localStorage.setItem(TOKEN_KEY, token);
const clearToken = ()       => localStorage.removeItem(TOKEN_KEY);

// ─── Fetch wrapper ────────────────────────────────────────────────
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

// ══════════════════════════════════════════════════════════════════
//  AUTH API
// ══════════════════════════════════════════════════════════════════

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
  clearToken();
  window.location.href = 'index.html';
}

async function apiGetMe() {
  const data = await apiRequest('/auth/me');
  return data.user;
}

async function apiUpdateProfile(updates) {
  const data = await apiRequest('/auth/profile', 'PATCH', updates);
  return data.user;
}

// ══════════════════════════════════════════════════════════════════
//  GAME SAVE API
// ══════════════════════════════════════════════════════════════════

async function apiLoadGame() {
  try {
    const data = await apiRequest('/game/save');
    // Pending transfers-ə ardyunabel — xaghatsoghi vra kanch katarelu hamar
    if (data.pendingTransfers && data.pendingTransfers.length > 0) {
      _showPendingTransferNotifications(data.pendingTransfers);
      // Xyanotsumnern makhel server-ic
      apiRequest('/game/transfers/clear', 'POST').catch(() => {});
    }
    return data.playerData;
  } catch (err) {
    if (err.message.includes('404') || err.message.toLowerCase().includes('save')) {
      return null;
    }
    throw err;
  }
}

async function apiSaveGame(playerData) {
  return apiRequest('/game/save', 'POST', { playerData });
}

async function apiResetGame() {
  return apiRequest('/game/save', 'DELETE');
}

// ══════════════════════════════════════════════════════════════════
//  BANK TRANSFER API  ← NYUT AVELVAC
// ══════════════════════════════════════════════════════════════════

/**
 * Bancayin popoxantsun
 * @param {string} toAccount  - "AM123456" dzevi hashvehamer
 * @param {number} amount     - popoxancel gumar ($ bani mej)
 * @returns {{ success, message, newSenderBank }}
 */
async function apiTransferMoney(toAccount, amount) {
  return apiRequest('/game/transfer', 'POST', { toAccount, amount });
}

// ══════════════════════════════════════════════════════════════════
//  INTERNAL — Pending transfer xyanotsumnern cuyts tarnel
// ══════════════════════════════════════════════════════════════════
function _showPendingTransferNotifications(transfers) {
  // Miayn verjin 5-ə — orpes chshvagavoghvek
  const recent = transfers.slice(-5);
  recent.forEach((t, i) => {
    setTimeout(() => {
      const msg = `🏦 Bancayin mutoq +$${Number(t.amount).toLocaleString()} — ${t.fromName} (${t.fromAccount})`;
      if (typeof showNotification === 'function') {
        showNotification(msg, true);
      } else {
        console.info('[Transfer]', msg);
      }
    }, i * 1800); // Mtadrecner `1.8 vraymayov
  });
}
