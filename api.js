// api.js — Frontend-ի API helper (index.html և landing.html-ում include անել)
// ══════════════════════════════════════════════════════════════════
// Օգտագործում՝ <script src="api.js"></script>
// ══════════════════════════════════════════════════════════════════

const API_BASE = 'https://cosa-nostra.onrender.com'; // ← ԱՅՍ ՓՈԽԵՔ
// Local dev-ի ժամանակ:
// const API_BASE = 'http://localhost:5000/api';

const TOKEN_KEY = 'cosaNostra_JWT';

// ─── Token helpers ────────────────────────────────────────────────
const getToken  = ()        => localStorage.getItem(TOKEN_KEY);
const saveToken = (token)   => localStorage.setItem(TOKEN_KEY, token);
const clearToken = ()       => localStorage.removeItem(TOKEN_KEY);

// ─── Fetch wrapper ────────────────────────────────────────────────
async function apiRequest(endpoint, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = { method, headers };
  if (body) config.body = JSON.stringify(body);

  const res  = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || 'Սերվերի սխալ');
  return data;
}

// ══════════════════════════════════════════════════════════════════
//  AUTH API
// ══════════════════════════════════════════════════════════════════

/** Գրանցվել */
async function apiRegister(name, email, password, avatarColor) {
  const data = await apiRequest('/auth/register', 'POST', {
    name, email, password, avatarColor,
  });
  saveToken(data.token);
  return data.user;
}

/** Մուտք գործել */
async function apiLogin(email, password) {
  const data = await apiRequest('/auth/login', 'POST', { email, password });
  saveToken(data.token);
  return data.user;
}

/** Ելք */
function apiLogout() {
  clearToken();
  window.location.href = 'index.html';
}

/** Ընթացիկ user-ի տվյալները */
async function apiGetMe() {
  const data = await apiRequest('/auth/me');
  return data.user;
}

/** Պրոֆիլ թարմացնել */
async function apiUpdateProfile(updates) {
  const data = await apiRequest('/auth/profile', 'PATCH', updates);
  return data.user;
}

// ══════════════════════════════════════════════════════════════════
//  GAME SAVE API
// ══════════════════════════════════════════════════════════════════

/** Խաղը բեռնել */
async function apiLoadGame() {
  try {
    const data = await apiRequest('/game/save');
    return data.playerData; // player object
  } catch (err) {
    if (err.message.includes('404') || err.message.includes('Save գտնված չէ')) {
      return null; // Նոր խաղ
    }
    throw err;
  }
}

/** Խաղը պահել */
async function apiSaveGame(playerData) {
  return apiRequest('/game/save', 'POST', { playerData });
}

/** Save-ը ջնջել (reset) */
async function apiResetGame() {
  return apiRequest('/game/save', 'DELETE');
}

// ══════════════════════════════════════════════════════════════════
//  EXAMPLE USAGE (landing.html-ի saveGame ֆունկցիան փոխարինելու)
// ══════════════════════════════════════════════════════════════════
/*

  // ── AUTO SAVE (10 վ. ամեն) ──
  setInterval(async () => {
    if (!getToken()) return;
    try {
      await apiSaveGame(player);
      console.log('☁️ Auto-saved');
    } catch (e) {
      console.warn('Auto-save failed:', e.message);
    }
  }, 10000);

  // ── LOAD ON START ──
  async function loadGame() {
    const cloudData = await apiLoadGame();
    if (cloudData) {
      Object.assign(player, cloudData);
      console.log('☁️ Cloud save բեռնվեց');
    } else {
      console.log('🆕 Նոր խաղ');
    }
    updateUI();
  }

  // ── LOGIN ──
  async function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass  = document.getElementById('loginPassword').value;
    try {
      const user = await apiLogin(email, pass);
      window.location.href = 'landing.html';
    } catch (err) {
      showError('loginError', err.message);
    }
  }

*/
