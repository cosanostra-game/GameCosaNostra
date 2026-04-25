# 🎲 Cosa Nostra — Ամбոljovrap Պроект

## Ֆайллери Кармакарgum

```
cosa-nostra-FINAL/
├── frontend/
│   ├── index.html      ← Гравор Эл./Гранцум Кайk
│   └── landing.html    ← Хайg (Глхавор Эkран)
└── server/
    ├── server.js           ← Гlхавор сервер
    ├── package.json
    ├── .env.example        ← Копируйте как .env
    ├── db/connect.js
    ├── models/
    │   ├── User.js
    │   └── GameSave.js
    ├── middleware/auth.js
    └── routes/
        ├── auth.js         ← /api/auth/*
        └── game.js         ← /api/game/*
```

## ⚡ Արаг Гарgарум (Render.com — Andzин)

### 1. MongoDB Atlas (Анлайн BD)
1. [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas) → Free Cluster
2. Connect → Driver → Copy URI

### 2. Server Deploy (Render.com — Анлайн)
1. GitHub-ум создайте repo → upload `server/` папка
2. render.com → New Web Service → Connect GitHub
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Environment Variables:
   - `MONGO_URI` = ձер Atlas URI
   - `JWT_SECRET` = ком-бавор 32+ нших
   - `GITHUB_PAGES_URL` = `https://yourusername.github.io`
   - `NODE_ENV` = `production`
6. Deploy → копируйте URL (например: `https://cosa-nostra.onrender.com`)

### 3. Frontend — API URL Пахел
`index.html` ев `landing.html` файллерум гтек ев пахирек.

```javascript
// Ентик ЕРИКОВ НУЙНН КАНАЛНЕР:
const API_BASE = 'https://ձер-server.onrender.com';  // ← Ернкайн Render URL
```

### 4. GitHub Pages Deploy
```bash
# Ձер GitHub repo-ном upload արек `frontend/` папканы
# Settings → Pages → Source: main branch
# Кайкы кмтани: https://yourusername.github.io/repo-name/
```

## 🔌 API Endpoints

| Method | URL | Нкараграцutum |
|--------|-----|----------------|
| POST | `/api/auth/register` | Гранцум |
| POST | `/api/auth/login` | Мутk |
| GET  | `/api/auth/me` | Ентacacnyal user |
| PATCH| `/api/auth/profile` | Профил тармацнел |
| DELETE| `/api/auth/account` | Хашив джнджел |
| GET  | `/api/game/save` | Save бернел |
| POST | `/api/game/save` | Save пахел |
| DELETE| `/api/game/save` | Reset |
| GET  | `/api/health` | Server статус |

## 🔒 Аnвтануtjan Схема
- JWT Token → `localStorage['cosaNostra_JWT']`
- Auto-login: Эl (токен чнcuм `localStorage`-ум → /api/auth/me → автомат мутk)
- Save: Cloud (API) + Local backup (localStorage)
