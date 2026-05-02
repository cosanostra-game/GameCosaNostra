// server.js — Cosa Nostra Backend Server
require('dotenv').config();

const express    = require('express');
const http       = require('http');
const { Server } = require('socket.io');
const jwt        = require('jsonwebtoken');
const cors       = require('cors');
const connectDB  = require('./connect');

const authRoutes = require('./auth');
const gameRoutes = require('./game');

const app        = express();
const httpServer = http.createServer(app);
const PORT       = process.env.PORT || 5000;

// ─── Connect to MongoDB ───────────────────────────────────────────
connectDB();

// ─── CORS ─────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:8080',
];

if (process.env.GITHUB_PAGES_URL) {
  allowedOrigins.push(process.env.GITHUB_PAGES_URL.replace(/\/$/, ''));
}

// Allow all github.io and githubusercontent.com domains automatically
function isOriginAllowed(origin) {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;
  if (origin.endsWith('.github.io')) return true;
  if (origin.endsWith('.githubusercontent.com')) return true;
  if (process.env.NODE_ENV !== 'production') return true;
  return false;
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ─── Body Parser ──────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ─── Request Logger (dev only) ────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// ─── Routes ───────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);

// ─── Health Check ─────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: '✅ Cosa Nostra Server is running',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development',
  });
});

// ─── 404 Handler ──────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ─── Global Error Handler ─────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  if (err.message && err.message.startsWith('CORS blocked')) {
    return res.status(403).json({ success: false, message: err.message });
  }
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Սերվերի ներքին սխալ'
      : err.message,
  });
});

// ─── Socket.IO ────────────────────────────────────────────────────
// userId → socketId mapping (in-memory, per-process)
const userSockets = new Map();

const io = new Server(httpServer, {
  cors: {
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  },
});

// JWT middleware — socket connection-ի ժամանակ token ստուգում
io.use((socket, next) => {
  const token = socket.handshake.auth && socket.handshake.auth.token;
  if (!token) return next(new Error('Չկա token'));
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = String(decoded.id);
    next();
  } catch {
    next(new Error('Անվավեր token'));
  }
});

io.on('connection', (socket) => {
  const uid = socket.userId;
  userSockets.set(uid, socket.id);
  console.log(`🔌 Socket connected: user=${uid}`);

  socket.on('disconnect', () => {
    // Ջնջել միայն եթե նույն socket-ն է (multi-tab safety)
    if (userSockets.get(uid) === socket.id) {
      userSockets.delete(uid);
    }
    console.log(`🔌 Socket disconnected: user=${uid}`);
  });
});

// io & userSockets — route handler-ներին հասանելի են req.app.get()-ով
app.set('io', io);
app.set('userSockets', userSockets);

// ─── Start ────────────────────────────────────────────────────────
httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health`);
});
