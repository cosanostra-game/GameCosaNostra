// =====================================================
//  i18n.js — Cosa Nostra · Language System v1.0
//  Languages: hy (Հայերեն) · ru (Русский)
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
  'topbar.energy':'⚡ Энерг.',

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
  'btn.expand2':      'Расширить ($100,000)',
  'btn.hide':         'Спрятать',
  'btn.take':         'Извлечь',
  'btn.commit':       'Совершить',
  'btn.extort':       'Вымогать',
  'btn.smuggle':      'Перевезти',
  'btn.rob':          'Ограбить',
  'btn.steal':        'Угнать',

  // ── Bank ────────────────────────────────────────────
  'bank.personal': 'Личный счёт',
  'bank.transfer': 'Банковский перевод',
  'bank.loan':     'Кредитная линия',
  'bank.accPh':    'Номер счёта (AM123456)',
  'bank.amtPh':    'Сумма...',
  'bank.loanPh':   'Сумма (Макс. $50,000)',

  // ── Business ────────────────────────────────────────
  'biz.slots':        'Слоты бизнеса:',
  'biz.slotsLabel':   'Слоты Бизнеса',
  'biz.market':       'Рынок',
  'biz.my':           'Мои бизнесы',
  'biz.myTab':        'Мои Бизнесы',
  'biz.launderTitle': 'Благотворительный фонд',
  'biz.launderSub':   '(Отмывание денег)',
  'biz.dirtyMoney':   '🚫💰 Грязные деньги:',
  'biz.restaurant':   'Ресторан (Легальный)',
  'biz.restaurant.desc': 'Чистый и легальный бизнес. Низкий, но стабильный доход. Max Lv: 15',
  'biz.casino':       'Подпольное Казино',
  'biz.casino.desc':  'Только для мафии. Приносит большой доход, но требует связей.',
  'biz.arms':         'Оружейный Завод',
  'biz.arms.desc':    'Тяжёлый, опасный, но невероятно прибыльный теневой бизнес.',
  'biz.strip':        'Стриптиз Клуб 🔞',
  'biz.strip.desc':   'Теневой досуг, грязные деньги. Реп.: 40+ | Доход: в виде <b style="color:#af52de;">грязных денег</b>. Max Lv: 15',
  'biz.launderDesc':  'Доходы стриптиз-клуба и оружейного завода — «грязные». Через фонд их можно отмыть — 30% уйдёт на «благотворительность».',
  'biz.price75':      'Стоимость: $75,000',
  'biz.price150':     'Стоимость: $150,000',
  'biz.price200':     'Стоимость: $200,000',
  'biz.price300':     'Стоимость: $300,000',
  'biz.namePh':       'Название...',
  'biz.casinoNamePh': 'Название казино...',
  'biz.clubNamePh':   'Название клуба...',
  'biz.launderPh':    'Отмыть ($)...',

  // ── Prison ──────────────────────────────────────────
  'prison.free':    'На свободе',
  'prison.freeSub': 'Вы чисты перед законом (пока что).',
  'prison.locked':  'ВЫ ЗА РЕШЁТКОЙ',
  'prison.bribeTip':'Взятка = 100% успех, Побег = 50% и большой риск.',

  // ── Stash ────────────────────────────────────────────
  'stash.stored': 'Хранится',
  'stash.desc':   'Эти деньги защищены от полицейских конфискаций.',
  'stash.inPh':   'Положить ($)...',
  'stash.outPh':  'Достать ($)...',

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
  'train.price500':  'Цена: $500',

  // ── Reputation ───────────────────────────────────────
  'rep.desc':     'Ваша репутация в городе. Высокая репутация снижает риск ареста.',
  'rep.donation': 'Благотворительность / Взятка мэрии',
  'rep.donDesc':  'Жертвуя деньги, покупаете молчание города. +5 Репутация',
  'rep.donPrice': 'Стоимость: $2,000',

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
  'stats.timeUnit': 'мин.',

  // ── Events ───────────────────────────────────────────
  'events.desc':  'История случайных событий в городе.',
  'events.empty': 'Событий пока нет...',

  // ── Day/Night ────────────────────────────────────────
  'cycle.current':   'Текущее время',
  'cycle.status':    'Статус:',
  'cycle.day':       '☀️ День',
  'cycle.night':     '🌙 Ночь',
  'cycle.nightDesc': '🌙 <strong>Ночью</strong> преступления успешнее (риск снижается), но патрули усиливаются.',
  'cycle.dayDesc':   '☀️ <strong>Днём</strong> легальный и теневой бизнес работают эффективнее.',

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

  // ── Friends & Families ───────────────────────────────
  'families.desc':    'Пять известных мафиозных семей, поделивших город. Достигни звания <b style="color:var(--accent);">Мафиози</b> и накопи <b style="color:var(--ok);">$250,000</b> — создай 6-ю семью.',
  'friends.title':    'Друзья',
  'friends.incoming': 'Входящие заявки',
  'friends.list':     'Список друзей',
  'friends.requests': 'Входящие заявки',
  'friends.searchPh': 'Введите nickname...',
  'fp.message':       'Сообщение',

  // ── Crypto ───────────────────────────────────────────
  'crypto.trade':     'Торговля',
  'crypto.portfolio': 'Ваш портфель',
  'crypto.updateNote':'Рынок обновляется каждые 5 секунд.',
  'crypto.amtPh':     'Количество',

  // ── Notifications ────────────────────────────────────
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
  
  // Socket Dynamic Notifications
  'notif.familyInvite': '🏰 Приглашение в семью: <b>{family}</b> (Босс: {boss})',
  'notif.memberJoined': '👤 {member} присоединился к семье {family}!',
  'notif.bankTransfer': '🏦 Перевод +${amount} ← {from} ({account})',
  'notif.warDeclared':  '⚔️ <b>{attacker}</b> (Босс: {boss}) объявил войну!',
  'notif.warAttack':    '{icon} <b>{attacker}</b> нанес <b>{damage}</b> урона! [{myHp} vs {enemyHp}]',
  'notif.warEnded':     '{icon} Война окончена! Победитель: <b>{winner}</b> {prize}',

  // ── Auth screen ─────────────────────────────────────
  'auth.loginTab':    'Войти',
  'auth.registerTab': 'Регистрация',
  'auth.loginBtn':    'Войти в игру',
  'auth.registerBtn': 'Зарегистрироваться',
  'auth.remember':    'Запомнить меня (автовход)',
  'auth.emailPh':     'Электронная почта',
  'auth.passPh':      'Пароль',
  'auth.nickPh':      'Ваш никнейм',
  'auth.newPassPh':   'Пароль (мин. 6)',
  'auth.confPassPh':  'Повторите пароль',

  // ── Preloader ────────────────────────────────────────
  'pre.sub':          'Войти в преступный мир',
  'pre.quote':        '"У каждого своя судьба..."',
  'pre.loading':      'Загрузка...',
  'loading':          'Загрузка...',

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
  'cars.desc':       'Угнанные машины можно продать или использовать в преступлениях (снижает риск).',

  // ── Main page ─────────────────────────────────────────
  'main.bankLabel':   'Личный Банковский Счёт',
  'main.quickActions':'⚡ Быстрые Действия',
  'quick.pocket':     'Карманник',
  'quick.shop':       'Ограбить Магазин',

  // ── Inventory ────────────────────────────────────────
  'inv.shopTab':        '🛒 Магазин',
  'inv.ownedTab':       '🎒 Мой Арсенал',
  'inv.desc':           'Оружие и броня влияют на % успеха в преступлениях и на потерю HP.',
  'inv.crimeBonus':     'Бонус прест.',
  'inv.hpProt':         'Защита HP',
  'inv.weapons':        '⚔️ Оружие',
  'inv.armor':          '🛡️ Броня и Одежда',
  'inv.myWeapons':      '⚔️ Моё Оружие',
  'inv.myArmor':        '🛡️ Моя Броня',
  'inv.equippedWeapon': '🔫 Экип. Оружие:',
  'inv.equippedArmor':  '🛡️ Экип. Броня:',

  // ── Casino ───────────────────────────────────────────
  'casino.roulette':  'Рулетка',
  'casino.slots':     'Слот Машина',
  'casino.betPh':     'Ставка ($)...',

  // ── Estate / Dealer ──────────────────────────────────
  'estate.myTab':     'Моя Недвижимость',
  'dealer.newTab':    'Новые Машины',
  'dealer.usedTab':   'Б/У',
  'filter.min':       'Мин. цена ($)',
  'filter.max':       'Макс. цена ($)',
  'filter.minShort':  'Мин. ($)',
  'filter.maxShort':  'Макс. ($)',

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
  'garage.slots':  'Места',
};

