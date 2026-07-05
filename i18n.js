// =====================================================
//  i18n.js — Cosa Nostra · Language System v2.0
//  Languages: hy (Հայերեն) · ru (Русский)
//  All keys are synchronized.
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
  'menu.map':          'Карта города',

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
  'page.map':         'Карта Лос-Анджелеса',
  'page.no_activity': 'Нет активности...',

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
  'hosp.hp':        'Здоровье:',
  'hosp.light':     'Лёгкое лечение',
  'hosp.lightDesc': 'Восстанавливает двадцать пять единиц здоровья. Полезно при лёгких травмах.',
  'hosp.lightPrice':'Цена: $200',
  'hosp.full':      'Полное восстановление',
  'hosp.fullDesc':  'Полностью восстанавливает здоровье и энергию.',
  'hosp.fullPrice': 'Цена: $1,500',

  // ── Training ─────────────────────────────────────────
  'train.desc':      'Повысьте ваши максимальные физические и умственные параметры.',
  'train.phys':      'Физическая подготовка',
  'train.physDesc':  '+5 Максимальное здоровье',
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
  'profile.xp':      'Очки опыта',
  'profile.crimes':  'Преступления',
  'profile.cars':    'Автопарк',
  'profile.hp':      'Здоровье',
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
  'notif.in_prison':    'Вы в тюрьме',
  'notif.no_energy':    'Недостаточно энергии',
  'notif.no_hp':        'Вы без сознания. Идите в больницу.',
  'notif.garage_full':  'Гараж заполнен',
  'notif.saved':        'Сохранено ✓',
  'notif.loaded':       'Загружено ✓',
  'notif.reset_confirm':'Уверены? Всё будет удалено безвозвратно!',
  'notif.daily_claim':  'Ежедневный бонус +$100!',
  'notif.daily_already':'Уже получен сегодня',
  'notif.new_rank':     'Новое звание:',
  'notif.car_stolen':   'Угнан',
  'notif.garage_expand':'Гараж +5 мест ✅',
  'notif.get_daily':    'Забрать бонус',
  'notif.daily_received':'Бонус получен',
  'notif.daily_bonus':  'Ежедневный бонус +$100!',

  // Socket Dynamic Notifications
  'notif.family_invite': '🏰 Приглашение в семью: <b>{family}</b> (Босс: {boss})',
  'notif.member_joined': '👤 {member} присоединился к семье {family}!',
  'notif.bank_transfer': '🏦 Перевод +${amount} ← {from} ({account})',
  'notif.war_declared':  '⚔️ <b>{attacker}</b> (Босс: {boss}) объявил войну!',
  'notif.war_attack':    '{icon} <b>{attacker}</b> нанес <b>{damage}</b> урона! [{myHp} vs {enemyHp}]',
  'notif.war_ended':     '{icon} Война окончена! Победитель: <b>{winner}</b> {prize}',

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
  'inv.desc':           'Оружие и броня влияют на процент успеха в преступлениях и на потерю здоровья.',
  'inv.crimeBonus':     'Бонус преступления',
  'inv.hpProt':         'Защита здоровья',
  'inv.weapons':        '⚔️ Оружие',
  'inv.armor':          '🛡️ Броня и Одежда',
  'inv.myWeapons':      '⚔️ Моё Оружие',
  'inv.myArmor':        '🛡️ Моя Броня',
  'inv.equippedWeapon': '🔫 Экипированное оружие:',
  'inv.equippedArmor':  '🛡️ Экипированная броня:',

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
  'hero.label':    'Армянская Мафия Ролевая игра',
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

  // ── Extras (Weapons, Cars, Garage specific text) ─────
  'weapon.knife': 'Нож',
  'weapon.bat': 'Бита',
  'weapon.glock': 'Пистолет Глок Девятнадцать',
  'weapon.ak47': 'Автомат Калашникова Сорок Семь',
  'weapon.shotgun': 'Дробовик',
  'weapon.m4': 'Штурмовая винтовка Эм Четыре А Один',
  'weapon.sniper': 'Снайперская винтовка',
  'weapon.tommy': 'Пистолет-пулемёт Томпсон',
  'armor.leather': 'Кожаная куртка',
  'armor.kevlar': 'Бронежилет Кевлар',
  'armor.heavy': 'Тяжелая броня',
  'car.speed': 'Скорость:',
  'car.power': 'Мощность:',
  'car.price': 'Цена:',
  'car.sellPrice': 'Цена продажи:',
  'car.repair': 'Ремонт',
  'car.drive': 'Ехать',
  'garage.empty': 'Гараж пуст',
  'dealer.empty': 'Нет доступных машин',

  // ── Mobile Drawer sections ────────────────────────────
  'drawer.title':        'Все разделы',
  'drawer.main':         'Основное',
  'drawer.finance':      'Финансы и Имущество',
  'drawer.underground':  'Подполье',
  'drawer.extra':        'Дополнительно',

  // ── Mobile Drawer cell labels ─────────────────────────
  'mob.cars':        'Угон авто',
  'mob.garage':      'Гараж',
  'mob.inventory':   'Арсенал',
  'mob.dealership':  'Автосалон',
  'mob.business':    'Бизнес',
  'mob.crypto':      'Крипто',
  'mob.estate':      'Недвижимость',
  'mob.stash':       'Тайник',
  'mob.prison':      'Тюрьма',
  'mob.hospital':    'Больница',
  'mob.training':    'Тренировка',
  'mob.reputation':  'Репутация',
  'mob.families':    'Семьи',
  'mob.friends':     'Друзья',
  'mob.quests':      'Задания дня',
  'mob.daynight':    'Ночь / День',
  'mob.events':      'События',
  'mob.stats':       'Статистика',
  'mob.leaderboard': 'Лидерборд',
  'mob.profile':     'Мой профиль',

  // ── Edit Profile Modal ────────────────────────────────
  'modal.editProfile':    '✏️ Редактировать профиль',
  'modal.avatarBgColor':  'Цвет фона аватара',
  'modal.avatarClick':    'Нажмите на аватар, чтобы изменить фото',
  'modal.nickLabel':      'Nickname',
  'modal.nickPh':         'Ваш никнейм',
  'modal.bioLabel':       'Краткая биография',
  'modal.bioPh':          'Что-нибудь о себе...',
  'modal.cancel':         'Отмена',
  'modal.save':           'Сохранить',

  // ── Friend Profile Modal ──────────────────────────────
  'modal.friendProfile':  '👤 Профиль друга',

  // ── Search & Friends ──────────────────────────────────
  'friends.searching':    'Поиск...',
  'friends.notFound':     'Никто не найден',
  'friends.results':      'Результаты',
  'friends.removeTip':    'Удалить из друзей',
  'friends.online':       'Оnлайн',
  'friends.accept':       'Принять',
  'friends.decline':      'Отклонить',

  // ── Chat ──────────────────────────────────────────────
  'chat.loading':         'Загрузка...',
  'chat.noMessages':      'Сообщений нет. Напишите первым!',
  'chat.offline':         'Офлайн',

  // ── Auth errors ───────────────────────────────────────
  'auth.err.nameShort':   'Имя должно быть не менее 2 символов',
  'auth.err.emailInvalid':'Введите корректный эл. адрес',
  'auth.err.passShort':   'Пароль должен быть не менее 6 символов',
  'auth.err.passMatch':   'Пароли не совпадают',
  'auth.err.fillAll':     'Заполните все поля',
  'auth.ok.registered':   'Регистрация успешна! Добро пожаловать, ',
  'auth.ok.welcome':      'Добро пожаловать, ',
  'btn.registering':      'Регистрация...',
  'btn.logging_in':       'Вход...',
  'btn.register':         'Зарегистрироваться ➤',
  'btn.login':            'Войти ➤',

  // ── Quests ────────────────────────────────────────────
  'quest.1':         '🎯 Совершить 3 преступления',
  'quest.2':         '🚗 Угнать 1 машину',
  'quest.3':         '💰 Заработать $1500 пассивно',
  'quest.reward':    'Награда',
  'quest.done':      '✅ Выполнено',
  'quest.claim':     '🎁 Получить ${reward}',
  'quest.claimed':   '📜 Задание выполнено! +${reward}',
  'notif.quests_refresh': '📋 Новые задания на сегодня!',

  // ── Events ────────────────────────────────────────────
  'event.rain':      '🌧️ Сильный дождь. Риск преступлений снизился из-за пассивности полиции.',
  'event.crypto':    '📈 Крипторынок активизировался. Колебания цен.',
  'event.gift':      '🎁 Тебя узнали на улице как «хорошего парня»! +$200',
  'event.raid':      '👮 Полицейский рейд в районе.',
  'notif.arrested2': '👮 Рейд! Конфисковано $500',

  // ── Map ───────────────────────────────────────────────
  'map.noBusinesses': 'Бизнесов ещё нет:',
  'map.openBiz':      'Открыть →',
  'map.playerLabel':  'Ты',
  'map.legend.bank':       '🏦 Банк',
  'map.legend.prison':     '🔒 Тюрьма',
  'map.legend.hospital':   '🏥 Больница',
  'map.legend.casino':     '🎰 Kazino',
  'map.legend.bizmarket':  '🏢 Рынок',

  // ── Dealership filter dropdowns & render strings ──────
  'dealer.filterAll':    'Все типы',
  'dealer.filterSedan':  'Sedan',
  'dealer.filterSuv':    'Внедорожник',
  'dealer.filterSport':  'Спорт',
  'dealer.sortDefault':  'По умолчанию',
  'dealer.sortAsc':      'Цена ↑',
  'dealer.sortDesc':     'Цена ↓',
  'dealer.noFound':      'Машин не найдено',
  'dealer.badge.new':    'НОВЫЙ',
  'dealer.cond':         'Сост.:',
  'dealer.viewBtn':      'Подробнее',
  'dealer.closeBtn':     'Закрыть',
  'dealer.buyBtn':       'Купить',
  'dealer.bought':       '🚗 Куплено: ',

  // ── Dealer — Car types & Spec abbreviations ───────────
  'dealer.type.sport':    'Спорт',
  'dealer.type.sedan':    'Sedan',
  'dealer.type.suv':      'Внедорожник',
  'dealer.spec.hp':       'л.с.',
  'dealer.spec.kmh':      'км/ч',
  'dealer.spec.sec':      'с',
  'dealer.spec.topSpeed': 'Макс.скор.',
  'dealer.spec.auto6':    '6-ст. авт.',
  'dealer.spec.auto8':    '8-ст. авт.',
  'dealer.spec.mech6':    '6-ст. мех.',
  'dealer.spec.fullPkg':  'Полн.комп.',
  'dealer.spec.carbon':   'Carbon дет.',
  'dealer.spec.seats':    'мест',
  'dealer.spec.newKm':    '0 km',
  'dealer.spec.km':       'km',
  'dealer.spec.cond':     'С.И.',

  // ── Estate ───────────────────────────────────────────
  'estate.filterAll':       'Все типы',
  'estate.type.house':      'Квартира',
  'estate.type.land':       'Участок',
  'estate.type.garage':     'Гараж',
  'estate.title.apartment': 'Квартира',
  'estate.title.land':      'Уч.',
  'estate.title.garage':    'Гараж',
  'estate.title.location':  '(Центр/Район)',
  'estate.desc.apartment':  'Отличная квартира для аренды.',
  'estate.desc.land':       'Плодородный земельный участок.',
  'estate.desc.garage':     'Каменный, надёжный гараж.',
  'estate.notFound':        'Не найдено',
  'estate.rentPer10s':      'Аренда/10с:',
  'estate.viewBtn':         'Просмотр',
  'estate.empty':           'Нет недвижимости',
  'estate.unrent':          'Снять с аренды',
  'estate.rent':            'Сдать в аренду',
  'estate.typeLabel':       'Тип:',
  'estate.incomeLabel':     'Доход (аренда):',

  // ── Garage UI ─────────────────────────────────────────
  'garage.marketPrice': 'Рыночная цена:',
  'garage.crimeCar':    '✅ Крим. Авто',
  'garage.makeCrime':   '🚔 Сделать Крим.',

  // ── Sold / Bought notifications ───────────────────────
  'notif.sold':   'Продано',
  'notif.bought': '🚗 Куплено:',

  // ── Map ──────────────────────────────────────────────
  'map.desc':            'На карте отображаются ваши районы, бизнесы и ключевые объекты.',

  // ── Reputation ───────────────────────────────────────
  'rep.level':           'Уровень:',

  // ── Rank modal ────────────────────────────────────────
  'rank.title':    '⭐ Звания',
  'rank.current':  'Текущее:',
  'rank.progress': 'Прогресс',
  'rank.all':      'Все Звания',
  'rank.max':      'Очки (Максимум)',

  // ── Messages ─────────────────────────────────────────
  'msg.header':       'Сообщения',
  'msg.loadingList':  'Загрузка...',
  'msg.selectFriend': 'Выберите собеседника',
  'msg.inputPh':      'Написать сообщение...',
  'msg.sendTitle':    'Отправить',

  // ── Families render ───────────────────────────────────
  'fam.invite.hdr':      '🏰 Приглашение в семью',
  'fam.invite.body':     ' семья приглашает тебя (Босс: ',
  'fam.invite.accept':   '✓ Принять',
  'fam.invite.decline':  '✕ Отклонить',
  'fam.create.title':    'Создать 6-ю Семью',
  'fam.create.req':      'Требуется <b style="color:var(--accent);">Мафиози</b> + <b style="color:var(--ok);">$250,000</b>',
  'fam.create.namePh':   'Название семьи...',
  'fam.create.colorLbl': 'Цвет:',
  'fam.create.btn':      '🏰 Основать Семью',
  'fam.create.creating': 'Создаётся...',
  'fam.create.curRank':  'Текущее звание: ',
  'fam.power':           'СИЛА',
  'fam.mem.count':       'УЧАСТНИКИ',
  'fam.realMembers.hdr': 'Реальные члены',
  'fam.noMembers':       'Членов нет',
  'fam.kick':            'Исключить',
  'fam.inv.form.hdr':    '📨 Пригласить участника',
  'fam.inv.form.ph':     'Номер счёта AM123456...',
  'fam.inv.form.btn':    '📨 Пригласить',
  'fam.upgrade.btn':     '💪 Сила +10 ($50,000)',
  'fam.recruit.btn':     '👤 Участник +1 ($10,000)',
  'fam.leave.btn':       '🚪 Покинуть семью',
  'fam.disband.btn':     '💀 Расформировать Семью',
  'fam.family.suffix':   ' Семья',
  'fam.nameErr':         'Введите название семьи',
  'fam.accErr':          'Введите номер счёта AM',

  // ── Missing notification keys ─────────────────────────
  'notif.garage_full2':  'Гараж заполнен',
  'notif.no_money':      'Недостаточно средств',
  'notif.insufficient':  'На банковском счёте недостаточно средств',

  // ── New keys (added) ──────────────────────────────────
  'mob.settings': 'Настройки',
  'mob.logout': 'Выйти из аккаунта',
  'mob.more': 'Ещё',
  'section.explore': 'Разведка',
  'log.title': 'Журнал',
  'btn.close': 'Закрыть',
  'dealer.modal.title': 'Автосалон',
  'estate.modal.title': 'Недвижимость',
  'fp.remove': 'Удалить',
  'map.legend.you': 'Ты',
  'map.legend.strip': 'Стрип-клуб',
  'map.legend.ammunation': 'Оружейный магазин',
  'map.legend.airport': 'Аэропорт',
  'biz.max_level': 'Maksimoum',
  'biz.per_10s': '/10с',
  'inv.already_owned': '✅ Куплено',
  'inv.rank_required': '🔒 Требуется: {rank}',
  'btn.sell_short': 'Пр.',
  'leaderboard.you': 'Вы (Игрок)',
  'chat.online': 'Онлайн',
  'map.label.hospital': 'Больница',
  'map.label.prison': 'Тюрьма',
  'map.label.bank': 'Bank',
  'map.label.casino': 'Kazino',
  'map.label.ammunation': 'Оружейный магазин',
  'map.label.garage': 'Гараж',
  'map.label.airport': 'Аэропорт',
  'map.label.gym': 'Тренажерный зал',
  'map.label.police': 'Полиция',
  'map.label.strip': 'Стрип-клуб',

  // ── Extra coverage keys ─────────────────────────────────────
  'confirm.logout':         'Выйти из профиля?',
  'confirm.delete':         '⚠️ Удалить профиль? Это необратимо!',
  'confirm.reset':          '🗑️ Удалить весь прогресс?',
  'confirm.remove_friend':  'Удалить этого друга?',
  'fam.boss_label':         'Босс:',
  'fam.terr_label':         'Территория:',
  'npc.family.suffix':      ' Семья',
  'biz.none':               'Бизнесов нет',
  'chat.empty_preview':     'Нет сообщений',
  'chat.no_friends':        'Добавьте друзей сначала!',
  'chat.contacts_err':      'Не удалось загрузить.',
  'chat.just_now':          'Сейчас',
  'friend.removed':         'Друг удалён',
  'mob.map':                'Карта',
  'mob.daynight':           'Ночь/День',
  'mob.events':             'События',
  'mob.stats':              'Статистика',
  'mob.dd.profile':         'Мой профиль',
  'mob.dd.settings':        'Настройки',
  'mob.drawer.hdr':         'Все разделы',
  'slots.sorry':            'Не повезло, попробуйте',
  'daily.activity':         'Ежедневный бонус +$100',
  'preloader.s1':           'Загрузка...',
  'preloader.s2':           'Подготовка...',
  'preloader.s3':           'Готово',
  'confirm.leave_family':   'Покинуть семью?',
  'main.estate.unit':       'объ.',
  'friends.loading':        'Загрузка...',
  'friends.connError':      'Не удалось установить соединение.',
  'friends.emptyList':      'Список друзей пуст. Найдите и добавьте друзей!',
  'notif.fam_created':      '🏰 Семья успешно основана:',
  'notif.fam_power_up':     '💪 Сила семьи возросла до:',
  'notif.fam_new_member':   '👤 Новый участник! Всего:',
  'notif.fam_kicked':       '👤 Участник исключен из семьи.',

  // ── Weapons & Armor ───────────────────────────────────
  'weapon.knife.name': '🔪 Нож',
  'weapon.knife.desc': 'Основное уличное оружие. Увеличивает шанс на успех на 5%.',
  'weapon.pistol.name': '🔫 Пистолет (Макаров)',
  'weapon.pistol.desc': 'Стандартный пистолет. Даёт десять процентов к успеху и предотвращает потерю пяти единиц здоровья.',
  'weapon.revolver.name': '🔫 Револьвер',
  'weapon.revolver.desc': 'Тяжёлый револьвер. Даёт пятнадцать процентов к успеху и предотвращает потерю восьми единиц здоровья.',
  'weapon.shotgun.name': '💥 Дробовик',
  'weapon.shotgun.desc': 'Мощное оружие для ближнего боя. Даёт восемнадцать процентов к успеху и предотвращает потерю двенадцати единиц здоровья.',
  'weapon.thomson.name': '🔫 Томми-ган (SMG)',
  'weapon.thomson.desc': 'Пистолет-пулемёт Узи. Даёт двадцать пять процентов к успеху и предотвращает потерю восемнадцати единиц здоровья. Требуется звание «Капо».',
  'weapon.ak47.name': '⚙️ АК-47 (Калашников)',
  'weapon.ak47.desc': 'Тяжёлое боевое оружие. Даёт тридцать два процента к успеху и предотвращает потерю двадцати пяти единиц здоровья. Требуется звание «Дон».',

  'armor.jacket.name': '🧥 Кожаная куртка',
  'armor.jacket.desc': 'Базовая защита. Предотвращает потерю восьми единиц здоровья при нападении.',
  'armor.vest.name': '🦺 Кевларовый бронежилет',
  'armor.vest.desc': 'Средняя защита. Предотвращает потерю двадцати единиц здоровья. Требуется звание «Бандит».',
  'armor.heavy.name': '🛡️ Тяжелая броня',
  'armor.heavy.desc': 'Максимальная защита. Предотвращает потерю тридцати пяти единиц здоровья. Требуется звание «Мафиози».',

  // ── Territory keys ────────────────────────────────────
  'fam.terr.north':  'Северный район',
  'fam.terr.center': 'Центральный район',
  'fam.terr.east':   'Восточный район',
  'fam.terr.west':   'Западный район',
  'fam.terr.south':  'Южный район',

  // ── Quest desc keys ───────────────────────────────────
  'quest.1.desc': '🎯 Совершить 3 преступления',
  'quest.2.desc': '🚗 Угнать 1 автомобиль',
  'quest.3.desc': '💰 Заработать $1500 пассивного дохода',

  // ── Missing keys (TXT audit) ─────────────────────────────────────────────
  'ui.logout':       'Выйти из аккаунта',
  'ui.profile':      'Личный профиль',
  'rank.newbie':     'Новичок',
  'rank.boss':       'Босс',
  'rank.godfather':  'Крестный отец',
  'fam.create_btn':  'Основать новую семью',
  'fam.creating':    'Семья создается, подождите',
  'fam.invite':      'Приглашение в семью',
  'fam.accept':      'Принять приглашение',
  'fam.decline':     'Отклонить приглашение',
  'fam.disband':     'Распустить семью полностью',
  'biz.bank_name':   'Введите название банка',
  'biz.taxi_park':   'Управление таксопарком',
  'biz.vip_status':  'Особый статус',
  'biz.income':      'Пассивный доход',
  'board.title':     'Таблица лидеров',
  'board.points':    'Рейтинговые очки',
  'quest.title':     'Ежедневные задания',
  'quest.task1':     'Совершить три преступления',
  'quest.task2':     'Угнать один автомобиль',
  'friends.search':  'Поиск друзей',
  'friends.loading': 'Идет поиск в системе',
  'friends.empty':   'Никто не найден в данных',
  'chat.write':      'Написать сообщение',
  'ui.exp_points':   'очков опыта',
  'ui.hp_units':     'единиц здоровья',
  'bank.deposited':  'внесено в банк',
  'bank.withdrawn':  'снято из банка',

};

