// =====================================================
//  i18n.js — Cosa Nostra · Language System v1.0
//  Languages: hy (Հայerern) · ru (Ռuserern)
//
//  HOW IT WORKS:
//  On first applyLang() call the original Armenian text
//  is captured from the DOM into data-i18n-orig.
//  Russian mode replaces it; Armenian mode restores it.
// =====================================================

const RU = {
  // ── Sidebar navigation ─────────────────────────────
  'menu.main':         'Главная',
  'menu.crimes':       'Преступления',
  'menu.cars':         'Угон авто',
  'menu.garage':       'Гараж',
  'menu.inventory':    'Арсенал',
  'menu.dealership':   'Автосалон',
  'menu.bank':         'Банк',
  'menu.business':     'Бизнес',
  'menu.casino':       'Казино',
  'menu.crypto':       'Крипто',
  'menu.estate':       'Недвижимость',
  'menu.stash':        'Тайник',
  'menu.prison':       'Тюрьма',
  'menu.hospital':     'Больница',
  'menu.training':     'Тренировка',
  'menu.reputation':   'Репутация',
  'menu.families':     'Семьи',
  'menu.friends':      'Друзья',
  'menu.messages':     'Сообщения',
  'menu.quests':       'Задания дня',
  'menu.daynight':     'Ночь / День',
  'menu.events':       'События',
  'menu.stats':        'Статистика',
  'menu.leaderboard':  'Лидерборд',
  'menu.settings':     'Настройки',
  'menu.profile':      'Мой профиль',

  // ── Menu section titles ─────────────────────────────
  'section.main':        'Основное',
  'section.finance':     'Финансы и Имущество',
  'section.underground': 'Подполье',
  'section.extra':       'Дополнительно',

  // ── Sidebar misc ────────────────────────────────────
  'sidebar.rank': 'Звание',
  'daily.label':  'Ежедневный бонус',
  'daily.claim':  'Получить $100',
  'daily.claimed':'Получен ✓',

  // ── Topbar ──────────────────────────────────────────
  'topbar.log':   'Журнал',
  'topbar.sound': 'Звук',
  'topbar.theme': 'Тема',
  'topbar.lang':  '🇷🇺 РУ',

  // ── Page headings (h1 / h2) ─────────────────────────
  'page.main':        'Главная',
  'page.crimes':      'Преступления',
  'page.cars':        'Угон авто',
  'page.garage':      'Гараж',
  'page.inventory':   'Арсенал',
  'page.dealership':  'Автосалон',
  'page.bank':        'Центральный Банк',
  'page.business':    'Бизнес и Отмывание',
  'page.prison':      'Тюрьма',
  'page.casino':      'Казино',
  'page.crypto':      'Крипто',
  'page.estate':      'Недвижимость',
  'page.stash':       'Тайник (Сейф)',
  'page.hospital':    'Больница',
  'page.training':    'Тренировка',
  'page.reputation':  'Репутация',
  'page.quests':      'Задания дня',
  'page.stats':       'Статистика',
  'page.leaderboard': 'Лидерборд',
  'page.events':      'События',
  'page.daynight':    'Цикл Времени',
  'page.settings':    'Настройки',
  'page.families':    'Семьи',
  'page.profile':     'Мой профиль',
  'page.friends':     'Друзья',
  'page.messages':    'Сообщения',

  // ── Buttons ─────────────────────────────────────────
  'btn.deposit':      'Внести',
  'btn.withdraw':     'Снять',
  'btn.transfer':     'Перевести',
  'btn.buy':          'Купить',
  'btn.sell':         'Продать',
  'btn.launder':      '🧹 Отмыть (70%)',
  'btn.launderAll':   'Отмыть всё',
  'btn.takeLoan':     'Взять',
  'btn.repayLoan':    'Погасить',
  'btn.found':        'Основать',
  'btn.save':         'Сохранить',
  'btn.load':         'Загрузить',
  'btn.reset':        'Удалить',
  'btn.heal25':       'Лечиться',
  'btn.healFull':     'Полное лечение',
  'btn.train':        'Тренироваться',
  'btn.donate':       'Заплатить',
  'btn.spin':         '🎰 КРУТИТЬ',
  'btn.red':          '🔴 КРАСНОЕ (x2)',
  'btn.black':        '⚫ ЧЁРНОЕ (x2)',
  'btn.bribe':        '💰 Взятка ($1,000)',
  'btn.escape':       '🚀 Побег ($2,500)',
  'btn.logout':       'Выход',
  'btn.edit':         'Редактировать',
  'btn.deleteProfile':'Удалить профиль',
  'btn.expand':       'Расширить ($100,000)',
  'btn.hide':         'Спрятать',
  'btn.take':         'Извлечь',

  // ── Bank ────────────────────────────────────────────
  'bank.personal': 'Личный счёт',
  'bank.transfer': 'Банковский перевод',
  'bank.loan':     'Кредитная линия',

  // ── Business ────────────────────────────────────────
  'biz.slots':        'Слоты бизнеса:',
  'biz.market':       'Рынок',
  'biz.my':           'Мои бизнесы',
  'biz.launderTitle': 'Благотворительный фонд',
  'biz.launderSub':   '(Отмывание денег)',
  'biz.dirtyMoney':   '🚫💰 Грязные деньги:',

  // ── Prison ──────────────────────────────────────────
  'prison.free':    'На свободе',
  'prison.freeSub': 'Вы чисты перед законом (пока что).',
  'prison.locked':  'ВЫ ЗА РЕШЁТКОЙ',
  'prison.bribeTip':'Взятка = 100% успех, Побег = 50% и большой риск.',

  // ── Stash ────────────────────────────────────────────
  'stash.stored': 'Хранится',
  'stash.desc':   'Эти деньги защищены от полицейских конфискаций.',

  // ── Hospital ─────────────────────────────────────────
  'hosp.hp':        'Здоровье (HP):',
  'hosp.light':     'Лёгкое лечение',
  'hosp.lightDesc': 'Восстанавливает 25 HP. Полезно при лёгких травмах.',
  'hosp.lightPrice':'Цена: $200',
  'hosp.full':      'Полное восстановление',
  'hosp.fullDesc':  'Полностью восстанавливает HP и энергию.',
  'hosp.fullPrice': 'Цена: $1,500',

  // ── Training ─────────────────────────────────────────
  'train.desc':      'Повысьте ваши максимальные физические и умственные параметры.',
  'train.phys':      'Физическая подготовка',
  'train.physDesc':  '+5 Максимальный HP',
  'train.physPrice': 'Цена: $500',
  'train.mental':    'Умственная подготовка',
  'train.mentDesc':  '+5 Максимальная Энергия',
  'train.mentPrice': 'Цена: $500',

  // ── Reputation ───────────────────────────────────────
  'rep.desc':     'Ваша репутация в городе. Высокая репутация снижает риск ареста.',
  'rep.donation': 'Благотворительность / Взятка мэрии',
  'rep.donDesc':  'Жертвуя деньги, покупаете молчание города. +5 Репутация',
  'rep.donPrice': 'Цена: $2,000',

  // ── Settings ─────────────────────────────────────────
  'set.bg':       'Фоновое изображение',
  'set.bgDesc':   'Выберите фон из вашей папки:',
  'set.save':     'Сохранить игру',
  'set.saveDesc': 'Сохраните прогресс в браузере.',
  'set.load':     'Загрузить игру',
  'set.loadDesc': 'Загрузить последнее сохранение:',
  'set.reset':    'Удалить всё',
  'set.resetDesc':'Сбросить весь прогресс:',
  'set.langTitle':'Выбор языка',
  'set.langDesc': 'Выберите язык игры:',

  // ── Stats ────────────────────────────────────────────
  'stats.crimes':   'Преступления',
  'stats.cars':     'Угнанные машины',
  'stats.earnings': 'Всего заработано',
  'stats.time':     'Время в игре',

  // ── Events ───────────────────────────────────────────
  'events.desc':  'История случайных событий в городе.',
  'events.empty': 'Событий пока нет...',

  // ── Day/Night ────────────────────────────────────────
  'cycle.current': 'Текущее время',
  'cycle.status':  'Статус:',
  'cycle.day':     '☀️ День',
  'cycle.night':   '🌙 Ночь',

  // ── Profile ──────────────────────────────────────────
  'profile.cash':    'Наличные',
  'profile.bank':    'Банк',
  'profile.xp':      'XP Очки',
  'profile.crimes':  'Преступления',
  'profile.cars':    'Автопарк',
  'profile.hp':      'Здоровье (HP)',
  'profile.since':   'Дата регистрации',
  'profile.level':   'Уровень',
  'profile.accInfo': 'Информация об аккаунте',
  'profile.rank':    'Звание',
  'profile.created': 'Создан',
  'profile.welcome': 'Добро пожаловать',

  // ── Friends ──────────────────────────────────────────
  'friends.requests': 'Входящие заявки',

  // ── Crypto ───────────────────────────────────────────
  'crypto.trade':     'Торговля',
  'crypto.portfolio': 'Ваш портфель',
  'crypto.updateNote':'Рынок обновляется каждые 5 секунд.',

  // ── Notifications used via t() in JS ─────────────────
  'notif.inPrison':    'Вы в тюрьме',
  'notif.noEnergy':    'Недостаточно энергии',
  'notif.noHp':        'Вы без сознания. Идите в больницу.',
  'notif.garageFull':  'Гараж заполнен',
  'notif.saved':       'Сохранено ✓',
  'notif.loaded':      'Загружено ✓',
  'notif.resetConfirm':'Уверены? Всё будет удалено безвозвратно!',
  'notif.dailyClaim':  'Ежедневный бонус +$100!',
  'notif.dailyAlready':'Уже получен сегодня',
  'notif.newRank':     'Новое звание:',
  'notif.carStolen':   'Угнан',
  'notif.garageExpand':'Гараж +5 мест ✅',

  // ── Auth screen ─────────────────────────────────────
  'auth.loginTab':    'Войти',
  'auth.registerTab': 'Регистрация',
  'auth.loginBtn':    'Войти в игру',
  'auth.registerBtn': 'Зарегистрироваться',
  'auth.remember':    'Запомнить меня (автовход)',

  // ── Preloader ────────────────────────────────────────
  'pre.sub':          'Войти в преступный мир',
  'pre.quote':        '"У каждого своя судьба..."',

  // ── Crimes ───────────────────────────────────────────
  'crime.pocket':      '🎯 Карманная кража',
  'crime.shop':        '🏪 Ограбить магазин',
  'crime.extort':      '💼 Вымогательство',
  'crime.smuggle':     '📦 Контрабанда',
  'crime.bankrob':     '🏦 Ограбление банка',
  'crime.pocket.desc': 'Мелкое дело, мелкие деньги. Самый лёгкий вариант для новичков.',
  'crime.shop.desc':   'Средний риск, хорошие деньги. Ночью безопаснее.',
  'crime.extort.desc': 'Требуй "крышевание" с местных торговцев. Нужна хорошая репутация.',
  'crime.smuggle.desc':'Незаконная перевозка товаров. Высокая оплата, высокий риск.',
  'crime.bankrob.desc':'Самое опасное и прибыльное дело. Только для опытных.',

  // ── Cars ─────────────────────────────────────────────
  'car.class0':      '🚗 Эконом класс',
  'car.class1':      '🚙 Бизнес / Спорт',
  'car.class0.desc': 'Обычные городские машины. Легко угнать, мало стоят.',
  'car.class1.desc': 'Дорогие авто. Сложнее, но прибыльнее.',

  // ── Hospital ─────────────────────────────────────────
  'hosp.lightDesc':   'Восстанавливает 25 HP. Полезно при лёгких травмах.',
  'hosp.lightPrice':  'Цена: $200',
  'hosp.fullDesc':    'Полностью восстанавливает HP и энергию.',
  'hosp.fullPrice':   'Цена: $1,500',

  // ── Cycle ────────────────────────────────────────────
  'cycle.current': 'Текущее время',
  'cycle.status':  'Статус:',

  // ── Biz sub-tabs ─────────────────────────────────────
  'biz.market': 'Рынок',
  'biz.my':     'Мои бизнесы',

  // ── Friends ──────────────────────────────────────────
  'friends.requests': 'Входящие заявки',

  // ── Preloader ────────────────────────────────────────
  'pre.sub':          'Войти в преступный мир',
  'pre.quote':        '"У каждого своя судьба..."',
  'pre.loading':      'Загрузка...',

  // ── Auth ─────────────────────────────────────────────
  'auth.emailPh':     'Email адрес',
  'auth.passPh':      'Пароль',
  'auth.nickPh':      'Ваш никнейм',
  'auth.newPassPh':   'Пароль (мин. 6)',
  'auth.confPassPh':  'Повторите пароль',

  // ── Main page ─────────────────────────────────────────
  'main.bankLabel':   'Личный Банковский Счёт',
  'main.quickActions':'⚡ Быстрые Действия',
  'quick.pocket':     'Карманник',
  'quick.shop':       'Ограбить Магазин',

  // ── Crimes extra buttons ──────────────────────────────
  'btn.commit':       'Совершить',
  'btn.extort':       'Вымогать',
  'btn.smuggle':      'Перевезти',
  'btn.rob':          'Ограбить',
  'btn.steal':        'Угнать',

  // ── Cars ─────────────────────────────────────────────
  'cars.desc':        'Угнанные машины можно продать или использовать в преступлениях (снижает риск).',

  // ── Bank placeholders ────────────────────────────────
  'bank.accPh':       'Номер счёта (AM123456)',

  // ── Business ─────────────────────────────────────────
  'biz.myTab':        'Мои Бизнесы',
  'btn.expand2':      'Расширить ($100,000)',
  'biz.restaurant':   'Ресторан (Легальный)',
  'biz.restaurant.desc': 'Чистый и легальный бизнес. Низкий, но стабильный доход. Max Lv: 15',
  'biz.casino':       'Подпольное Казино',
  'biz.casino.desc':  'Только для мафии. Приносит большой доход, но требует связей.',
  'biz.arms':         'Оружейный Завод',
  'biz.arms.desc':    'Тяжёлый, опасный, но невероятно прибыльный теневой бизнес.',
  'biz.strip':        'Стриптиз Клуб 🔞',

  // ── Inventory ────────────────────────────────────────
  'inv.shopTab':      '🛒 Магазин',
  'inv.ownedTab':     '🎒 Мой Арсенал',

  // ── Casino ───────────────────────────────────────────
  'casino.roulette':  'Рулетка',
  'casino.slots':     'Слот Машина',

  // ── Estate ───────────────────────────────────────────
  'estate.myTab':     'Моя Недвижимость',

  // ── Stash ────────────────────────────────────────────
  'stash.inPh':       'Положить ($)...',
  'stash.outPh':      'Достать ($)...',

  // ── Training ─────────────────────────────────────────
  'train.price500':   'Цена: $500',

  // ── Day/Night ────────────────────────────────────────
  'cycle.nightDesc':  '🌙 <strong>Ночью</strong> преступления успешнее (риск снижается), но патрули усиливаются.',
  'cycle.dayDesc':    '☀️ <strong>Днём</strong> легальный и теневой бизнес работают эффективнее.',

  // ── Settings ─────────────────────────────────────────
  'set.loadDesc':     'Загрузить последнее сохранение:',

  // ── Dealership ───────────────────────────────────────
  'dealer.newTab':    'Новые Машины',
  'dealer.usedTab':   'Б/У',

  // ── index.html specific ─────────────────────────────
  'nav.about':     'О нас',
  'nav.features':  'Возможности',
  'nav.factions':  'Фракции',
  'nav.rules':     'Правила',
  'nav.login':     'Войти',
  'nav.register':  'Регистрация',
  'intro.enter':   'Войти',
  'hero.label':    'Армянский Мафия Ролплей',
  'hero.tagline':  'Жизнь мафии — в ваших руках',
  'hero.play':     '▶ Начать игру',
  'hero.login':    'Войти',
  'hero.scroll':   'Прокрутите',
  'login.title':   'Добро пожаловать',
  'login.subtitle':'Вход в Cosa Nostra · Ваш аккаунт',
  'login.email':   'Эл. почта',
  'login.pass':    'Пароль',
  'login.submit':  'Войти ➤',
  'login.noAcc':   'Нет аккаунта?',
  'login.register':'Зарегистрируйтесь',
  'reg.title':     'Регистрация',
  'reg.subtitle':  'Cosa Nostra · Создайте персонажа',
  'reg.nick':      'Имя персонажа (Nickname)',
  'reg.email':     'Эл. почта',
  'reg.pass':      'Пароль',
  'reg.pass2':     'Повторите пароль',
  'reg.submit':    'Зарегистрироваться ➤',
  'reg.hasAcc':    'Уже есть аккаунт?',
  'reg.loginLink': 'Войти',
};