// ── Armenian notifications for t() fallback ────────────────────────
const HY = {
  // ── Sidebar navigation ─────────────────────────────
  'menu.main':         'Գլխավոր',
  'menu.crimes':       'Հանցագործություններ',
  'menu.cars':         'Ավտոառևանգում',
  'menu.garage':       'Ավտոտնակ',
  'menu.inventory':    'Զինանոց',
  'menu.dealership':   'Ավտոսրահ',
  'menu.bank':         'Բանկ',
  'menu.business':     'Բիզնես',
  'menu.casino':       'Կազինո',
  'menu.crypto':       'Կրիպտո',
  'menu.estate':       'Անշարժ գույք',
  'menu.stash':        'Թաքստոց',
  'menu.prison':       'Բանտ',
  'menu.hospital':     'Հիվանդանոց',
  'menu.training':     'Մարզում',
  'menu.reputation':   'Հեղինակություն',
  'menu.families':     'Ընտանիքներ',
  'menu.friends':      'Ընկերներ',
  'menu.messages':     'Նամակներ',
  'menu.quests':       'Օրվա առաջադրանքներ',
  'menu.daynight':     'Գիշեր / Ցերեկ',
  'menu.events':       'Իրադարձություններ',
  'menu.stats':        'Վիճակագրություն',
  'menu.leaderboard':  'Առաջատարներ',
  'menu.settings':     'Կարգավորումներ',
  'menu.profile':      'Իմ էջը',

  // ── Menu section titles ─────────────────────────────
  'section.main':        'Հիմնական',
  'section.finance':     'Ֆինանսներ և Գույք',
  'section.underground': 'Ընդհատակ',
  'section.extra':       'Հավելյալ',

  // ── Sidebar misc ────────────────────────────────────
  'sidebar.rank': 'Կոչում',
  'daily.label':  'Օրական բոնուս',
  'daily.claim':  'Ստանալ $100',
  'daily.claimed':'Ստացված է ✓',

  // ── Topbar ──────────────────────────────────────────
  'topbar.log':   'Մատյան',
  'topbar.sound': 'Ձայն',
  'topbar.theme': 'Թեմա',
  'topbar.lang':  '🇦🇲 ՀՅ',
  'topbar.energy':'⚡ Էներգ.',

  // ── Page headings (h1 / h2) ─────────────────────────
  'page.main':        'Գլխավոր',
  'page.crimes':      'Հանցագործություններ',
  'page.cars':        'Ավտոառևանգում',
  'page.garage':      'Ավտոտնակ',
  'page.inventory':   'Զինանոց',
  'page.dealership':  'Ավտոսրահ',
  'page.bank':        'Կենտրոնական Բանկ',
  'page.business':    'Բիզնես և Լվացում',
  'page.prison':      'Բանտ',
  'page.casino':      'Կազինո',
  'page.crypto':      'Կրիպտո',
  'page.estate':      'Անշարժ գույք',
  'page.stash':       'Թաքստոց (Սեյֆ)',
  'page.hospital':    'Հիվանդանոց',
  'page.training':    'Մարզում',
  'page.reputation':  'Հեղինակություն',
  'page.quests':      'Օրվա առաջադրանքներ',
  'page.stats':       'Վիճակագրություն',
  'page.leaderboard': 'Առաջատարներ',
  'page.events':      'Իրադարձություններ',
  'page.daynight':    'Ժամանակի Ցիկլ',
  'page.settings':    'Կարգավորումներ',
  'page.families':    'Ընտանիքներ',
  'page.profile':     'Իմ էջը',
  'page.friends':     'Ընկերներ',
  'page.messages':    'Նամակներ',

  // ── Buttons ─────────────────────────────────────────
  'btn.deposit':      'Մուտքագրել',
  'btn.withdraw':     'Կանխիկացնել',
  'btn.transfer':     'Փոխանցել',
  'btn.buy':          'Գնել',
  'btn.sell':         'Վաճառել',
  'btn.launder':      '🧹 Լվանալ (70%)',
  'btn.launderAll':   'Լվանալ ամենը',
  'btn.takeLoan':     'Վերցնել',
  'btn.repayLoan':    'Մարել',
  'btn.found':        'Հիմնադրել',
  'btn.save':         'Պահպանել',
  'btn.load':         'Բեռնել',
  'btn.reset':        'Ջնջել',
  'btn.heal25':       'Բուժվել',
  'btn.healFull':     'Ամբողջական բուժում',
  'btn.train':        'Մարզվել',
  'btn.donate':       'Վճարել',
  'btn.spin':         '🎰 ՊՏՏԵԼ',
  'btn.red':          '🔴 ԿԱՐՄԻՐ (x2)',
  'btn.black':        '⚫ ՍԵՒ (x2)',
  'btn.bribe':        '💰 Կաշառք ($1,000)',
  'btn.escape':       '🚀 Փախուստ ($2,500)',
  'btn.logout':       'Ելք',
  'btn.edit':         'Խմբագրել',
  'btn.deleteProfile':'Ջնջել հաշիվը',
  'btn.expand':       'Ընդլայնել ($100,000)',
  'btn.expand2':      'Ընդլայնել ($100,000)',
  'btn.hide':         'Թաքցնել',
  'btn.take':         'Հանել',
  'btn.commit':       'Կատարել',
  'btn.extort':       'Շորթել',
  'btn.smuggle':      'Տեղափոխել',
  'btn.rob':          'Կողոպտել',
  'btn.steal':        'Գողանալ',

  // ── Bank ────────────────────────────────────────────
  'bank.personal': 'Անձնական հաշիվ',
  'bank.transfer': 'Բանկային փոխանցում',
  'bank.loan':     'Վարկային գիծ',
  'bank.accPh':    'Հաշվեհամար (AM123456)',
  'bank.amtPh':    'Գումար...',
  'bank.loanPh':   'Գումար (Առավել. $50,000)',

  // ── Business ────────────────────────────────────────
  'biz.slots':        'Բիզնեսի սլոթեր:',
  'biz.slotsLabel':   'Բիզնեսի սլոթեր',
  'biz.market':       'Շուկա',
  'biz.my':           'Իմ բիզնեսները',
  'biz.myTab':        'Իմ Բիզնեսները',
  'biz.launderTitle': 'Բարեգործական հիմնադրամ',
  'biz.launderSub':   '(Փողերի լվացում)',
  'biz.dirtyMoney':   '🚫💰 Կեղտոտ փողեր:',
  'biz.restaurant':   'Ռեստորան (Օրինական)',
  'biz.restaurant.desc': 'Մաքուր և օրինական բիզնես։ Ցածր, բայց կայուն եկամուտ։ Մաքս. մակ.՝ 15',
  'biz.casino':       'Ընդհատակյա Կազինո',
  'biz.casino.desc':  'Միայն մաֆիայի համար։ Բերում է մեծ եկամուտ, բայց պահանջում է կապեր։',
  'biz.arms':         'Զենքի Գործարան',
  'biz.arms.desc':    'Ծանր, վտանգավոր, բայց անհավանական շահութաբեր ստվերային բիզնես։',
  'biz.strip':        'Ստրիպտիզ Ակումբ 🔞',
  'biz.strip.desc':   'Ստվերային ժամանց, կեղտոտ փողեր։ Հեղ.՝ 40+ | Եկամուտը՝ որպես <b style="color:#af52de;">կեղտոտ փողեր</b>։ Մաքս. մակ.՝ 15',
  'biz.launderDesc':  'Ստրիպտիզ-ակումբի և զենքի գործարանի եկամուտները «կեղտոտ» են։ Ֆոնդի միջոցով դրանք կարելի է լվանալ — 30%-ը կգնա «բարեգործության»։',
  'biz.price75':      'Արժեքը՝ $75,000',
  'biz.price150':     'Արժեքը՝ $150,000',
  'biz.price200':     'Արժեքը՝ $200,000',
  'biz.price300':     'Արժեքը՝ $300,000',
  'biz.namePh':       'Անվանում...',
  'biz.casinoNamePh': 'Կազինոյի անվանում...',
  'biz.clubNamePh':   'Ակումբի անվանում...',
  'biz.launderPh':    'Լվանալ ($)...',

  // ── Prison ──────────────────────────────────────────
  'prison.free':    'Ազատության մեջ',
  'prison.freeSub': 'Դուք մաքուր եք օրենքի առաջ (առայժմ):',
  'prison.locked':  'ԴՈՒՔ ՃԱՂԵՐԻ ՀԵՏԵՎՈՒՄ ԵՔ',
  'prison.bribeTip':'Կաշառք = 100% հաջողություն, Փախուստ = 50% և մեծ ռիսկ։',

  // ── Stash ────────────────────────────────────────────
  'stash.stored': 'Պահվում է',
  'stash.desc':   'Այս գումարը պաշտպանված է ոստիկանության բռնագրավումից:',
  'stash.inPh':   'Դնել ($)...',
  'stash.outPh':  'Հանել ($)...',

  // ── Hospital ─────────────────────────────────────────
  'hosp.hp':        'Առողջություն (HP):',
  'hosp.light':     'Թեթև բուժում',
  'hosp.lightDesc': 'Վերականգնում է 25 HP: Օգտակար է թեթև վնասվածքների դեպքում:',
  'hosp.lightPrice':'Արժեքը՝ $200',
  'hosp.full':      'Ամբողջական վերականգնում',
  'hosp.fullDesc':  'Ամբողջությամբ վերականգնում է HP-ն և էներգիան:',
  'hosp.fullPrice': 'Արժեքը՝ $1,500',

  // ── Training ─────────────────────────────────────────
  'train.desc':      'Բարձրացրեք ձեր առավելագույն ֆիզիկական և մտավոր պարամետրերը:',
  'train.phys':      'Ֆիզիկական պատրաստվածություն',
  'train.physDesc':  '+5 Առավելագույն HP',
  'train.physPrice': 'Արժեքը՝ $500',
  'train.mental':    'Մտավոր պատրաստվածություն',
  'train.mentDesc':  '+5 Առավելագույն Էներգիա',
  'train.mentPrice': 'Արժեքը՝ $500',
  'train.price500':  'Արժեքը՝ $500',

  // ── Reputation ───────────────────────────────────────
  'rep.desc':     'Ձեր հեղինակությունը քաղաքում: Բարձր հեղինակությունը նվազեցնում է ձերբակալման ռիսկը և բացում նոր բիզնեսներ:',
  'rep.donation': 'Բարեգործություն / Կաշառք քաղաքապետարանին',
  'rep.donDesc':  'Գումար նվիրաբերելով՝ դուք գնում քաղաքի լռությունը: +5 Հեղինակություն',
  'rep.donPrice': 'Արժեքը՝ $2,000',

  // ── Settings ─────────────────────────────────────────
  'set.bg':       'Ֆոնային նկար',
  'set.bgDesc':   'Ընտրեք ֆոն ձեր սարքից:',
  'set.save':     'Պահպանել խաղը',
  'set.saveDesc': 'Պահպանեք առաջընթացը բրաուզերում:',
  'set.load':     'Բեռնել խաղը',
  'set.loadDesc': 'Բեռնել վերջին պահպանումը:',
  'set.reset':    'Ջնջել ամեն ինչ',
  'set.resetDesc':'Զրոյացնել ողջ առաջընթացը:',
  'set.langTitle':'Լեզվի ընտրություն',
  'set.langDesc': 'Ընտրեք խաղի լեզուն:',

  // ── Stats ────────────────────────────────────────────
  'stats.crimes':   'Հանցագործություններ',
  'stats.cars':     'Առևանգված մեքենաներ',
  'stats.earnings': 'Ընդհանուր վաստակած',
  'stats.time':     'Խաղում անցկացրած ժամանակ',
  'stats.timeUnit': 'րոպե',

  // ── Events ───────────────────────────────────────────
  'events.desc':  'Քաղաքում պատահական իրադարձությունների պատմություն:',
  'events.empty': 'Իրադարձություններ դեռ չկան...',

  // ── Day/Night ────────────────────────────────────────
  'cycle.current': 'Ընթացիկ ժամանակ',
  'cycle.status':  'Կարգավիճակ:',
  'cycle.day':     '☀️ Ցերեկ',
  'cycle.night':   '🌙 Գիշեր',
  'cycle.nightDesc': '🌙 <strong>Գիշերը</strong> հանցագործություններն ավելի հաջող են (ռիսկը նվազում է), բայց պարեկությունն ուժեղանում է:',
  'cycle.dayDesc':   '☀️ <strong>Ցերեկը</strong> օրինական և ստվերային բիզնեսներն ավելի արդյունավետ են գործում:',

  // ── Profile ──────────────────────────────────────────
  'profile.cash':    'Կանխիկ',
  'profile.bank':    'Բանկ',
  'profile.xp':      'XP Միավորներ',
  'profile.crimes':  'Հանցագործություններ',
  'profile.cars':    'Ավտոպարկ',
  'profile.hp':      'Առողջություն (HP)',
  'profile.since':   'Գրանցման ամսաթիվ',
  'profile.level':   'Մակարդակ',
  'profile.accInfo': 'Տեղեկություն հաշվի մասին',
  'profile.rank':    'Կոչում',
  'profile.created': 'Ստեղծվել է',
  'profile.welcome': 'Բարի գալուստ',

  // ── Friends & Families ───────────────────────────────
  'families.desc':    'Հինգ հայտնի մաֆիոզ ընտանիքներ, որոնք կիսել են քաղաքը: Հասիր <b style="color:var(--accent);">Մաֆիոզ</b> կոչմանը և կուտակիր <b style="color:var(--ok);">$250,000</b> — ստեղծիր 6-րդ ընտանիքը:',
  'friends.title':    'Ընկերներ',
  'friends.incoming': 'Ստացված հայտեր',
  'friends.list':     'Ընկերների ցանկ',
  'friends.requests': 'Ստացված հայտեր',
  'friends.searchPh': 'Մուտքագրեք nickname...',
  'fp.message':       'Նամակ',

  // ── Crypto ───────────────────────────────────────────
  'crypto.trade':     'Առևտուր',
  'crypto.portfolio': 'Ձեր պորտֆելը',
  'crypto.updateNote':'Շուկան թարմացվում է յուրաքանչյուր 5 վայրկյանը մեկ:',
  'crypto.amtPh':     'Քանակ',

  // ── Notifications ────────────────────────────────────
  'notif.inPrison':    'Դուք բանտում եք',
  'notif.noEnergy':    'Էներգիան չի բավականացնում',
  'notif.noHp':        'Դուք անգիտակից եք: Գնացեք հիվանդանոց:',
  'notif.garageFull':  'Ավտոտնակը լիքն է',
  'notif.saved':       'Պահպանված է ✓',
  'notif.loaded':      'Բեռնված է ✓',
  'notif.resetConfirm':'Համոզվա՞ծ եք: Ամեն ինչ կջնջվի անվերադարձ:',
  'notif.dailyClaim':  'Օրական բոնուս +$100!',
  'notif.dailyAlready':'Արդեն ստացված է այսօր',
  'notif.newRank':     'Նոր կոչում:',
  'notif.carStolen':   'Առևանգված է',
  'notif.garageExpand':'Ավտոտնակ +5 տեղ ✅',

  // Socket Dynamic Notifications
  'notif.familyInvite': '🏰 Ընտանեկան հրավեր: <b>{family}</b> (Բոսս՝ {boss})',
  'notif.memberJoined': '👤 {member}-ը միացավ {family} ընտանիքին:',
  'notif.bankTransfer': '🏦 Բանկային մուտք +${amount} ← {from} ({account})',
  'notif.warDeclared':  '⚔️ <b>{attacker}</b>-ը (Բոսս՝ {boss}) պատերազմ է հայտարարել ձեր ընտանիքի դեմ:',
  'notif.warAttack':    '{icon} <b>{attacker}</b>-ը հասցրեց <b>{damage}</b> վնաս: [{myHp} vs {enemyHp}]',
  'notif.warEnded':     '{icon} Պատերազմն ավարտվեց: Հաղթող՝ <b>{winner}</b> {prize}',

  // ── Auth screen ─────────────────────────────────────
  'auth.loginTab':    'Մուտք',
  'auth.registerTab': 'Գրանցում',
  'auth.loginBtn':    'Մտնել խաղ',
  'auth.registerBtn': 'Գրանցվել',
  'auth.remember':    'Հիշել ինձ (ավտոմուտք)',
  'auth.emailPh':     'Էլ. փոստ',
  'auth.passPh':      'Գաղտնաբառ',
  'auth.nickPh':      'Ձեր անունը (Nickname)',
  'auth.newPassPh':   'Գաղտնաբառ (նվազ. 6)',
  'auth.confPassPh':  'Կրկնեք գաղտնաբառը',

  // ── Preloader ────────────────────────────────────────
  'pre.sub':          'Մուտք գործել հանցավոր աշխարհ',
  'pre.quote':        '"Յուրաքանչյուրն ունի իր ճակատագիրը..."',
  'pre.loading':      'Բեռնում...',
  'loading':          'Բեռնում...',

  // ── Crimes ───────────────────────────────────────────
  'crime.pocket':      '🎯 Գրպանահատություն',
  'crime.shop':        '🏪 Կողոպտել խանութ',
  'crime.extort':      '💼 Շորթում',
  'crime.smuggle':     '📦 Մաքսանենգություն',
  'crime.bankrob':     '🏦 Բանկի կողոպուտ',
  'crime.pocket.desc': 'Մանր գործ, մանր փողեր: Ամենահեշտ տարբերակը սկսնակների համար:',
  'crime.shop.desc':   'Միջին ռիսկ, լավ փողեր: Գիշերն ավելի անվտանգ է:',
  'crime.extort.desc': 'Պահանջիր «տանիքի» գումար տեղի առևտրականներից: Անհրաժեշտ է լավ հեղինակություն:',
  'crime.smuggle.desc':'Ապրանքների ապօրինի տեղափոխում: Բարձր վարձատրություն, բարձր ռիսկ:',
  'crime.bankrob.desc':'Ամենավտանգավոր և եկամտաբեր գործը: Միայն փորձառուների համար:',

  // ── Cars ─────────────────────────────────────────────
  'car.class0':      '🚗 Էկոնոմ դաս',
  'car.class1':      '🚙 Բիզնես / Սպորտ',
  'car.class0.desc': 'Սովորական քաղաքային մեքենաներ: Հեշտ է գողանալ, էժան արժեն:',
  'car.class1.desc': 'Թանկարժեք ավտոմեքենաներ: Ավելի բարդ է, բայց եկամտաբեր:',
  'cars.desc':       'Առևանգված մեքենաները կարելի է վաճառել կամ օգտագործել հանցագործությունների մեջ (նվազեցնում է ռիսկը):',

  // ── Main page ─────────────────────────────────────────
  'main.bankLabel':   'Անձնական Բանկային Հաշիվ',
  'main.quickActions':'⚡ Արագ Գործողություններ',
  'quick.pocket':     'Գրպանահատ',
  'quick.shop':       'Կողոպտել Խանութ',

  // ── Inventory ────────────────────────────────────────
  'inv.shopTab':      '🛒 Խանութ',
  'inv.ownedTab':     '🎒 Իմ Զինանոցը',
  'inv.desc':         'Զենքը և զրահը ազդում են հանցագործությունների հաջողության %-ի և HP-ի կորստի վրա:',
  'inv.crimeBonus':   'Հանց․ բոնուս',
  'inv.hpProt':       'HP Պաշտպանություն',
  'inv.weapons':      '⚔️ Զենքեր',
  'inv.armor':        '🛡️ Զրահ և Հագուստ',
  'inv.myWeapons':    '⚔️ Իմ Զենքերը',
  'inv.myArmor':      '🛡️ Իմ Զրահը',
  'inv.equippedWeapon': '🔫 Հագած Զենք:',
  'inv.equippedArmor':  '🛡️ Հագած Զրահ:',

  // ── Casino ───────────────────────────────────────────
  'casino.roulette':  'Ռուլետկա',
  'casino.slots':     'Սլոթ Մեքենա',
  'casino.betPh':     'Խաղադրույք ($)...',

  // ── Estate / Dealer ──────────────────────────────────
  'estate.myTab':     'Իմ Անշարժ Գույքը',
  'dealer.newTab':    'Նոր Մեքենաներ',
  'dealer.usedTab':   'Բ/ՈՒ (Օգտագործված)',
  'filter.min':       'Նվազագույն գին ($)',
  'filter.max':       'Առավելագույն գին ($)',
  'filter.minShort':  'Նվազ. ($)',
  'filter.maxShort':  'Առավ. ($)',

  // ── index.html specific ─────────────────────────────
  'nav.about':     'Մեր մասին',
  'nav.features':  'Հնարավորություններ',
  'nav.factions':  'Խմբավորումներ',
  'nav.rules':     'Կանոններ',
  'nav.login':     'Մուտք',
  'nav.register':  'Գրանցում',
  'intro.enter':   'Մուտք',
  'hero.label':    'Հայկական Մաֆիա Ռոլփլեյ',
  'hero.tagline':  'Մաֆիայի կյանքը՝ քո ձեռքերում է',
  'hero.play':     '▶ Սկսել խաղը',
  'hero.login':    'Մուտք',
  'hero.scroll':   'Իջնել ներքև',
  'login.title':   'Բարի գալուստ',
  'login.subtitle':'Մուտք Cosa Nostra · Ձեր հաշիվը',
  'login.email':   'Էլ. փոստ',
  'login.pass':    'Գաղտնաբառ',
  'login.submit':  'Մուտք ➤',
  'login.noAcc':   'Չունե՞ք հաշիվ:',
  'login.register':'Գրանցվեք',
  'reg.title':     'Գրանցում',
  'reg.subtitle':  'Cosa Nostra · Ստեղծեք կերպար',
  'reg.nick':      'Կերպարի անուն (Nickname)',
  'reg.email':     'Էլ. փոստ',
  'reg.pass':      'Գաղտնաբառ',
  'reg.pass2':     'Կրկնեք գաղտնաբառը',
  'reg.submit':    'Գրանցվել ➤',
  'reg.hasAcc':    'Արդեն ունե՞ք հաշիվ:',
  'reg.loginLink': 'Մուտք գործել',
  'garage.slots':  'Տեղեր',
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
  const dict = lang === 'ru' ? RU : HY; 

  // ── 1. [data-i18n] — full textContent replacement ────────
  document.querySelectorAll('[data-i18n]').forEach(el => {
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
    if (el.dataset.i18nOrigText === undefined) {
      let raw = '';
      el.childNodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) raw += n.textContent;
      });
      el.dataset.i18nOrigText = raw.trim();
    }
    const key   = el.dataset.i18nText;
    const newTx = (dict && dict[key] !== undefined) ? dict[key] : el.dataset.i18nOrigText;
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
    btn.title = lang === 'ru' ? 'Переключить язык' : 'Փոխել լեզուն';
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