// ── Armenian translations (full) ────────────────────────
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
  'menu.map':          'Քաղաքի Քարտեզ',

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
  'page.map':         'Լոս Անջելեսի Քարտեզ',
  'page.no_activity': 'Գործունեություն չկա...',

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
  'notif.in_prison':    'Դուք բանտում եք',
  'notif.no_energy':    'Բավարար էներգիա չկա',
  'notif.no_hp':        'Դուք անգիտակից եք: Գնացեք հիվանդանոց:',
  'notif.garage_full':  'Ավտոտնակը լիքն է',
  'notif.saved':       'Պահպանված է ✓',
  'notif.loaded':      'Բեռնված է ✓',
  'notif.reset_confirm':'Համոզվա՞ծ եք։ Ամեն ինչ կջնջվի անվերադարձ։',
  'notif.daily_claim':  'Օրական բոնուս +$100!',
  'notif.daily_already':'Այսօր արդեն ստացել եք',
  'notif.new_rank':     'Նոր կոչում՝',
  'notif.car_stolen':   'Առևանգված է',
  'notif.garage_expand':'Ավտոտնակ +5 տեղ ✅',
  'notif.get_daily':    'Ստանալ բոնուսը',
  'notif.daily_received':'Բոնուսը ստացված է',
  'notif.daily_bonus':  'Օրական բոնուս +$100!',
  
  // Socket Dynamic Notifications
  'notif.family_invite': '🏰 Ընտանեկան հրավեր: <b>{family}</b> (Բոսս՝ {boss})',
  'notif.member_joined': '👤 {member}-ը միացավ {family} ընտանիքին!',
  'notif.bank_transfer': '🏦 Բանկային մուտք +${amount} ← {from} ({account})',
  'notif.war_declared':  '⚔️ <b>{attacker}</b>-ը (Բոսս՝ {boss}) պատերազմ է հայտարարել ձեր ընտանիքի դեմ:',
  'notif.war_attack':    '{icon} <b>{attacker}</b>-ը հասցրեց <b>{damage}</b> վնաս: [{myHp} vs {enemyHp}]',
  'notif.war_ended':     '{icon} Պատերազմն ավարտվեց: Հաղթող՝ <b>{winner}</b> {prize}',

  // ── Auth screen ─────────────────────────────────────
  'auth.loginTab':    'Մուտք',
  'auth.registerTab': 'Գրանցում',
  'auth.loginBtn':    'Մտնել խաղ',
  'auth.registerBtn': 'Գրանցվել',
  'auth.remember':    'Հիշել ինձ (ավտոմուտք)',
  'auth.emailPh':     'Էլ․ փոստ',
  'auth.passPh':      'Գաղտնաբառ',
  'auth.nickPh':      'Ձեր մականունը',
  'auth.newPassPh':   'Գաղտնաբառ (մին. 6)',
  'auth.confPassPh':  'Կրկնեք գաղտնաբառը',

  // ── Preloader ────────────────────────────────────────
  'pre.sub':          'Մուտք գործել հանցավոր աշխարհ',
  'pre.quote':        '"Ամեն մարդ իր ճակատագիրն ունի..."',
  'pre.loading':      'Բեռնում...',
  'loading':          'Բեռնում...',

  // ── Crimes ───────────────────────────────────────────
  'crime.pocket':      '🎯 Գրպանահատություն',
  'crime.shop':        '🏪 Թալանել խանութ',
  'crime.extort':      '💼 Շորթում',
  'crime.smuggle':     '📦 Մաքսանենգություն',
  'crime.bankrob':     '🏦 Բանկի կողոպուտ',
  'crime.pocket.desc': 'Մանր գործ, մանր փողեր: Ամենահեշտ տարբերակը սկսնակների համար:',
  'crime.shop.desc':   'Միջին ռիսկ, լավ փողեր: Գիշերը ավելի անվտանգ է:',
  'crime.extort.desc': 'Պահանջիր «տանիքի» գումար տեղական վաճառականներից: Հարկավոր է լավ հեղինակություն:',
  'crime.smuggle.desc':'Ապրանքների անօրինական տեղափոխում: Բարձր վճար, բարձր ռիսկ:',
  'crime.bankrob.desc':'Ամենավտանգավոր և եկամտաբեր գործը: Միայն փորձառուների համար:',

  // ── Cars ─────────────────────────────────────────────
  'car.class0':      '🚗 Էկոնոմ դաս',
  'car.class1':      '🚙 Բիզնես / Սպորտ',
  'car.class0.desc': 'Սովորական քաղաքային մեքենաներ: Հեշտ է գողանալ, քիչ արժեն:',
  'car.class1.desc': 'Թանկարժեք մեքենաներ: Ավելի բարդ է, բայց եկամտաբեր:',
  'cars.desc':       'Գողացված մեքենաները կարելի է վաճառել կամ օգտագործել հանցագործություններում (նվազեցնում է ռիսկը):',

  // ── Main page ─────────────────────────────────────────
  'main.bankLabel':   'Անձնական Բանկային Հաշիվ',
  'main.quickActions':'⚡ Արագ Գործողություններ',
  'quick.pocket':     'Գրպանահատ',
  'quick.shop':       'Թալանել Խանութ',

  // ── Inventory ────────────────────────────────────────
  'inv.shopTab':        '🛒 Խանութ',
  'inv.ownedTab':       '🎒 Իմ Զինանոցը',
  'inv.desc':           'Զենքն ու զրահը ազդում են հանցագործությունների հաջողության %-ի և HP-ի կորստի վրա:',
  'inv.crimeBonus':     'Հանցագործության բոնուս',
  'inv.hpProt':         'HP Պաշտպանություն',
  'inv.weapons':        '⚔️ Զենքեր',
  'inv.armor':          '🛡️ Զրահ և Հագուստ',
  'inv.myWeapons':      '⚔️ Իմ Զենքերը',
  'inv.myArmor':        '🛡️ Իմ Զրահը',
  'inv.equippedWeapon': '🔫 Կրած Զենքը:',
  'inv.equippedArmor':  '🛡️ Կրած Զրահը:',

  // ── Casino ───────────────────────────────────────────
  'casino.roulette':  'Ռուլետկա',
  'casino.slots':     'Սլոթ Մեքենա',
  'casino.betPh':     'Խաղադրույք ($)...',

  // ── Estate / Dealer ──────────────────────────────────
  'estate.myTab':     'Իմ Անշարժ Գույքը',
  'dealer.newTab':    'Նոր Մեքենաներ',
  'dealer.usedTab':   'Օգտագործված (Բ/ՈՒ)',
  'filter.min':       'Նվազ. գին ($)',
  'filter.max':       'Առավել. գին ($)',
  'filter.minShort':  'Նվազ. ($)',
  'filter.maxShort':  'Առավել. ($)',

  // ── index.html specific ─────────────────────────────
  'nav.about':     'Մեր մասին',
  'nav.features':  'Հնարավորություններ',
  'nav.factions':  'Խմբավորումներ',
  'nav.rules':     'Կանոններ',
  'nav.login':     'Մուտք',
  'nav.register':  'Գրանցում',
  'intro.enter':   'Մուտք գործել',
  'hero.label':    'Հայկական Մաֆիա Ռոլփլեյ',
  'hero.tagline':  'Մաֆիայի կյանքը՝ քո ձեռքերում',
  'hero.play':     '▶ Սկսել խաղը',
  'hero.login':    'Մուտք',
  'hero.scroll':   'Ոլորել ներքև',
  'login.title':   'Բարի գալուստ',
  'login.subtitle':'Մուտք Cosa Nostra · Ձեր հաշիվը',
  'login.email':   'Էլ. փոստ',
  'login.pass':    'Գաղտնաբառ',
  'login.submit':  'Մուտք ➤',
  'login.noAcc':   'Չունե՞ք հաշիվ:',
  'login.register':'Գրանցվեք',
  'reg.title':     'Գրանցում',
  'reg.subtitle':  'Cosa Nostra · Ստեղծեք կերպար',
  'reg.nick':      'Կերպարի անունը (Nickname)',
  'reg.email':     'Էլ. փոստ',
  'reg.pass':      'Գաղտնաբառ',
  'reg.pass2':     'Կրկնեք գաղտնաբառը',
  'reg.submit':    'Գրանցվել ➤',
  'reg.hasAcc':    'Արդեն ունե՞ք հաշիվ:',
  'reg.loginLink': 'Մուտք գործեք',
  'garage.slots':  'Տեղեր',

  // ── Extras (Weapons, Cars, Garage specific text) ─────
  'weapon.knife': 'Դանակ',
  'weapon.bat': 'Բիտա',
  'weapon.glock': 'Ատրճանակ Գլոկ Տասնինը',
  'weapon.ak47': 'Ավտոմատ Կալաշնիկով Կառասուն Յոտ',
  'weapon.shotgun': 'Որսորդական հրացան',
  'weapon.m4': 'Գրոհային Հրաճակ Էմ Չորս Ա Մեկ',
  'weapon.sniper': 'Դիպուկահար հրացան',
  'weapon.tommy': 'Թոմսոն գան',
  'armor.leather': 'Կաշվե բաճկոն',
  'armor.kevlar': 'Կեվլարային Բածկոն',
  'armor.heavy': 'Ծանր զրահ',
  'car.speed': 'Արագություն՝',
  'car.power': 'Հզորություն՝',
  'car.price': 'Գինը՝',
  'car.sellPrice': 'Վաճառքի գինը՝',
  'car.repair': 'Վերանորոգել',
  'car.drive': 'Վարել',
  'garage.empty': 'Ավտոտնակը դատարկ է',
  'dealer.empty': 'Հասանելի մեքենաներ չկան',

  // ── Mobile Drawer sections ────────────────────────────
  'drawer.title':        'Բոլոր բաժինները',
  'drawer.main':         'Հիմնական',
  'drawer.finance':      'Ֆինանսներ և Գույք',
  'drawer.underground':  'Ընդհատակ',
  'drawer.extra':        'Հավելյալ',

  // ── Mobile Drawer cell labels ─────────────────────────
  'mob.cars':        'Ավտոառևանգում',
  'mob.garage':      'Ավտոտնակ',
  'mob.inventory':   'Զինանոց',
  'mob.dealership':  'Ավտոսրահ',
  'mob.business':    'Բիզնես',
  'mob.crypto':      'Կրիպտո',
  'mob.estate':      'Անշարժ գույք',
  'mob.stash':       'Թաքստոց',
  'mob.prison':      'Բանտ',
  'mob.hospital':    'Հիվանդանոց',
  'mob.training':    'Մարզում',
  'mob.reputation':  'Հեղինակություն',
  'mob.families':    'Ընտանիքներ',
  'mob.friends':     'Ընկերներ',
  'mob.quests':      'Օրվա առաջադրանքներ',
  'mob.daynight':    'Գիշեր/Վլոր',
  'mob.events':      'Իրադարզներ',
  'mob.stats':       'Վիչակագր.',
  'mob.leaderboard': 'Առաջատարներ',
  'mob.profile':     'Իմ էջը',


  // ── Edit Profile Modal ────────────────────────────────
  'modal.editProfile':    '✏️ Խմբագրել Պրոֆիլը',
  'modal.avatarBgColor':  'Ավատարի ֆոնի գույն',
  'modal.avatarClick':    'Սեղմեք ավատարի վրա՝ նկարը փոխելու համար',
  'modal.nickLabel':      'Մականուն (Nickname)',
  'modal.nickPh':         'Ձեր մականունը',
  'modal.bioLabel':       'Կարճ կենսագրություն',
  'modal.bioPh':          'Ինչ-որ բան ձեր մասին...',
  'modal.cancel':         'Չեղարկել',
  'modal.save':           'Պահպանել',

  // ── Friend Profile Modal ──────────────────────────────
  'modal.friendProfile':  '👤 Ընկերոջ պրոֆիլ',

  // ── Search & Friends ──────────────────────────────────
  'friends.searching': 'Որոնվում ե...',
  'friends.notFound':     'Ոch ok chi gtnvel',
  'friends.results':      'Ardyunkner',
  'friends.removeTip':    'Հեռացնել ընկերոջը',
  'friends.online':       'Առցանց',
  'friends.accept':       'Əndunel',
  'friends.decline': 'Մերժել',

  // ── Chat ──────────────────────────────────────────────
  'chat.loading':         'Բեռնվում է...',
  'chat.noMessages':      'Հաղորդագրություններ չկան. Գրել առաջին!',
  'chat.offline':         'Անցանց',

  // ── Auth errors ───────────────────────────────────────
  'auth.err.nameShort':   'Անունը պետք է լինի առնվազն 2 նիշ',
  'auth.err.emailInvalid':'Մուտքագրեք վավեր էլ. հասցե',
  'auth.err.passShort':   'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ',
  'auth.err.passMatch':   'Գաղտնաբառերը չեն համընկնում',
  'auth.err.fillAll':     'Լրացրեք բոլոր դաշտերը',
  'auth.err.emailTaken':  'Այս էլ. հասցեն արդեն գրանցված է',
  'auth.err.invalidCreds':'Սխալ էլ. հասցե կամ գաղտնաբառ',
  'auth.ok.registered':   'Գրանցումը հաջողվեց! Բարի գալուստ, ',
  'auth.ok.welcome':      'Բարի գալուստ, ',
  'btn.registering':      'Գրանցում...',
  'btn.logging_in':       'Մուտք...',
  'btn.register':         'Գրանցվել ➤',
  'btn.login':            'Մուտք ➤',

  // ── Quests ────────────────────────────────────────────
  'quest.1': '🎯 Կատարել Երեք Հանծագործուտյուն',
  'quest.2': '🚗 Գոհանել Մեկ Մեկենա',
  'quest.3': '💰 Վաստակել $1500 Փասիվ Եկամուտ',
  'quest.reward': 'Ստանել Փարգեւ Հիմա',
  'quest.done': '✅ Կատարվալ ե',
  'quest.claim':     '🎁 Ստանալ ${reward}',
  'quest.claimed':   '📜 Առաջադրանքը կատարված է: +${reward}',
  'notif.quests_refresh': '📋 Նոր Արաջադրանկներ:',

  // ── Events ────────────────────────────────────────────
  'event.rain':      '🌧️ Անդզրևել. Հանծագործուտյունների րիսկy նվազել ե.',
  'event.crypto':    '📈 Կրիպտո-շուկա Ակտիվան. Գների տատանումներ.',
  'event.gift':      '🎁 Քեզ Չանաչեծ Փողոսում Որպես «Լավ տգհա». +$200',
  'event.raid':      '👮 Ոստիկակական ՜եյդ շրջանում.',
  'notif.arrested2': '👮 ՜եյդ: Բրինագրված $500',

  // ── Map ───────────────────────────────────────────────
  'map.noBusinesses': 'Բիզնես դեր չունեկ:',
  'map.openBiz':      'Բացել →',
  'map.playerLabel':  'Դու',
  'map.legend.bank': '🏦 Բանկ',
  'map.legend.prison': '🔒 Բանտ',
  'map.legend.hospital':   '🏥 Hivandanots',
  'map.legend.casino': '🎰 Կազինո',
  'map.legend.bizmarket':  '🏢 Շուկա',

  // ── Dealership filter dropdowns & render strings ──────
  'dealer.filterAll': 'Բոլոր Թեսակներ',
  'dealer.filterSedan': 'Սեդան',
  'dealer.filterSuv':    'Amenagnats',
  'dealer.filterSport': 'Սպորտային',
  'dealer.sortDefault':  'Սովորական',
  'dealer.sortAsc':      'Գինը ↑',
  'dealer.sortDesc':     'Գինը ↓',
  'dealer.noFound':      'Ոչ մի Մեկենա Չգտնվել',
  'dealer.badge.new': 'Նոր',
  'dealer.cond':         'Վիչակ.:',
  'dealer.viewBtn':      'Դիտել',
  'dealer.closeBtn':     'Կագել',
  'dealer.buyBtn':       'Գնել',
  'dealer.bought':       '🚗 Գնեծիկ:',

  // ── Dealer — Car types & Spec abbreviations ───────────
  'dealer.type.sport': 'Սպորտային',
  'dealer.type.sedan': 'Սեդան',
  'dealer.type.suv':      'Ամենագնած',
  'dealer.spec.hp':       'dz.u.',
  'dealer.spec.kmh':      'km/zh',
  'dealer.spec.sec':      'v',
  'dealer.spec.topSpeed': 'Բարնագույն.',
  'dealer.spec.auto6':    '6-f. avt.',
  'dealer.spec.auto8':    '8-f. avt.',
  'dealer.spec.mech6':    '6-f. mekh.',
  'dealer.spec.fullPkg':  'F. art. l.',
  'dealer.spec.carbon':   'Carbon khat.',
  'dealer.spec.seats':    'տեխ',
  'dealer.spec.newKm':    '0 կմ',
  'dealer.spec.km':       'կմ',
  'dealer.spec.cond':     'ՄԽ.',

  // ── Estate ───────────────────────────────────────────
  'estate.filterAll':       'Bolor tesaknery',
  'estate.type.house':      'Թուն',
  'estate.type.land':       'Հողի',
  'estate.type.garage':     'Ավտոտնակ',
  'estate.title.apartment': 'Բնակարան',
  'estate.title.land':      'Հողատ',
  'estate.title.garage':    'Ավտոտնակ',
  'estate.title.location':  '(Կենտ/Շրջ.)',
  'estate.desc.apartment':  'Գերազանչ Բնակարան վարդի Համար.',
  'estate.desc.land':       'Բերկատու հողատարանկ.',
  'estate.desc.garage':     'Կարե, Ապախով Ավտոտնակ.',
  'estate.notFound':        'Չգտնվեծ',
  'estate.rentPer10s':      '/10:',
  'estate.viewBtn':         'Դիտել',
  'estate.empty':           'Գոյկ Չկա',
  'estate.unrent':          'Հանել Վարդզակալությունիծ',
  'estate.rent':            'Թալ Վարդզով',
  'estate.typeLabel':       'Թեսակ:',
  'estate.incomeLabel':     'Եկամուտ (Վարդզ):',

  // ── Garage UI ─────────────────────────────────────────
  'garage.marketPrice': 'շուկայական գին:',
  'garage.crimeCar':    '✅ Հանծ. Մեկենա',
  'garage.makeCrime':   '🚔 Դարծել Հանծ.',

  // ── Sold / Bought notifications ───────────────────────
  'notif.sold':   'Վաչարվեծ',
  'notif.bought': '🚗 Գնեծիկ:',

  // ── Map ──────────────────────────────────────────────
  'map.desc':            'Կագի վրա տեսնում ես.',

  // ── Reputation ───────────────────────────────────────
  'rep.level':           'Մակարդակ:',

  // ── Rank modal ────────────────────────────────────────
  'rank.title':    '⭐ Կոչումներ',
  'rank.current':  'Nerkain:',
  'rank.progress': 'Arajnthats',
  'rank.all':      'Բոլոր Կոչումներ',
  'rank.max':      'Փորկի Միավորներ (Ավ.)',

  // ── Messages ─────────────────────────────────────────
  'msg.header':       'Haghordagroutyounner',
  'msg.loadingList':  'Բերնվում ե...',
  'msg.selectFriend': 'Ենտրել Յնկերո Գրելու Համար',
  'msg.inputPh':      'Grel haghordagroutyoun...',
  'msg.sendTitle':    'Ugarel',

  // ── Families render ───────────────────────────────────
  'fam.invite.hdr':      '🏰 Յնտանիքի Հրավիր',
  'fam.invite.body':     ' ընտանիքը հրավիրում է քեզ (Բոսս՝ ',
  'fam.invite.accept':   '✓ Կամել',
  'fam.invite.decline':  '✕ Մերժել',
  'fam.create.title':    'Ստորել Երկրորդ Յնտանիք',
  'fam.create.req':      'Պահանջվում է <b style="color:var(--accent);">Մաֆիոզ</b> + <b style="color:var(--ok);">$250,000</b>',
  'fam.create.namePh':   'Yntaniqi anun...',
  'fam.create.colorLbl': 'Գույն:',
  'fam.create.btn':      '🏰 Հիմնել Նոր Յնտանիք',
  'fam.create.creating': 'Ստեգհծվում ե...',
  'fam.create.curRank':  'Ներկային Կոչ: ',
  'fam.power':           'Ուժ',
  'fam.mem.count':       'ԱՆԴԱՄՆԵՐ',
  'fam.realMembers.hdr': 'Իրավական Անդամներ',
  'fam.noMembers':       'Իրավական Անդամներ Չկա',
  'fam.kick':            'Հանել',
  'fam.inv.form.hdr':    '📨 Հրավել Յնկեր',
  'fam.inv.form.ph':     'AM123456 hashvehamar...',
  'fam.inv.form.btn':    '📨 Հրավել',
  'fam.upgrade.btn':     '💪 Ուժ +10 ($50,000)',
  'fam.recruit.btn':     '👤 Անդամ +1 ($10,000)',
  'fam.leave.btn':       '🚪 Դուրս Գալ',
  'fam.disband.btn':     '💀 Ներասնել Յնտանիք',
  'fam.family.suffix':   ' Ընտանիք',
  'fam.nameErr':         'Մատունեք Յնտանիքը Անունը',
  'fam.accErr':          'Մատունեք AM Հաշվեհամար',

  // ── Missing notification keys ─────────────────────────
  'notif.garage_full2':  'Ավտոտնակy Լիկն ե',
  'notif.no_money':      'Անբավար Միջոծներ',
  'notif.insufficient':  'Բանկային Հաշվին Անբավար Միջոծներ',

  // ── New keys (added) ──────────────────────────────────
  'mob.settings': 'Կարգավորումներ',
  'mob.logout': 'Դուրս Գալ Հաշվին',
  'mob.more': 'Ավելին',
  'section.explore': 'Հետախուզում',
  'log.title': 'Մատյան',
  'btn.close': 'Կագել',
  'dealer.modal.title': 'Avtosrakhy',
  'estate.modal.title': 'Anshirzh gouyk',
  'fp.remove': 'Հերածնել',
  'map.legend.you': 'Դու',
  'map.legend.strip': 'Ստրիպ Ակումբ',
  'map.legend.ammunation': 'զենկի խանութ',
  'map.legend.airport': 'Ոդանավակայան',
  'biz.max_level': 'Մակսիմում',
  'biz.per_10s': '/10',
  'inv.already_owned': '✅ Գնված',
  'inv.rank_required': '🔒 Պահանջվում է՝ {rank}',
  'btn.sell_short': 'Վաչալ.',
  'leaderboard.you': 'Դու (Հաղթոգ)',
  'chat.online': 'Օնլայն',
  'map.label.hospital': 'Հիվանդանոծ',
  'map.label.prison': 'Բանտ',
  'map.label.bank': 'Բանկ',
  'map.label.casino': 'Կազինո',
  'map.label.ammunation': 'զենկի խանութ',
  'map.label.garage': 'Ավտոտնակ',
  'map.label.airport': 'Ոդանավակայան',
  'map.label.gym': 'Մարզասրախ',
  'map.label.police': 'Ոստիկանություն',
  'map.label.strip': 'Ստրիպ Ակումբ',

  // ── Extra coverage keys ─────────────────────────────────────
  'confirm.logout':         'Ելեր Հաշվին?',
  'confirm.delete':         '⚠️ Դզնդժել Դզեր ՓրոՖիլը?',
  'confirm.reset':          '🗑️ Ինչել Ադջ Արաջնթան?',
  'confirm.remove_friend':  'Հերածնել Յնկերոգն?',
  'fam.boss_label':         'Ղեկավար:',
  'fam.terr_label':         'Տարածք:',
  'npc.family.suffix':      ' Ընտանիք',
  'biz.none':               'Բիզնես Չկա',
  'chat.empty_preview':     'Հագորդագրություն Չկա',
  'chat.no_friends':        'Ավլածել Յնկերներ Նախորդ!',
  'chat.contacts_err':      'Կապի Չեն Հաստատվել.',
  'chat.just_now':          'Հմճապել',
  'friend.removed':         'Ընկերը հեռացված է',
  'mob.map':                'Քաղակարդ',
  'mob.daynight':           'Gish./Tsered',
  'mob.events':             'Irad-ner',
  'mob.stats':              'Vichakagr.',
  'mob.dd.profile':         'Իմ ՓրոՖիլը',
  'mob.dd.settings':        'Կարգավորումներ',
  'mob.drawer.hdr':         'Բոլոր Բաժինները',
  'slots.sorry':            'Ալաս Հալ, կրկնեկ',
  'daily.activity':         'Որվական Բոնուս +$100',
  'preloader.s1':           'Բերնդում...',
  'preloader.s2':           'Կարգը Փրաստվել...',
  'preloader.s3':           'Փատրաստ ե',
  'confirm.leave_family':   'Լկվել Յնտանիքիծ?',
  'main.estate.unit':       'օբջ.',
  'friends.loading':        'Որոնվում ե Համակարգում',
  'friends.connError':  'Կապին Կնալություն Չե Հաստատվել.',
  'friends.emptyList':      'Անկերների ծանկy դատարկ ե. Գտեկ Ավլածեկ.',
  'notif.fam_created':      '🏰 Յնտանիքը Հաջողությամբ Հիմնադրվեծ.',
  'notif.fam_power_up':     '💪 Յնտանիքը Ուժը Դարծալ.',
  'notif.fam_new_member':   '👤 Նոր Անդամ Միածալ. Ենդ Հանուր:',
  'notif.fam_kicked':       '👤 Անդամը Հերածվեծ Յնտանիքիծ.',

  // ── Weapons & Armor ───────────────────────────────────
  'weapon.knife.name': '🔪 Դանակ',
  'weapon.knife.desc': 'Փողոցային հիմնական զենք։ Բարձրացնում է հաջողության հավանականությունը 5%-ով։',
  'weapon.pistol.name': '🔫 Ատրճանակ (Մակարով)',
  'weapon.pistol.desc': 'Ստանդարտ ատրճանակ։ Տալիս է 10% հաջողություն և կանխում է 5 HP կորուստ։',
  'weapon.revolver.name': '🔫 ՜եվոլվեր',
  'weapon.revolver.desc': 'Ծանր ռևոլվեր։ Տալիս է 15% հաջողություն և կանխում է 8 HP կորուստ։',
  'weapon.shotgun.name': '💥 Հրացան (Որսորդական)',
  'weapon.shotgun.desc': 'Կարճ հեռավորության հզոր զենք։ Տալիս է 18% հաջողություն և կանխում է 12 HP կորուստ։',
  'weapon.thomson.name': '🔫 Թոմփսոն (Ինքնաձիգ)',
  'weapon.thomson.desc': 'Ինքնաձիգ։ Տալիս է 25% հաջողություն և կանխում է 18 HP կորուստ։ Պահանջվում է «Կապո» կոչում։',
  'weapon.ak47.name': '⚙️ ԱԿ-47 (Կալաշնիկով)',
  'weapon.ak47.desc': 'Ծանր մարտական զենք։ Տալիս է 32% հաջողություն և կանխում է 25 HP կորուստ։ Պահանջվում է «Դոն» կոչում։',

  'armor.jacket.name': '🧥 Կաշվե Բաճկոն',
  'armor.jacket.desc': 'Հիմնական պաշտպանություն։ Կանխում է 8 HP կորուստ հարձակման ժամանակ։',
  'armor.vest.name': '🦺 Կեվլարյան Ժիլետ',
  'armor.vest.desc': 'Միջին պաշտպանություն։ Կանխում է 20 HP կորուստ։ Պահանջվում է «Ավազակ» կոչում։',
  'armor.heavy.name': '🛡️ Ծանր Մարտական Զրահ',
  'armor.heavy.desc': 'Առավելագույն պաշտպանություն։ Կանխում է 35 HP կորուստ։ Պահանջվում է «Մաֆիոզ» կոչում։',

  // ── Territory keys ────────────────────────────────────
  'fam.terr.north':  'Հյուսիսային Շրջան',
  'fam.terr.center': 'Կենտրոնական Շրջան',
  'fam.terr.east':   'Արևելյան Շրջան',
  'fam.terr.west':   'Արևմտյան Շրջան',
  'fam.terr.south':  'Հարավային Շրջան',

  // ── Quest desc keys (for dynamic re-translation) ──────
  'quest.1.desc': '🎯 Կատարել Երեք Հանծագործուտյուն',
  'quest.2.desc': '🚗 Գոհանել Մեկ Մեկենա',
  'quest.3.desc': '💰 Վաստակել $1500 Փասիվ Եկամուտ',

  // ── Missing keys (TXT audit) ─────────────────────────────────────────────
  'ui.logout':       'Դուրս Գալ Հաշվիծ',
  'ui.profile':      'Անժնական Եջ',
  'rank.newbie': 'Սկսնակ',
  'rank.boss': 'Ղեկավար',
  'rank.godfather': 'Կնկահայր',
  'fam.create_btn':  'Himnel nor yntaniq',
  'fam.creating':    'Յնտանիքը Ստեգհծվում ե, Սպարեկ',
  'fam.invite':      'Յնտանեկաին Հրավիր',
  'fam.accept':      'Ենդունել Հրավերը',
  'fam.decline':     'Մերժել Հրավերը',
  'fam.disband':     'Վծլածել Յնտանիքը Ամբողդժությամբ',
  'biz.bank_name':   'Մուտկագրեք Բանկի Անունը',
  'biz.taxi_park':   'Թակսի Փարկ Կարավարում',
  'biz.vip_status':  'Խատուկ Կարգավիչակ',
  'biz.income':      'Փասիվ Եկամուտ',
  'board.title':     'Արաջատարների Ագհուսակ',
  'board.points':    'Վարկանիշային Միավորներ',
  'quest.title':     'Որվա Արջադրանկներ',
  'quest.task1': 'Կատարել Երեք Հանծագործուտյուն',
  'quest.task2': 'Գոհանել Մեկ Մեկենա',
  'friends.search':  'Որոնել Յնկերներին',
  'friends.loading': 'Որոնվում ե Համակարգում',
  'friends.empty':   'Ոչ ոկ Չի Գտնվել Թվայլներում',
  'chat.write':      'Գրել Հագորդագրություն',
  'ui.exp_points':   'Փորկի Միավորներ',
  'ui.hp_units':     'Արողջության Միավորներ',
  'bank.deposited':  'դեպոզիտ Բանկում',
  'bank.withdrawn':  'Կանխագրված Բանկիծ',

};

