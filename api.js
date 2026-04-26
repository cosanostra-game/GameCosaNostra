// api.js — Frontend API helper
// Ogtagorcum: <script src="api.js"></script>

const API_BASE  = 'https://cosa-nostra.onrender.com'; // ← dzher URL
const TOKEN_KEY = 'cosaNostra_JWT';

const getToken   = ()      => localStorage.getItem(TOKEN_KEY);
const saveToken  = (t)     => localStorage.setItem(TOKEN_KEY, t);
const clearToken = ()      => localStorage.removeItem(TOKEN_KEY);

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

    // Ete pending bancayin mutoqner kan — cuyts tarel, heto mahcel
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
/**
 * Banakayin popoxantsun mek xaghatsoghy mekic myushin
 * @param {string} toAccount  "AM123456"
 * @param {number} amount     popoxancvel gumar ($ bank-ic)
 * @returns {{ success, message, newSenderBank }}
 */
async function apiTransferMoney(toAccount, amount) {
  return apiRequest('/game/transfer', 'POST', { toAccount, amount });
}

// ── Internal: pending notifications ──────────────────────────────
function _handlePendingTransfers(transfers) {
  // Verjin 5-ə miayn
  transfers.slice(-5).forEach((t, i) => {
    setTimeout(() => {
      const msg = `🏦 Bancayin mutoq  +$${Number(t.amount).toLocaleString()}  ←  ${t.fromName} (${t.fromAccount})`;
      if (typeof showNotification === 'function') {
        showNotification(msg, true);
      } else {
        alert(msg); // fallback
      }
    }, i * 2000);
  });
}