// ── Armenian notifications for t() fallback ────────────────────────
const HY = {
  'notif.inPrison':    'Բантум еq',
  'notif.noEnergy':    'Энергиа чи херikhум',
  'notif.noHp':        'Анgiтакiтс еq. Бужvеq hivandanotsеум.',
  'notif.garageFull':  'Авtотнакy ліqс е',
  'notif.saved':       'Պahpanvel ✓',
  'notif.loaded':      'Берrvеl ✓',
  'notif.resetConfirm':'Varаn? Амен inч ккоrtс, анvаkаs!',
  'notif.dailyClaim':  'Амsорja бонус +$100!',
  'notif.dailyAlready':'Arдем steаtsvel аjsoре',
  'notif.newRank':     'Нор кocум:',
  'notif.carStolen':   'Гoghаtsvel е',
  'notif.garageExpand':'Авtотнак +5 теghер ✅',
};

// ═══════════════════════════════════════════════════════
//   PUBLIC API
// ═══════════════════════════════════════════════════════

/** Get current language code ('hy' | 'ru') */
function getLang() {
  return localStorage.getItem('cnLang') || 'hy';
}

/**
 * t(key) — translate key for use in JavaScript strings.
 * Example: showNotification(t('notif.inPrison'), false)
 */
function t(key) {
  const lang = getLang();
  if (lang === 'ru') return RU[key] !== undefined ? RU[key] : key;
  return HY[key] !== undefined ? HY[key] : key;
}

