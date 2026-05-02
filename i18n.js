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

// ── HY dict additions for new keys ───────────────────────────────
// (These have Armenian originals in DOM, HY dict only needed for t() calls)
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