// ═══════════════════════════════════════════════════════
//   RANK NAME TRANSLATIONS
// ═══════════════════════════════════════════════════════
const RANK_NAMES_RU = {
  'Դատարկապորտ': 'Бродяга',
  'Գրպանահատ': 'Карманник',
  'Ավազակ': 'Бандит',
  'Մաֆիոզ': 'Мафиози',
  'Կապո': 'Капо',
  'Դոն': 'Дон',
  'Կնքահայր': 'Крёстный Отец'
};

function getRankName(name) {
  if (!name) return name || '';
  if (getLang() === 'ru') return RANK_NAMES_RU[name] || name;
  return name;
}

// ═══════════════════════════════════════════════════════
//   PUBLIC API (no changes needed)
// ═══════════════════════════════════════════════════════
function getLang() {
  return localStorage.getItem('cnLang') || 'hy';
}

function t(key) {
  const lang = getLang();
  const dict = lang === 'ru' ? RU : HY;
  return dict[key] !== undefined ? dict[key] : key;
}

function setLang(lang) {
  localStorage.setItem('cnLang', lang);
  applyLang();
}

function applyLang() {
  const lang = getLang();
  const dict = lang === 'ru' ? RU : HY;

  // 1. data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.dataset.i18nOrig === undefined) {
      el.dataset.i18nOrig = el.textContent.trim();
    }
    const key = el.dataset.i18n;
    el.textContent = (dict && dict[key] !== undefined) ? dict[key] : el.dataset.i18nOrig;
  });

  // 2. data-i18n-text
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

  // 3. data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    if (el.dataset.i18nPhOrig === undefined) el.dataset.i18nPhOrig = el.placeholder;
    const key = el.dataset.i18nPh;
    el.placeholder = (dict && dict[key] !== undefined) ? dict[key] : el.dataset.i18nPhOrig;
  });

  // 4. lang toggle button
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    btn.textContent = lang === 'ru' ? '🇷🇺 РУ' : '🇦🇲 ՀՅ';
    btn.title = lang === 'ru' ? 'Переключить язык' : 'Փոխել լեզուն';
  }

  // 5. lang selector buttons
  document.querySelectorAll('.cn-lang-btn').forEach(b => {
    b.classList.toggle('cn-lang-active', b.dataset.lang === lang);
  });

  // 6. html lang attribute
  document.documentElement.lang = lang === 'hy' ? 'hy' : 'ru';

  // 7. Dealer filter dropdowns (value attrs stay Armenian for filter logic)
  const _dft = document.getElementById('dealer-filter-type');
  if (_dft && _dft.options) {
    const _o = _dft.options;
    if (_o[0]) _o[0].text = t('dealer.filterAll');
    if (_o[1]) _o[1].text = t('dealer.filterSedan');
    if (_o[2]) _o[2].text = t('dealer.filterSuv');
    if (_o[3]) _o[3].text = t('dealer.filterSport');
  }
  const _dsp = document.getElementById('dealer-sort-price');
  if (_dsp && _dsp.options) {
    const _s = _dsp.options;
    if (_s[0]) _s[0].text = t('dealer.sortDefault');
    if (_s[1]) _s[1].text = t('dealer.sortAsc');
    if (_s[2]) _s[2].text = t('dealer.sortDesc');
  }

  // 8. Estate filter type dropdown
  const _eftd = document.getElementById('filter-type');
  if (_eftd && _eftd.options) {
    const _ef = _eftd.options;
    if (_ef[0]) _ef[0].text = t('estate.filterAll');
    if (_ef[1]) _ef[1].text = t('estate.type.house');
    if (_ef[2]) _ef[2].text = t('estate.type.land');
    if (_ef[3]) _ef[3].text = t('estate.type.garage');
  }

  // 9. Rank name display refresh (without waiting for next updateUI call)
  if (typeof player !== 'undefined' && player && player.rank) {
    const _rn = getRankName(player.rank);
    ['rankDisplay', 'sidebar-rank-val'].forEach(function(id) {
      const el = document.getElementById(id);
      if (el) { el.innerText = _rn; if (typeof _prev !== 'undefined') _prev[id] = _rn; }
    });
    const _mwr = document.getElementById('main-welcome-rank');
    if (_mwr) { _mwr.innerText = '⭐ ' + _rn; if (typeof _prev !== 'undefined') _prev['main-welcome-rank'] = '⭐ ' + _rn; }
    const _phr = document.getElementById('profile-hero-rank');
    if (_phr) _phr.textContent = _rn;
    const _ar = document.getElementById('acc-rank');
    if (_ar) _ar.textContent = _rn;
    const _mobRank = document.getElementById('mob-dd-rank');
    if (_mobRank) _mobRank.textContent = _rn;
  }

  // 9. Прямая привязка по существующим ID/классам (без data-i18n)
  applyLangBySelectors();
}