/**
 * setLang(lang) — switch language and refresh all translated elements.
 * lang: 'hy' | 'ru'
 */
function setLang(lang) {
  localStorage.setItem('cnLang', lang);
  applyLang();
}

/**
 * applyLang() — scan DOM and update all translated elements.
 * Safe to call multiple times.
 */
function applyLang() {
  const lang = getLang();
  const dict = lang === 'ru' ? RU : null; // null = restore original

  // ── 1. [data-i18n] — full textContent replacement ────────
  document.querySelectorAll('[data-i18n]').forEach(el => {
    // Capture original on first pass
    if (el.dataset.i18nOrig === undefined) {
      el.dataset.i18nOrig = el.textContent.trim();
    }
    const key = el.dataset.i18n;
    el.textContent = (dict && dict[key] !== undefined)
      ? dict[key]
      : el.dataset.i18nOrig;
  });

  // ── 2. [data-i18n-text] — text node only (preserves icons/badges) ─
  document.querySelectorAll('[data-i18n-text]').forEach(el => {
    // Capture original text nodes
    if (el.dataset.i18nOrigText === undefined) {
      let raw = '';
      el.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) raw += n.textContent;
      });
      el.dataset.i18nOrigText = raw.trim();
    }
    const key   = el.dataset.i18nText;
    const newTx = (dict && dict[key] !== undefined) ? dict[key] : el.dataset.i18nOrigText;
    // Replace first text node, clear rest
    let done = false;
    el.childNodes.forEach(n => {
      if (n.nodeType !== Node.TEXT_NODE) return;
      if (!done) { n.textContent = ' ' + newTx; done = true; }
      else n.textContent = '';
    });
    if (!done) el.appendChild(document.createTextNode(' ' + newTx));
  });

  // ── 3. [data-i18n-ph] — placeholder ─────────────────────
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (el.dataset.i18nPhOrig === undefined) el.dataset.i18nPhOrig = el.placeholder;
    const key = el.dataset.i18nPh;
    el.placeholder = (dict && dict[key] !== undefined) ? dict[key] : el.dataset.i18nPhOrig;
  });

  // ── 4. Update lang toggle button ─────────────────────────
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    btn.textContent = lang === 'ru' ? '🇷🇺 РУ' : '🇦🇲 ՀՅ';
    btn.title = lang === 'ru' ? 'Переключить язык' : 'Փоխел lezune';
  }

  // ── 5. Update lang selector buttons ──────────────────────
  document.querySelectorAll('.cn-lang-btn').forEach(b => {
    b.classList.toggle('cn-lang-active', b.dataset.lang === lang);
  });

  // ── 6. html[lang] ────────────────────────────────────────
  document.documentElement.lang = lang === 'hy' ? 'hy' : 'ru';
}

