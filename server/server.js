// server.js — Cosa Nostra Backend (Express + Mongoose)
// ══════════════════════════════════════════════════════════════════

require('dotenv').config(); // .env ֆայլը կարդալ ԱՄԵՆԱԱՌԱՋ

const express   = require('express');
const cors      = require('cors');
const mongoose  = require('mongoose');
const connectDB = require('./db/connect');

// ─── Routes ───────────────────────────────────────────────────────
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');

// ─── Express app ──────────────────────────────────────────────────
const app  = express();
const PORT = process.env.PORT || 5000;

// ══════════════════════════════════════════════════════════════════
//  CORS — GitHub Pages կայքից հարցումներ թույլատրել
// ══════════════════════════════════════════════════════════════════
const ALLOWED_ORIGINS = [
  // GitHub Pages URL-ն (օրինակ)
  process.env.GITHUB_PAGES_URL,       // https://yourusername.github.io

  // Development-ի ժամանակ local testing
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:8080',
  'null', // file:// protocol-ից բացվող HTML ֆայլեր
].filter(Boolean); // undefined/null value-ները հեռացնել

const corsOptions = {
  origin: (origin, callback) => {
    // origin === undefined → server-to-server կամ curl (թույլատրել)
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: ${origin} հասցեն թույլատրված չէ`));
    }
  },
  methods:     ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Preflight requests

// ══════════════════════════════════════════════════════════════════
//  MIDDLEWARE
// ══════════════════════════════════════════════════════════════════
app.use(express.json({ limit: '5mb' }));  // avatar base64-ը կարող է մեծ լինել
app.use(express.urlencoded({ extended: true }));

// Request logger (dev-ի ժամանակ)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
  });
}

// ══════════════════════════════════════════════════════════════════
//  ROUTES
// ══════════════════════════════════════════════════════════════════
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);

// Health check — արդյո՞ք server-ը աշխատում է
app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: '🎲 Cosa Nostra Server — Կանգուն է',
    db:      mongoose.connection.readyState === 1 ? '✅ MongoDB կապված' : '❌ MongoDB անջատ',
    time:    new Date().toISOString(),
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route-ը գտնված չէ' });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Անհայտ սերվերի սխալ',
  });
});

// ══════════════════════════════════════════════════════════════════
//  ԿԱՅԱՑՆԵԼ SERVER
// ══════════════════════════════════════════════════════════════════
const startServer = async () => {
  await connectDB(); // Նախ MongoDB-ին կապվել

  app.listen(PORT, () => {
    console.log('');
    console.log('╔══════════════════════════════════════╗');
    console.log('║   🎲  COSA NOSTRA  SERVER  ONLINE    ║');
    console.log('╠══════════════════════════════════════╣');
    console.log(`║  Port   : ${PORT}                       `);
    console.log(`║  Mode   : ${process.env.NODE_ENV || 'development'}              `);
    console.log(`║  Health : http://localhost:${PORT}/api/health`);
    console.log('╚══════════════════════════════════════╝');
    console.log('');
  });
};

startServer();