// =====================================================
//  ПРЯМАЯ ПРИВЯЗКА ПО ID / КЛАССАМ (без data-i18n)
//  Сюда добавляются селекторы, которые УЖЕ есть в HTML —
//  никаких новых атрибутов вешать не нужно.
//
//  Формат:
//    'CSS-селектор': 'ключ.словаря'
//  Если нужно не innerHTML, а другое свойство (например,
//  placeholder для <input>):
//    'CSS-селектор': { key: 'ключ.словаря', prop: 'placeholder' }
// =====================================================
const SELECTOR_MAP = {
  // ── Mobile Drawer ──────────────────────────────────────────────
  '#mob-more-drawer .mob-drawer-hdr > span':                         'drawer.title',

  '#mob-more-drawer .mob-drawer-section:nth-of-type(1)':             'drawer.main',
  '#mob-more-drawer .mob-drawer-section:nth-of-type(2)':             'drawer.finance',
  '#mob-more-drawer .mob-drawer-section:nth-of-type(3)':             'drawer.underground',
  '#mob-more-drawer .mob-drawer-section:nth-of-type(4)':             'drawer.extra',

  '#mob-more-drawer .mob-drawer-grid:nth-of-type(1) .mob-drawer-cell:nth-child(1) .mob-dc-label': 'mob.cars',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(1) .mob-drawer-cell:nth-child(2) .mob-dc-label': 'mob.garage',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(1) .mob-drawer-cell:nth-child(3) .mob-dc-label': 'mob.inventory',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(1) .mob-drawer-cell:nth-child(4) .mob-dc-label': 'mob.dealership',

  '#mob-more-drawer .mob-drawer-grid:nth-of-type(2) .mob-drawer-cell:nth-child(1) .mob-dc-label': 'mob.business',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(2) .mob-drawer-cell:nth-child(2) .mob-dc-label': 'mob.crypto',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(2) .mob-drawer-cell:nth-child(3) .mob-dc-label': 'mob.estate',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(2) .mob-drawer-cell:nth-child(4) .mob-dc-label': 'mob.stash',

  '#mob-more-drawer .mob-drawer-grid:nth-of-type(3) .mob-drawer-cell:nth-child(1) .mob-dc-label': 'mob.prison',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(3) .mob-drawer-cell:nth-child(2) .mob-dc-label': 'mob.hospital',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(3) .mob-drawer-cell:nth-child(3) .mob-dc-label': 'mob.training',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(3) .mob-drawer-cell:nth-child(4) .mob-dc-label': 'mob.reputation',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(3) .mob-drawer-cell:nth-child(5) .mob-dc-label': 'mob.families',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(3) .mob-drawer-cell:nth-child(6) .mob-dc-label': 'mob.friends',

  '#mob-more-drawer .mob-drawer-grid:nth-of-type(4) .mob-drawer-cell:nth-child(1) .mob-dc-label': 'mob.quests',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(4) .mob-drawer-cell:nth-child(2) .mob-dc-label': 'mob.daynight',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(4) .mob-drawer-cell:nth-child(3) .mob-dc-label': 'mob.events',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(4) .mob-drawer-cell:nth-child(4) .mob-dc-label': 'mob.stats',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(4) .mob-drawer-cell:nth-child(5) .mob-dc-label': 'mob.leaderboard',
  '#mob-more-drawer .mob-drawer-grid:nth-of-type(4) .mob-drawer-cell:nth-child(6) .mob-dc-label': 'mob.profile',

  // ── Edit Profile Modal ─────────────────────────────────────────
  '#edit-profile-modal .modal-header h2':                            'modal.editProfile',
  '#edit-profile-modal .modal-body > div > div > div:first-child > div:first-child': 'modal.avatarBgColor',
  '#edit-profile-modal .modal-body > div > div[style*="font-size:11px"]':            'modal.avatarClick',
  '#edit-profile-modal label:nth-of-type(1)':                        'modal.nickLabel',
  '#edit-profile-modal label:nth-of-type(2)':                        'modal.bioLabel',
  '#edit-name-input':   { key: 'modal.nickPh',  prop: 'placeholder' },
  '#edit-bio-input':    { key: 'modal.bioPh',   prop: 'placeholder' },
  '#edit-profile-modal .modal-footer button:first-child':            'modal.cancel',
  '#edit-profile-modal .modal-footer button:last-child':             'modal.save',

  // ── Friend Profile Modal title ─────────────────────────────────
  '#friend-profile-modal .modal-header h2':                          'modal.friendProfile',
};

function applyLangBySelectors(map = SELECTOR_MAP) {
  const lang = getLang();
  const dict = lang === 'ru' ? RU : HY;

  Object.entries(map).forEach(([selector, entry]) => {
    const key  = typeof entry === 'string' ? entry : entry.key;
    const prop = typeof entry === 'string' ? 'innerHTML' : (entry.prop || 'innerHTML');
    const value = dict[key];
    if (value === undefined) return; // такого ключа нет — элемент не трогаем

    document.querySelectorAll(selector).forEach(el => {
      if (prop === 'placeholder') el.placeholder = value;
      else el[prop] = value;
    });
  });
}

// Auto-apply on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLang);
} else {
  setTimeout(applyLang, 0);
}

// Language toggle (hy ↔ ru)
function toggleLanguage() {
  setLang(getLang() === 'hy' ? 'ru' : 'hy');
}