// Auto-apply on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLang);
} else {
  setTimeout(applyLang, 0);
}

// ── Final additions ───────────────────────────────────────────────
Object.assign(RU, {
  // Auth
  'auth.emailPh':     'Электронная почта',
  'auth.remember':    'Запомнить меня (автовход)',

  // Garage
  'garage.slots':     'Места',

  // Inventory
  'inv.desc':         'Оружие и броня влияют на % успеха в преступлениях и на потерю HP.',
  'inv.crimeBonus':   'Бонус прест.',
  'inv.hpProt':       'Защита HP',
  'inv.weapons':      '⚔️ Оружие',
  'inv.armor':        '🛡️ Броня и Одежда',
  'inv.myWeapons':    '⚔️ Моё Оружие',
  'inv.myArmor':      '🛡️ Моя Броня',

  // Business
  'biz.slotsLabel':   'Слоты Бизнеса',
  'biz.strip.desc':   'Теневой досуг, грязные деньги. Реп.: 40+ | Доход: в виде <b style="color:#af52de;">грязных денег</b>. Max Lv: 15',
  'biz.launderTitle': 'Благотворительный Фонд',
  'biz.launderSub':   '(Отмывание Денег)',
  'biz.launderDesc':  'Доходы стриптиз-клуба и оружейного завода — «грязные». Через фонд их можно отмыть — 30% уйдёт на «благотворительность».',

  // Stash
  'stash.stored':     'Хранится',

  // Hospital
  'hosp.hp':          'Здоровье (HP):',

  // Training
  'train.physDesc':   '+5 Максимальный HP',
  'train.mentDesc':   '+5 Максимальная Энергия',

  // Reputation
  'rep.desc':         'Ваша репутация в городе. Высокая репутация снижает риск ареста и открывает новые бизнесы.',
  'rep.donation':     'Благотворительность / Взятка мэрии',
  'rep.donDesc':      'Жертвуя деньги, покупаете молчание города. +5 Репутация',
  'rep.donPrice':     'Стоимость: $2,000',

  // Stats
  'stats.timeUnit':   'мин.',

  // Families
  'families.desc':    'Пять известных мафиозных семей, поделивших город. Достигни звания <b style="color:var(--accent);">Мафиози</b> и накопи <b style="color:var(--ok);">$250,000</b> — создай 6-ю семью.',

  // Profile
  'btn.edit':         'Редактировать',
  'btn.logout':       'Выход',
  'btn.deleteProfile':'Удалить профиль',

  // Friends
  'friends.title':    'Друзья',
  'friends.incoming': 'Входящие заявки',
  'friends.list':     'Список друзей',
  'friends.requests': 'Входящие заявки',

  // General
  'loading':          'Загрузка...',
});

// ── HY dict additions for new keys ───────────────────────────────
Object.assign(HY, {
  'pre.loading':   'Բեռնում...',
  'btn.commit':    'Կատարել',
  'btn.extort':    'Շորթել',
  'btn.smuggle':   'Տեղափոխել',
  'btn.rob':       'Կողոպտել',
  'btn.steal':     'Գողանալ',
});

// ── Second-pass additions ──────────────────────────────────────────
Object.assign(RU, {
  // Topbar
  'topbar.energy':    '⚡ Энерг.',

  // Inventory
  'inv.equippedWeapon': '🔫 Экип. Оружие:',
  'inv.equippedArmor':  '🛡️ Экип. Броня:',
  'inv.weapons':        '⚔️ Оружие',

  // Bank / Finance placeholders
  'bank.amtPh':     'Сумма...',
  'bank.loanPh':    'Сумма (Макс. $50,000)',

  // Business
  'biz.price75':       'Стоимость: $75,000',
  'biz.price150':      'Стоимость: $150,000',
  'biz.price200':      'Стоимость: $200,000',
  'biz.price300':      'Стоимость: $300,000',
  'biz.namePh':        'Название...',
  'biz.casinoNamePh':  'Название казино...',
  'biz.clubNamePh':    'Название клуба...',
  'biz.launderPh':     'Отмыть ($)...',

  // Casino
  'casino.betPh':   'Ставка ($)...',

  // Crypto
  'crypto.amtPh':   'Количество',

  // Estate / Dealer filters
  'filter.min':      'Мин. цена ($)',
  'filter.max':      'Макс. цена ($)',
  'filter.minShort': 'Мин. ($)',
  'filter.maxShort': 'Макс. ($)',

  // Friends
  'friends.searchPh': 'Введите nickname...',

  // Friend profile modal
  'fp.message': 'Написать',
  'fp.remove':  'Удалить',

  // Families
  'families.desc': 'Пять известных мафиозных семей, поделивших город. Достигни звания <b style="color:var(--accent);">Мафиози</b> и накопи <b style="color:var(--ok);">$250,000</b> — создай 6-ю семью.',

  // Reputation
  'rep.donDesc': 'Жертвуя деньги, вы покупаете молчание города. +5 Репутация',
  'rep.donPrice': 'Стоимость: $2,000',
  'rep.desc': 'Ваша репутация в городе. Высокая репутация снижает риск ареста и открывает новые бизнесы.',

  // Training extra
  'train.physDesc': '+5 Максимальный HP',
  'train.mentDesc': '+5 Максимальная Энергия',
});

// ═══════════════════════════════════════════════════════
//   MISSING KEYS — JS t() calls in landing.html
// ═══════════════════════════════════════════════════════

Object.assign(RU, {
  // ── Auth button states ────────────────────────────────
  'btn.login':          'Войти',
  'btn.logging_in':     'Вход...',
  'btn.register':       'Зарегистрироваться',
  'btn.registering':    'Регистрация...',
  'btn.transferring':   'Отправка...',

  // ── Notifications ─────────────────────────────────────
  'notif.already_full_hp':    'HP уже на максимуме!',
  'notif.already_have':       'Уже куплено!',
  'notif.arrested':           '🚔 Полиция задержала вас!',
  'notif.arrested2':          '🚔 Вас арестовали! Вы за решёткой.',
  'notif.avatar_error':       'Ошибка аватара',
  'notif.avatar_updated':     '✅ Аватар обновлён!',
  'notif.bad_amount':         'Неверная сумма!',
  'notif.biz_slot_add':       '✅ Бизнес-слоты +5!',
  'notif.bribe_ok':           '💰 Взятка сработала! Вы на свободе.',
  'notif.car_removed':        'Машина снята с использования',
  'notif.car_selected':       '🚗 Машина выбрана!',
  'notif.casino_sorry':       'Недостаточно средств для ставки',
  'notif.cloud_loaded':       '☁️ Данные загружены из облака',
  'notif.daily_bonus':        '✅ Ежедневный бонус +$100!',
  'notif.daily_received':     'Уже получен сегодня',
  'notif.delete_error':       'Ошибка при удалении',
  'notif.enter_family_name':  'Введите название семьи!',
  'notif.enter_name':         'Введите название!',
  'notif.error_generic':      'Ошибка',
  'notif.escape_fail':        '🚨 Попытка побега провалилась!',
  'notif.escape_ok':          '🏃 Побег удался!',
  'notif.family_mem':         '👤 Участник добавлен →',
  'notif.family_name_taken':  'Это название уже занято!',
  'notif.family_pow':         '💪 Мощь семьи усилена',
  'notif.freed':              '🔓 Вышел из тюрьмы!',
  'notif.friend_added':       '✅ Заявка принята!',
  'notif.friend_declined':    '❌ Заявка отклонена',
  'notif.friend_req_ok':      '👤 Заявка в друзья отправлена!',
  'notif.garage_expanded':    '🚗 Гараж расширен +5 мест!',
  'notif.garage_full':        'Гараж заполнен!',
  'notif.garage_full2':       'Гараж заполнен!',
  'notif.get_daily':          'Получить $100',
  'notif.in_prison':          'Вы в тюрьме!',
  'notif.insufficient':       'Недостаточно средств!',
  'notif.loan_max':           'Макс. кредит: $50,000!',
  'notif.loan_no_cash':       'Недостаточно наличных для погашения!',
  'notif.loan_none':          'У вас нет активного кредита!',
  'notif.max_bet':            'Максимальная ставка:',
  'notif.need_2500':          'Нужно $2,500!',
  'notif.new_rank':           '⭐ Новое звание',
  'notif.no_1000':            'Нужно $1,000!',
  'notif.no_100k':            'Нужно $100,000!',
  'notif.no_10k':             'Нужно $10,000!',
  'notif.no_150k':            'Нужно $150,000!',
  'notif.no_200k':            'Нужно $200,000!',
  'notif.no_2500':            'Нужно $2,500!',
  'notif.no_250k':            'Нужно $250,000!',
  'notif.no_300k':            'Нужно $300,000!',
  'notif.no_50k':             'Нужно $50,000!',
  'notif.no_75k':             'Нужно $75,000!',
  'notif.no_dirty':           'Мало грязных денег!',
  'notif.no_energy2':         'Мало энергии!',
  'notif.no_energy3':         'Мало энергии!',
  'notif.no_money':           'Недостаточно денег!',
  'notif.no_money5':          'Нужно $2,000!',
  'notif.only_mafioso':       'Только для Мафиози!',
  'notif.profile_updated':    '✅ Профиль обновлён!',
  'notif.quests_refresh':     '🔄 Задания обновлены!',
  'notif.rank_req_mafioso':   'Нужно звание Мафиози!',
  'notif.rented':             '✅ Сдаётся в аренду',
  'notif.rep_30':             'Нужна репутация 30+!',
  'notif.rep_40':             'Нужна репутация 40+!',
  'notif.rep_50':             'Нужна репутация 50+!',
  'notif.rep_max':            'Репутация уже максимальная!',
  'notif.rep_paid':           '✅ Репутация +5!',
  'notif.slots_full':         'Все слоты бизнеса заняты!',
  'notif.stash_no':           'В тайнике недостаточно средств!',
  'notif.train_en':           '⚡ Макс. Энергия +5!',
  'notif.train_hp':           '❤️ Макс. HP +5!',
  'notif.transfer_bad_acc':   'Неверный номер счёта!',
  'notif.transfer_done':      'переведено на счёт',
  'notif.transfer_fail':      'Ошибка перевода',
  'notif.transfer_no_amt':    'Введите сумму!',
  'notif.transfer_no_bank':   'Недостаточно на счёте',
  'notif.transfer_self':      'Нельзя переводить на свой счёт!',
  'notif.unconscious':        '💀 Вы без сознания! Идите в больницу.',
  'notif.unconscious2':       '💀 Вы в отключке!',
  'notif.unrented':           'Аренда снята',
  'notif.wrong_amount':       'Неверная сумма!',

  // ── Page-level messages ───────────────────────────────
  'page.garage_empty':        'Гараж пустой',
  'page.no_activity':         'Нет активности',
});

Object.assign(HY, {
  // ── Auth button states ────────────────────────────────
  'btn.login':          'Մտնել',
  'btn.logging_in':     'Մուտք...',
  'btn.register':       'Գրանցվել',
  'btn.registering':    'Գրանցվում...',
  'btn.transferring':   'Ուղարկվում...',

  // ── Notifications ─────────────────────────────────────
  'notif.already_full_hp':    'HP-ն արդեն լրիվ է!',
  'notif.already_have':       'Արդեն ունես!',
  'notif.arrested':           '🚔 Ոստիկանը բռնեց!',
  'notif.arrested2':          '🚔 Ձերբակալվեցիք! Բանտում եք։',
  'notif.avatar_error':       'Ավատարի սխալ',
  'notif.avatar_updated':     '✅ Ավատար թարմացվեց!',
  'notif.bad_amount':         'Անթույլատրելի գումար!',
  'notif.biz_slot_add':       '✅ Բիզնես +5 տեղ!',
  'notif.bribe_ok':           '💰 Կաշառք ընդունվեց! Ազատ ես։',
  'notif.car_removed':        'Մեքենան հեռացվեց',
  'notif.car_selected':       '🚗 Մեքենան ընտրված է!',
  'notif.casino_sorry':       'Ոչ բավ. գումար խաղադրույքի համար',
  'notif.cloud_loaded':       '☁️ Բեռնվեց ամպից',
  'notif.daily_bonus':        '✅ Ամenörya բonус +$100!',
  'notif.daily_received':     'Այsör ardën ստacvets',
  'notif.delete_error':       'Ջnjanki skhale',
  'notif.enter_family_name':  'Ente enteaniqy anuny!',
  'notif.enter_name':         'Anvanume ente!',
  'notif.error_generic':      'Skhale',
  'notif.escape_fail':        '🚨 Pahust chi hacchhel!',
  'notif.escape_ok':          '🏃 Pahust hacchhets!',
  'notif.family_mem':         '👤 Andam avelatsvets →',
  'notif.family_name_taken':  'Anvanume ashxatum e!',
  'notif.family_pow':         '💪 Entaniqy uxeghatsav',
  'notif.freed':              '🔓 Bantits durs ekav!',
  'notif.friend_added':       '✅ Hayterkum enunvets!',
  'notif.friend_declined':    '❌ Hayt merjvets',
  'notif.friend_req_ok':      '👤 Hayt ugharkvets!',
  'notif.garage_expanded':    '🚗 Avtotnak +5 tegh!',
  'notif.garage_full':        'Avtotnak lits e!',
  'notif.garage_full2':       'Avtotnak lits e!',
  'notif.get_daily':          'Stanal $100',
  'notif.in_prison':          'Bantum eq!',
  'notif.insufficient':       'Chabavar p\'ogh!',
  'notif.loan_max':           'Max vark $50,000!',
  'notif.loan_no_cash':       'Kankik chabavar!',
  'notif.loan_none':          'Activ vark chka!',
  'notif.max_bet':            'Max khaghadruyq:',
  'notif.need_2500':          'Petq e $2,500!',
  'notif.new_rank':           '⭐ Nor kochum',
  'notif.no_1000':            'Petq e $1,000!',
  'notif.no_100k':            'Petq e $100,000!',
  'notif.no_10k':             'Petq e $10,000!',
  'notif.no_150k':            'Petq e $150,000!',
  'notif.no_200k':            'Petq e $200,000!',
  'notif.no_2500':            'Petq e $2,500!',
  'notif.no_250k':            'Petq e $250,000!',
  'notif.no_300k':            'Petq e $300,000!',
  'notif.no_50k':             'Petq e $50,000!',
  'notif.no_75k':             'Petq e $75,000!',
  'notif.no_dirty':           'Keght p\'ogh chka!',
  'notif.no_energy2':         'Energia chka!',
  'notif.no_energy3':         'Energia chka!',
  'notif.no_money':           'P\'ogh chka!',
  'notif.no_money5':          'Petq e $2,000!',
  'notif.only_mafioso':       'Miain Mafiozi-yi hamar!',
  'notif.profile_updated':    '✅ Profil tharmatstsvets!',
  'notif.quests_refresh':     '🔄 Khndirnery tharmatstsvets!',
  'notif.rank_req_mafioso':   'Mafiozi kochum petq e!',
  'notif.rented':             '✅ Vandarkatsvets',
  'notif.rep_30':             'Hamav 30+ petq e!',
  'notif.rep_40':             'Hamav 40+ petq e!',
  'notif.rep_50':             'Hamav 50+ petq e!',
  'notif.rep_max':            'Hamave max e!',
  'notif.rep_paid':           '✅ Hamav +5!',
  'notif.slots_full':         'Biznes slotner lits en!',
  'notif.stash_no':           'Pahestum p\'ogh chka!',
  'notif.train_en':           '⚡ Max Energia +5!',
  'notif.train_hp':           '❤️ Max HP +5!',
  'notif.transfer_bad_acc':   'Skhal hashvehamer!',
  'notif.transfer_done':      'tharstharacvel hashvin',
  'notif.transfer_fail':      'Phokhancum chstacvets',
  'notif.transfer_no_amt':    'Gumary ente!',
  'notif.transfer_no_bank':   'Hashvum p\'ogh chka',
  'notif.transfer_self':      'Seph hashvin chi kara!',
  'notif.unconscious':        '💀 Angitak eq!',
  'notif.unconscious2':       '💀 Angitak eq!',
  'notif.unrented':           'Vandaky katarvel',
  'notif.wrong_amount':       'Skhal gumary!',

  // ── Page-level messages ───────────────────────────────
  'page.garage_empty':        'Avtotnak datark e',
  'page.no_activity':         'Gortsuneut\'yun chka',
});
