// =====================================================
//  i18n.js — Cosa Nostra · Language System v2.0
//  Languages: hy (Հայերեն) · ru (Русский)
//  All keys are synchronized.
// =====================================================

const RU = {
  // ── Sidebar navigation ─────────────────────────────
  'menu.main':         'Главная',
  'menu.crimes':       'Преступления',
  'menu.cars':         'Угон автомобилей',
  'menu.garage':       'Гараж',
  'menu.inventory':    'Арсенал',
  'menu.dealership':   'Автосалон',
  'menu.bank':         'Банк',
  'menu.business':     'Бизнес',
  'menu.casino':       'Казино',
  'menu.crypto':       'Криптовалюта',
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
  'menu.stats':         'Статистика',
  'menu.leaderboard':  'Лидерборд',
  'menu.settings':     'Настройки',
  'menu.profile':      'Мой профиль',
  'menu.map':          'Карта города',

  // ── Page headings (h1 / h2) ─────────────────────────
  'page.main':        'Главная',
  'page.crimes':      'Преступления',
  'page.cars':        'Угон автомобилей',
  'page.garage':      'Гараж',
  'page.inventory':   'Арсенал',
  'page.dealership':  'Автосалон',
  'page.bank':        'Центральный Банк',
  'page.business':    'Бизнес и Отмывание денег',
  'page.prison':      'Тюрьма',
  'page.casino':      'Казино',
  'page.crypto':      'Криптовалюта',
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
  'sidebar.xp':   'Опыт',
  'daily.label':  'Ежедневный бонус',
  'daily.claim':  'Получить сто долларов',
  'daily.claimed':'Получен ✓',

  // ── Topbar ──────────────────────────────────────────
  'topbar.log':   'Журнал',
  'topbar.sound': 'Звук',
  'topbar.theme': 'Тема',
  'topbar.lang':  '🇷🇺 РУ',
  'topbar.energy':'⚡ Энергия',
  'topbar.hp':    '❤️ Здоровье',

  // ── Buttons ─────────────────────────────────────────
  'btn.deposit':      'Внести',
  'btn.withdraw':     'Снять',
  'btn.transfer':     'Перевести',
  'btn.buy':          'Купить',
  'btn.sell':         'Продать',
  'btn.launder':      '🧹 Отмыть (семьдесят процентов)',
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
  'btn.red':          '🔴 КРАСНОЕ (вдвое)',
  'btn.black':        '⚫ ЧЁРНОЕ (вдвое)',
  'btn.bribe':        '💰 Взятка (одна тысяча долларов)',
  'btn.escape':       '🚀 Побег (две тысячи пятьсот долларов)',
  'btn.logout':       'Выход',
  'btn.edit':         'Редактировать',
  'btn.deleteProfile':'Удалить профиль',
  'btn.expand':       'Расширить (две тысячи пятьсот долларов)',
  'btn.expand2':      'Расширить (сто тысяч долларов)',
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
  'bank.accPh':    'Номер счёта (РУ123456)',
  'bank.amtPh':    'Сумма...',
  'bank.loanPh':   'Сумма (Максимум пятьдесят тысяч долларов)',

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
  'biz.restaurant.desc': 'Чистый и легальный бизнес. Низкий, но стабильный доход. Максимальный уровень: 15',
  'biz.casino':       'Подпольное Казино',
  'biz.casino.desc':  'Только для мафии. Приносит большой доход, но требует связей.',
  'biz.arms':         'Оружейный Завод',
  'biz.arms.desc':    'Тяжёлый, опасный, но невероятно прибыльный теневой бизнес.',
  'biz.strip':        'Стриптиз Клуб 🔞',
  'biz.strip.desc':   'Теневой досуг, грязные деньги. Репутация: 40+ | Доход: в виде грязных денег. Максимальный уровень: 15',
  'biz.launderDesc':  'Доходы стриптиз-клуба и оружейного завода — «грязные». Через фонд их можно отмыть — тридцать процентов уйдёт на «благотворительность».',
  'biz.price75':      'Стоимость: семьдесят пять тысяч долларов',
  'biz.price150':     'Стоимость: сто пятьдесят тысяч долларов',
  'biz.price200':     'Стоимость: двести тысяч долларов',
  'biz.price300':     'Стоимость: триста тысяч долларов',
  'biz.namePh':       'Название...',
  'biz.casinoNamePh': 'Название казино...',
  'biz.clubNamePh':   'Название клуба...',
  'biz.launderPh':    'Отмыть ($)...',
  'biz.max_level':    'Максимум',
  'biz.level':        'Уровень',
  'biz.per_10s':      ' за 10 секунд',

  // ── Prison ──────────────────────────────────────────
  'prison.free':    'На свободе',
  'prison.freeSub': 'Вы чисты перед законом (пока что).',
  'prison.locked':  'ВЫ ЗА РЕШЁТКОЙ',
  'prison.bribeTip':'Взятка = сто процентов успех, Побег = пятьдесят процентов и большой риск.',

  // ── Stash ────────────────────────────────────────────
  'stash.stored': 'Хранится',
  'stash.desc':   'Эти деньги защищены от полицейских конфискаций.',
  'stash.inPh':   'Положить ($)...',
  'stash.outPh':  'Достать ($)...',

  // ── Hospital ─────────────────────────────────────────
  'hosp.hp':        'Здоровье:',
  'hosp.light':     'Лёгкое лечение',
  'hosp.lightDesc': 'Восстанавливает двадцать пять единиц здоровья. Полезно при лёгких травмах.',
  'hosp.lightPrice':'Цена: двести долларов',
  'hosp.full':      'Полное восстановление',
  'hosp.fullDesc':  'Полностью восстанавливает здоровье и энергию.',
  'hosp.fullPrice': 'Цена: одна тысяча пятьсот долларов',

  // ── Training ─────────────────────────────────────────
  'train.desc':      'Повысьте ваши максимальные физические и умственные параметры.',
  'train.phys':      'Физическая подготовка',
  'train.physDesc':  '+5 Максимальное здоровье',
  'train.physPrice': 'Цена: пятьсот долларов',
  'train.mental':    'Умственная подготовка',
  'train.mentDesc':  '+5 Максимальная Энергия',
  'train.mentPrice': 'Цена: пятьсот долларов',
  'train.price500':  'Цена: пятьсот долларов',

  // ── Reputation ───────────────────────────────────────
  'rep.desc':     'Ваша репутация в городе. Высокая репутация снижает риск ареста.',
  'rep.donation': 'Благотворительность / Взятка мэрии',
  'rep.donDesc':  'Жертвуя деньги, покупаете молчание города. +5 Репутация',
  'rep.donPrice': 'Стоимость: две тысячи долларов',
  'rep.level':    'Уровень:',

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
  'stats.timeUnit': 'минут',
  'stats.networth': 'Общее состояние',

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
  'families.desc':    'Пять известных мафиозных семей, поделивших город. Достигни звания Мафиози и накопи двести пятьдесят тысяч долларов — создай шестую семью.',
  'friends.title':    'Друзья',
  'friends.incoming': 'Входящие заявки',
  'friends.list':     'Список друзей',
  'friends.requests': 'Входящие заявки',
  'friends.searchPh': 'Введите никнейм...',
  'fp.message':       'Сообщение',

  // ── Crypto ───────────────────────────────────────────
  'crypto.trade':     'Торговля',
  'crypto.portfolio': 'Ваш портфель',
  'crypto.updateNote':'Рынок обновляется каждые пять секунд.',
  'crypto.amtPh':     'Количество',

  // ── Notifications ────────────────────────────────────
  'notif.in_prison':    'Вы в тюрьме',
  'notif.no_energy':    'Недостаточно энергии',
  'notif.no_hp':        'Вы без сознания. Идите в больницу.',
  'notif.unconscious':  'Вы без сознания. Идите в больницу.',
  'notif.garage_full':  'Гараж заполнен',
  'notif.saved':        'Сохранено ✓',
  'notif.loaded':       'Загружено ✓',
  'notif.reset_confirm':'Уверены? Всё будет удалено безвозвратно!',
  'notif.daily_claim':  'Ежедневный бонус сто долларов!',
  'notif.daily_already':'Уже получен сегодня',
  'notif.new_rank':     'Новое звание:',
  'notif.car_stolen':   'Угнан',
  'notif.garage_expand':'Гараж успешно расширен на пять мест!',
  'notif.garage_expanded':'Гараж успешно расширен на пять мест!',
  'notif.need_2500':    'Для расширения гаража требуется две тысячи пятьсот долларов.',
  'notif.get_daily':    'Забрать бонус',
  'notif.daily_received':'Бонус получен',
  'notif.daily_bonus':  'Ежедневный бонус сто долларов!',
  'notif.biz_slot_add': 'Слоты бизнеса успешно расширены на пять мест!',
  'notif.no_100k':      'Для расширения слотов требуется сто тысяч долларов.',
  'notif.slots_full':   'Все слоты бизнеса заняты! Расширьте слоты, чтобы основать новый бизнес.',
  'notif.enter_name':   'Пожалуйста, введите название бизнеса.',
  'notif.no_75k':       'Для основания этого бизнеса требуется семьдесят пять тысяч долларов.',
  'notif.no_150k':      'Для основания этого казино требуется сто пятьдесят тысяч долларов.',
  'notif.no_200k':      'Для основания этого клуба требуется двести тысяч долларов.',
  'notif.no_300k':      'Для основания этого завода требуется триста тысяч долларов.',
  'notif.rep_30':       'Этот бизнес доступен только при репутации тридцать и выше.',
  'notif.rep_40':       'Этот бизнес доступен только при репутации сорок и выше.',
  'notif.rep_50':       'Этот бизнес доступен только при репутации пятьдесят и выше.',
  'notif.no_dirty':     'У вас нет грязных денег для отмывания.',
  'notif.wrong_amount': 'Пожалуйста, введите корректную сумму.',
  'notif.bad_amount':   'Пожалуйста, введите корректную сумму или количество.',
  'notif.only_mafioso': 'Доступно только со звания Мафиози.',
  'notif.already_have':  'У вас уже есть этот предмет.',
  'notif.item_bought':   'Куплено: {item}',
  'notif.item_equipped': 'Экипировано: {item}',
  'notif.item_unequipped':'Снято',
  'notif.item_sold':     'Продано: {item} за ${amount}',
  'notif.arrested':      '🚔 Вы арестованы!',
  'notif.avatar_error':  'Ошибка при обновлении аватара',
  'notif.avatar_updated':'Аватар обновлён ✓',
  'notif.bribe_ok':      'Взятка удалась, вы на свободе!',
  'notif.car_removed':   'Автомобиль снят с преступлений',
  'notif.car_selected':  'Автомобиль выбран для преступлений',
  'notif.cloud_loaded':  'Облачное сохранение загружено ✓',
  'notif.delete_error':  'Ошибка при удалении профиля',
  'notif.error_generic': 'Произошла ошибка',
  'notif.escape_fail':   'Побег не удался! Срок увеличен.',
  'notif.escape_ok':     'Побег удался, вы на свободе!',
  'notif.freed':         'Вы вышли на свободу',
  'notif.friend_added':  'Заявка в друзья принята',
  'notif.friend_declined':'Заявка в друзья отклонена',
  'notif.friend_req_ok': 'Заявка в друзья отправлена',
  'notif.loan_max':      'Максимальный размер кредита — пятьдесят тысяч долларов.',
  'notif.loan_no_cash':  'Недостаточно денег для погашения кредита.',
  'notif.loan_none':     'У вас нет кредита для погашения.',
  'notif.max_bet':       'Максимальная ставка —',
  'notif.no_1000':       'Требуется одна тысяча долларов.',
  'notif.no_2500':       'Требуется две тысячи пятьсот долларов.',
  'notif.no_money5':     'Требуется две тысячи долларов.',
  'notif.profile_updated':'Профиль обновлён ✓',
  'notif.rented':        'Недвижимость сдана в аренду',
  'notif.transfer_bad_acc':'Неверный номер счёта.',
  'notif.transfer_done': 'успешно переведено на счёт',
  'notif.transfer_fail': 'Ошибка перевода',
  'notif.transfer_no_amt':'Введите корректную сумму перевода.',
  'notif.transfer_no_bank':'Недостаточно средств на счету',
  'notif.transfer_self': 'Нельзя перевести деньги самому себе.',
  'notif.unrented':      'Недвижимость снята с аренды',
  'notif.casino_sorry': 'К сожалению, в этот раз не повезло. Попробуйте еще раз!',
  'notif.already_full_hp':'Ваше здоровье уже на максимальном уровне.',
  'notif.train_hp':     'Тренировка прошла успешно! Максимальное здоровье увеличено на пять единиц.',
  'notif.train_en':     'Тренировка прошла успешно! Максимальная энергия увеличена на пять единиц.',
  'notif.rep_max':      'Ваша репутация уже на максимальном уровне.',
  'notif.rep_paid':     'Пожертвование принято! Репутация повысилась на пять единиц.',
  'notif.stash_no':     'В тайнике недостаточно средств для извлечения.',

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
  'auth.newPassPh':   'Пароль (минимум шесть символов)',
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
  'crime.extort.desc': 'Требуй покровительство с местных торговцев. Нужна хорошая репутация.',
  'crime.smuggle.desc':'Незаконная перевозка товаров. Высокая оплата, высокий риск.',
  'crime.bankrob.desc':'Самое опасное и прибыльное дело. Только для опытных.',

  // ── Cars ─────────────────────────────────────────────
  'car.class0':      '🚗 Эконом класс',
  'car.class1':      '🚙 Бизнес и Спорт',
  'car.class0.desc': 'Обычные городские машины. Легко угнать, мало стоят.',
  'car.class1.desc': 'Дорогие автомобили. Сложнее, но прибыльнее.',
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
  'inv.equipped':       '✅ Экипировано',
  'inv.equip':          '🔫 Экипировать',
  'inv.wear':           '🛡️ Надеть',
  'inv.already_owned':  '✅ Куплено',
  'inv.rank_required':  '🔒 Требуется: {rank}',
  'inv.sell':           'Продать',
  'inv.none':           '— Нет —',
  'inv.empty_weapons':  'Оружия нет — купи во вкладке Магазин',
  'inv.empty_armor':    'Брони нет — купи во вкладке Магазин',

  // ── Casino ───────────────────────────────────────────
  'casino.roulette':  'Рулетка',
  'casino.slots':     'Слот Машина',
  'casino.betPh':     'Ставка ($)...',

  // ── Estate / Dealer ──────────────────────────────────
  'estate.myTab':     'Моя Недвижимость',
  'dealer.newTab':    'Новые Машины',
  'dealer.usedTab':   'Отработанные',
  'filter.min':       'Минимальная цена ($)',
  'filter.max':       'Максимальная цена ($)',
  'filter.minShort':  'Минимум ($)',
  'filter.maxShort':  'Максимум ($)',

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
  'login.email':   'Электронная почта',
  'login.pass':    'Пароль',
  'login.submit':  'Войти ➤',
  'login.noAcc':   'Нет аккаунта?',
  'login.register':'Зарегистрируйтесь',
  'reg.title':     'Регистрация',
  'reg.subtitle':  'Cosa Nostra · Создайте персонажа',
  'reg.nick':      'Имя персонажа (Никнейм)',
  'reg.email':     'Электронная почта',
  'reg.pass':      'Пароль',
  'reg.pass2':     'Повторите пароль',
  'reg.submit':    'Зарегистрироваться ➤',
  'reg.hasAcc':    'Уже есть аккаунт?',
  'reg.loginLink': 'Войти',
  'garage.slots':  'Места',

  // ── Extras ───────────────────────────────────────────
  'weapon.knife': 'Нож',
  'weapon.bat': 'Бита',
  'weapon.glock': 'Пистолет Глок Девятнадцать',
  'weapon.ak47': 'Автомат Калашникова Сорок Семь',
  'weapon.shotgun': 'Дробовик',
  'weapon.m4': 'Штурмовая винтовка Эм Четыре А Один',
  'weapon.sniper': 'Снайперская винтовка',
  'weapon.tommy': 'Пистолет-пулемёт Томпсона',
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
  'mob.cars':        'Угон автомобилей',
  'mob.garage':      'Гараж',
  'mob.inventory':   'Арсенал',
  'mob.dealership':  'Автосалон',
  'mob.business':    'Бизнес',
  'mob.crypto':      'Криптовалюта',
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
  'modal.nickLabel':      'Никнейм',
  'profile.nicknameLabel': 'Никнейм',
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
  'friends.online':       'Онлайн',
  'friends.accept':       'Принять',
  'friends.decline':      'Отклонить',

  // ── Chat ──────────────────────────────────────────────
  'chat.loading':         'Загрузка...',
  'chat.noMessages':      'Сообщений нет. Напишите первым!',
  'chat.offline':         'Офлайн',

  // ── Auth errors ───────────────────────────────────────
  'auth.err.nameShort':   'Имя должно быть не менее двух символов',
  'auth.err.emailInvalid':'Введите корректный электронный адрес',
  'auth.err.passShort':   'Пароль должен быть не менее шести символов',
  'auth.err.passMatch':   'Пароли не совпадают',
  'auth.err.fillAll':     'Заполните все поля',
  'auth.err.emailTaken':  'Эта электронная почта уже зарегистрирована',
  'auth.err.invalidCreds':'Неверная электронная почта или пароль',
  'auth.ok.registered':   'Регистрация успешна! Добро пожаловать, ',
  'auth.ok.welcome':      'Добро пожаловать, ',
  'btn.registering':      'Регистрация...',
  'btn.logging_in':       'Вход...',
  'btn.register':         'Зарегистрироваться ➤',
  'btn.login':            'Войти ➤',

  // ── Quests ────────────────────────────────────────────
  'quest.type.crime':   '🎯 Совершить преступлений: {target}',
  'quest.type.car':     '🚗 Угнать автомобилей: {target}',
  'quest.type.earn':    '💰 Заработать наличными: ${target}',
  'quest.type.passive': '🏢 Собрать пассивный доход: ${target}',
  'quest.type.casino':  '🎰 Сыграть в казино раз: {target}',
  'quest.reward':       'Награда',
  'quest.done':         'Выполнено',
  'quest.claim':        'Получить ${reward}',
  'quest.claimed':      '📜 Задание выполнено! Получено $',
  'notif.quests_refresh': '📋 Новые задания на сегодня!',

  // ── Events ────────────────────────────────────────────
  'event.rain':      '🌧️ Сильный дождь. Риск преступлений снизился из-за пассивности полиции.',
  'event.crypto':    '📈 Крипторынок активизировался. Колебания цен.',
  'event.gift':      '🎁 Тебя узнали на улице как хорошего парня! Получено двести долларов.',
  'event.raid':      '👮 Полицейский рейд в районе.',
  'notif.arrested2': '👮 Рейд! Конфисковано пятьсот долларов.',

  // ── Map ───────────────────────────────────────────────
  'map.noBusinesses': 'Бизнесов ещё нет:',
  'map.openBiz':      'Открыть →',
  'map.playerLabel':  'Ты',
  'map.legend.bank':       '🏦 Банк',
  'map.legend.prison':     '🔒 Тюрьма',
  'map.legend.hospital':   '🏥 Больница',
  'map.legend.casino':     '🎰 Казино',
  'map.legend.bizmarket':  '🏢 Рынок',

  // ── Dealership filter dropdowns & render strings ──────
  'dealer.filterAll':    'Все типы',
  'dealer.filterSedan':  'Седан',
  'dealer.filterSuv':    'Внедорожник',
  'dealer.filterSport':  'Спорт',
  'dealer.sortDefault':  'По умолчанию',
  'dealer.sortAsc':      'Цена по возрастанию',
  'dealer.sortDesc':     'Цена по убыванию',
  'dealer.noFound':      'Машин не найдено',
  'dealer.badge.new':    'НОВЫЙ',
  'dealer.cond':         'Состояние:',
  'dealer.viewBtn':      'Подробнее',
  'dealer.closeBtn':     'Закрыть',
  'dealer.buyBtn':       'Купить',
  'dealer.bought':       '🚗 Куплено: ',

  // ── Dealer — Car types & Spec abbreviations ───────────
  'dealer.type.sport':    'Спорт',
  'dealer.type.sedan':    'Седан',
  'dealer.type.suv':      'Внедорожник',
  'dealer.spec.hp':       'лошадиных сил',
  'dealer.spec.kmh':      'километров в час',
  'dealer.spec.sec':      'секунд',
  'dealer.spec.topSpeed': 'Максимальная скорость',
  'dealer.spec.auto6':    '6-ступенчатая автоматическая коробка передач',
  'dealer.spec.auto8':    '8-ступенчатая автоматическая коробка передач',
  'dealer.spec.mech6':    '6-ступенчатая механическая коробка передач',
  'dealer.spec.fullPkg':  'Полная комплектация',
  'dealer.spec.carbon':   'Карбоновые детали',
  'dealer.spec.seats':    'мест',
  'dealer.spec.newKm':    'ноль километров',
  'dealer.spec.km':       'километров',
  'dealer.spec.cond':     'Состояние износа',

  // ── Estate ───────────────────────────────────────────
  'estate.filterAll':       'Все типы',
  'estate.type.house':      'Квартира',
  'estate.type.land':       'Участок',
  'estate.type.garage':     'Гараж',
  'estate.title.apartment': 'Квартира',
  'estate.title.land':      'Участок',
  'estate.title.garage':    'Гараж',
  'estate.title.location':  '(Центр / Район)',
  'estate.desc.apartment':  'Отличная квартира для аренды.',
  'estate.desc.land':       'Плодородный земельный участок.',
  'estate.desc.garage':     'Каменный, надёжный гараж.',
  'estate.notFound':        'Не найдено',
  'estate.rentPer10s':      'Аренда за десять секунд:',
  'estate.viewBtn':         'Просмотр',
  'estate.empty':           'Нет недвижимости',
  'estate.unrent':          'Снять с аренды',
  'estate.rent':            'Сдать в аренду',
  'estate.typeLabel':       'Тип:',
  'estate.incomeLabel':     'Доход от аренды:',

  // ── Garage UI ─────────────────────────────────────────
  'garage.marketPrice': 'Рыночная цена:',
  'garage.crimeCar':    '✅ Участвует в делах',
  'garage.makeCrime':   '🚔 Использовать в делах',

  // ── Sold / Bought notifications ───────────────────────
  'notif.sold':   'Продано за ',
  'notif.bought': '🚗 Куплено:',

  // ── Map ──────────────────────────────────────────────
  'map.desc':            'На карте отображаются ваши районы, бизнесы и ключевые объекты.',

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
  'fam.create.title':    'Создать шестую Семью',
  'fam.create.req':      'Требуется звание Мафиози и двести пятьдесят тысяч долларов',
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
  'fam.inv.form.ph':     'Номер счёта (РУ123456)...',
  'fam.inv.form.btn':    '📨 Пригласить',
  'fam.upgrade.btn':     '💪 Сила плюс десять (пятьдесят тысяч долларов)',
  'fam.recruit.btn':     '👤 Участник плюс один (десять тысяч долларов)',
  'fam.leave.btn':       '🚪 Покинуть семью',
  'fam.disband.btn':     '💀 Расформировать Семью',
  'fam.family.suffix':   ' Семья',
  'fam.nameErr':         'Введите название семьи',
  'fam.accErr':          'Введите номер счёта',
  'fam.role.boss':       '👑 Босс',
  'fam.role.soldier':    '🔫 Солдат',

  // ── Missing notification keys ─────────────────────────
  'notif.garage_full2':  'Гараж заполнен',
  'notif.no_money':      'Недостаточно средств',
  'notif.insufficient':  'На банковском счёте недостаточно средств',

  // ── New keys ──────────────────────────────────
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
  'map.legend.strip': 'Стриптиз Клуб',
  'map.legend.ammunation': 'Оружейный магазин',
  'map.legend.airport': 'Аэропорт',
  'btn.sell_short': 'Продать',
  'leaderboard.you': 'Вы (Игрок)',
  'chat.online': 'Онлайн',
  'map.label.hospital': 'Больница',
  'map.label.prison': 'Тюрьма',
  'map.label.bank': 'Банк',
  'map.label.casino': 'Казино',
  'map.label.ammunation': 'Оружейный магазин',
  'map.label.garage': 'Гараж',
  'map.label.airport': 'Аэропорт',
  'map.label.gym': 'Тренажерный зал',
  'map.label.police': 'Полиция',
  'map.label.strip': 'Стриптиз Клуб',

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
  'mob.dd.profile':         'Мой профиль',
  'mob.dd.settings':        'Настройки',
  'mob.drawer.hdr':         'Все разделы',
  'slots.sorry':            'Не повезло, попробуйте',
  'daily.activity':         'Ежедневный бонус сто долларов',
  'preloader.s1':           'Загрузка...',
  'preloader.s2':           'Подготовка...',
  'preloader.s3':           'Готово',
  'confirm.leave_family':   'Покинуть семью?',
  'main.estate.unit':       'объектов',
  'friends.loading':        'Загрузка...',
  'friends.connError':      'Не удалось установить соединение.',
  'friends.emptyList':      'Список друзей пуст. Найдите и добавьте друзей!',
  'notif.fam_created':      '🏰 Семья успешно основана:',
  'notif.fam_power_up':     '💪 Сила семьи возросла до:',
  'notif.fam_new_member':   '👤 Новый участник! Всего:',
  'notif.fam_kicked':       '👤 Участник исключен из семьи.',

  // ── Weapons & Armor ───────────────────────────────────
  'weapon.knife.name': '🔪 Нож',
  'weapon.knife.desc': 'Основное уличное оружие. Увеличивает шанс на успех на пять процентов.',
  'weapon.pistol.name': '🔫 Пистолет Макарова',
  'weapon.pistol.desc': 'Стандартный пистолет. Дает десять процентов к успеху и предотвращает потерю пяти единиц здоровья.',
  'weapon.revolver.name': '🔫 Револьвер',
  'weapon.revolver.desc': 'Тяжёлый револьвер. Дает пятнадцать процентов к успеху и предотвращает потерю восьми единиц здоровья.',
  'weapon.shotgun.name': '💥 Дробовик',
  'weapon.shotgun.desc': 'Мощное оружие ближнего боя. Дает восемнадцать процентов к успеху и предотвращает потерю двенадцати единиц здоровья.',
  'weapon.thomson.name': '🔫 Пистолет-пулемёт Томпсона',
  'weapon.thomson.desc': 'Легендарное автоматическое оружие. Дает двадцать пять процентов к успеху и предотвращает потерю восемнадцати единиц здоровья. Требуется звание «Капо».',
  'weapon.ak47.name': '⚙️ Автомат Калашникова Сорок Семь',
  'weapon.ak47.desc': 'Тяжёлое боевое оружие. Дает тридцать два процента к успеху и предотвращает потерю двадцати пяти единиц здоровья. Требуется звание «Дон».',

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
  'quest.1.desc': '🎯 Совершить три преступления',
  'quest.2.desc': '🚗 Угнать один автомобиль',
  'quest.3.desc': '💰 Заработать одну тысячу пятьсот долларов пассивного дохода',

  // ── Audit keys ────────────────────────────────────────
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
  // ── Car Theft Modal ──────────────────────────
  'ct.modal.title':    '🚗 Машина угнана',
  'ct.carName':        'Название',
  'ct.condition':      'Состояние',
  'ct.type':           'Тип',
  'ct.btnGarage':      '🚗 В гараж',
  'ct.btnSell':        '💰 Продать сразу',
  'ct.addedToGarageHint': 'Этот автомобиль добавлен в ваш гараж. Выберите действие:',
  'ct.soldMsg':        'Машина продана за ',
  'ct.garageMsg':      'Машина добавлена в гараж',
  'ct.type.sport':     'Спорт',
  'ct.type.sedan':     'Седан',
  'ct.type.suv':       'Ամենագնաց',
  'ct.type.other':     'Այլ',
};

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
  'menu.crypto':       'Կրիպտոարժույթ',
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
  'page.crypto':      'Կրիպտոարժույթ',
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
  'sidebar.xp':   'Փորձ',
  'daily.label':  'Օրական բոնուս',
  'daily.claim':  'Ստանալ հարյուր դոլար',
  'daily.claimed':'Ստացված է ✓',

  // ── Topbar ──────────────────────────────────────────
  'topbar.log':   'Մատյան',
  'topbar.sound': 'Ձայն',
  'topbar.theme': 'Թեմա',
  'topbar.lang':  '🇦🇲 ՀՅ',
  'topbar.energy':'⚡ Էներգիա',
  'topbar.hp':    '❤️ Առողջություն',

  // ── Buttons ─────────────────────────────────────────
  'btn.deposit':      'Մուտքագրել',
  'btn.withdraw':     'Կանխիկացնել',
  'btn.transfer':     'Փոխանցել',
  'btn.buy':          'Գնել',
  'btn.sell':         'Վաճառել',
  'btn.launder':      '🧹 Լվանալ (յոթանասուն տոկոս)',
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
  'btn.red':          '🔴 ԿԱՐՄԻՐ (կրկնակի)',
  'btn.black':        '⚫ ՍԵՒ (կրկնակի)',
  'btn.bribe':        '💰 Կաշառք (մեկ հազար դոլար)',
  'btn.escape':       '🚀 Փախուստ (երկու հազար հինգ հարյուր դոլար)',
  'btn.logout':       'Ելք',
  'btn.edit':         'Խմբագրել',
  'btn.deleteProfile':'Ջնջել հաշիվը',
  'btn.expand':       'Ընդլայնել (երկու հազար հինգ հարյուր դոլար)',
  'btn.expand2':      'Ընդլայնել (հարյուր հազար դոլար)',
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
  'bank.accPh':    'Հաշվեհամար (ՀՀ123456)',
  'bank.amtPh':    'Գումար...',
  'bank.loanPh':   'Գումար (Առավելագույնը հիսուն հազար դոլար)',

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
  'biz.restaurant.desc': 'Մաքուր և օրինական բիզնես։ Ցածր, բայց կայուն եկամուտ։ Առավելագույն մակարդակ՝ 15',
  'biz.casino':       'Ընդհատակյա Կազինո',
  'biz.casino.desc':  'Միայն մաֆիայի համար։ Բերում է մեծ եկամուտ, բայց պահանջում է կապեր։',
  'biz.arms':         'Զենքի Գործարան',
  'biz.arms.desc':    'Ծանր, վտանգավոր, բայց անհավանական շահութաբեր ստվերային բիզնես։',
  'biz.strip':        'Ստրիպտիզ Ակումբ 🔞',
  'biz.strip.desc':   'Ստվերային ժամանց, կեղտոտ փողեր։ Հեղինակություն՝ 40+ | Եկամուտը՝ որպես կեղտոտ փողեր։ Առավելագույն մակարդակ՝ 15',
  'biz.launderDesc':  'Ստրիպտիզ-ակումբի և զենքի գործարանի եկամուտները «կեղտոտ» են։ Ֆոնդի միջոցով դրանք կարելի է լվանալ — երեսուն տոկոսը կգնա «բարեգործության»։',
  'biz.price75':      'Արժեքը՝ յոթանասունհինգ հազար դոլար',
  'biz.price150':     'Արժեքը՝ հարյուր հիսուն հազար դոլար',
  'biz.price200':     'Արժեքը՝ երկու հարյուր հազար դոլար',
  'biz.price300':     'Արժեքը՝ երեք հարյուր հազար դոլար',
  'biz.namePh':       'Անվանում...',
  'biz.casinoNamePh': 'Կազինոյի անվանում...',
  'biz.clubNamePh':   'Ակումբի անվանում...',
  'biz.launderPh':    'Լվանալ ($)...',
  'biz.max_level':    'Մաքսիմում',
  'biz.level':        'Մակարդակ',
  'biz.per_10s':      ' տասը վայրկյանում',

  // ── Prison ──────────────────────────────────────────
  'prison.free':    'Ազատության մեջ',
  'prison.freeSub': 'Դուք մաքուր եք օրենքի առաջ (առայժմ):',
  'prison.locked':  'ԴՈՒՔ ՃԱՂԵՐԻ ՀԵՏԵՎՈՒՄ ԵՔ',
  'prison.bribeTip':'Կաշառք = հարյուր տոկոս հաջողություն, Փախուստ = հիսուն տոկոս և մեծ ռիսկ։',

  // ── Stash ────────────────────────────────────────────
  'stash.stored': 'Պահվում է',
  'stash.desc':   'Այս գումարը պաշտպանված է ոստիկանության բռնագրավումից:',
  'stash.inPh':   'Դնել ($)...',
  'stash.outPh':  'Հանել ($)...',

  // ── Hospital ─────────────────────────────────────────
  'hosp.hp':        'Առողջություն՝',
  'hosp.light':     'Թեթև բուժում',
  'hosp.lightDesc': 'Վերականգնում է քսանհինգ միավոր առողջություն: Օգտակար է թեթև վնասվածքների դեպքում:',
  'hosp.lightPrice':'Արժեքը՝ երկու հարյուր դոլար',
  'hosp.full':      'Ամբողջական վերականգնում',
  'hosp.fullDesc':  'Ամբողջությամբ վերականգնում է առողջությունը և էներգիան:',
  'hosp.fullPrice': 'Արժեքը՝ մեկ հազար հինգ հարյուր դոլար',

  // ── Training ─────────────────────────────────────────
  'train.desc':      'Բարձրացրեք ձեր առավելագույն ֆիզիկական և մտավոր պարամետրերը:',
  'train.phys':      'Ֆիզիկական պատրաստվածություն',
  'train.physDesc':  '+5 Առավելագույն առողջություն',
  'train.physPrice': 'Արժեքը՝ հինգ հարյուր դոլար',
  'train.mental':    'Մտավոր պատրաստվածություն',
  'train.mentDesc':  '+5 Առավելագույն Էներգիա',
  'train.mentPrice': 'Արժեքը՝ հինգ հարյուր դոլար',
  'train.price500':  'Արժեքը՝ հինգ հարյուր դոլար',

  // ── Reputation ───────────────────────────────────────
  'rep.desc':     'Ձեր հեղինակությունը քաղաքում: Բարձր հեղինակությունը նվազեցնում է ձերբակալման ռիսկը և բացում նոր բիզնեսներ:',
  'rep.donation': 'Բարեգործություն / Կաշառք քաղաքապետարանին',
  'rep.donDesc':  'Գումար նվիրաբերելով՝ դուք գնում եք քաղաքի լռությունը: +5 Հեղինակություն',
  'rep.donPrice': 'Արժեքը՝ երկու հազար դոլար',
  'rep.level':    'Մակարդակ՝',

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
  'stats.networth': 'Ընդհանուր կարողություն',

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
  'profile.xp':      'Փորձի միավորներ',
  'profile.crimes':  'Հանցագործություններ',
  'profile.cars':    'Ավտոպարկ',
  'profile.hp':      'Առողջություն',
  'profile.since':   'Գրանցման ամսաթիվ',
  'profile.level':   'Մակարդակ',
  'profile.accInfo': 'Տեղեկություն հաշվի մասին',
  'profile.rank':    'Կոչում',
  'profile.created': 'Ստեղծվել է',
  'profile.welcome': 'Բարի գալուստ',

  // ── Friends & Families ───────────────────────────────
  'families.desc':    'Հինգ հայտնի մաֆիոզ ընտանիքներ, որոնք կիսել են քաղաքը: Հասիր Մաֆիոզ կոչմանը և կուտակիր երկու հարյուր հիսուն հազար դոլար — ստեղծիր վեցերորդ ընտանիքը:',
  'friends.title':    'Ընկերներ',
  'friends.incoming': 'Ստացված հայտեր',
  'friends.list':     'Ընկերների ցանկ',
  'friends.requests': 'Ստացված հայտեր',
  'friends.searchPh': 'Մուտքագրեք մականունը...',
  'fp.message':       'Նամակ',

  // ── Crypto ───────────────────────────────────────────
  'crypto.trade':     'Առևտուր',
  'crypto.portfolio': 'Ձեր պորտֆելը',
  'crypto.updateNote':'Շուկան թարմացվում է յուրաքանչյուր հինգ վայրկյանը մեկ:',
  'crypto.amtPh':     'Քանակ',

  // ── Notifications ────────────────────────────────────
  'notif.in_prison':    'Դուք բանտում եք',
  'notif.no_energy':    'Բավարար էներգիա չկա',
  'notif.no_hp':        'Դուք անգիտակից եք: Գնացեք հիվանդանոց:',
  'notif.unconscious':  'Դուք անգիտակից եք: Գնացեք հիվանդանոց:',
  'notif.garage_full':  'Ավտոտնակը լիքն է',
  'notif.saved':        'Պահպանված է ✓',
  'notif.loaded':       'Բեռնված է ✓',
  'notif.reset_confirm':'Համոզվա՞ծ եք։ Ամեն ինչ կջնջվի անվերադարձ։',
  'notif.daily_claim':  'Օրական բոնուս հարյուր դոլար!',
  'notif.daily_already':'Այսօր արդեն ստացել եք',
  'notif.new_rank':     'Նոր կոչում՝',
  'notif.car_stolen':   'Առևանգված է',
  'notif.garage_expand':'Ավտոտնակը հաջողությամբ ընդլայնվեց հինգ տեղով!',
  'notif.garage_expanded':'Ավտոտնակը հաջողությամբ ընդլայնվեց հինգ տեղով!',
  'notif.need_2500':    'Ավտոտնակը ընդլայնելու համար անհրաժեշտ է երկու հազար հինգ հարյուր դոլար։',
  'notif.get_daily':    'Ստանալ բոնուսը',
  'notif.daily_received':'Բոնուսը ստացված է',
  'notif.daily_bonus':  'Օրական բոնուս հարյուր դոլար!',
  'notif.biz_slot_add': 'Բիզնեսի սլոթերը հաջողությամբ ավելացան հինգ տեղով!',
  'notif.no_100k':      'Բիզնեսի սլոթերը ընդլայնելու համար ձեզ անհրաժեշտ է հարյուր հազար դոլար:',
  'notif.slots_full':   'Բիզնեսի բոլոր սլոթերը զբաղված են! Ընդլայնեք սլոտները նոր բիզնես հիմնելու համար:',
  'notif.enter_name':   'Խնդրում ենք մուտքագրել բիզնեսի անվանումը:',
  'notif.no_75k':       'Այս բիզնեսը հիմնելու համար ձեզ անհրաժեշտ է յոթանասունհինգ հազար դոլար:',
  'notif.no_150k':      'Այս խաղատունը հիմնելու համար ձեզ անհրաժեշտ է հարյուր հիսուն հազար դոլար:',
  'notif.no_200k':      'Այս ակումբը հիմնելու համար ձեզ անհրաժեշտ է երկու հարյուր հազար դոլար:',
  'notif.no_300k':      'Այս գործարանը հիմնելու համար ձեզ անհրաժեշտ է երեք հարյուր հազար դոլար:',
  'notif.rep_30':       'Այս բիզնեսը հասանելի է միայն երեսուն և ավելի բարձր հեղինակություն ունեցողներին:',
  'notif.rep_40':       'Այս բիզնեսը հասանելի է միայն քառասուն և ավելի բարձր հեղինակություն ունեցողներին:',
  'notif.rep_50':       'Այս բիզնեսը հասանելի է միայն հիսուն և ավելի բարձր հեղինակություն ունեցողներին:',
  'notif.no_dirty':     'Ձեր ձեռքի տակ չկան կեղտոտ փողեր լվանալու համար:',
  'notif.wrong_amount': 'Խնդրում ենք մուտքագրել ճիշտ և դրական գումար:',
  'notif.bad_amount':   'Խնդրում ենք մուտքագրել ճիշտ և վավեր գումար կամ քանակ:',
  'notif.only_mafioso': 'Այս խաղն հասանելի է միայն Մաֆիոզ և բարձր կոչում ունեցողներին:',
  'notif.already_have':  'Այս իրը դուք արդեն ունեք:',
  'notif.item_bought':   'Գնված է՝ {item}',
  'notif.item_equipped': '{item} կրում ես',
  'notif.item_unequipped':'Հանվեց',
  'notif.item_sold':     'Վաճառված է՝ {item} ${amount}-ով',
  'notif.arrested':      '🚔 Դուք ձերբակալված եք:',
  'notif.avatar_error':  'Սխալ ավատարը թարմացնելիս',
  'notif.avatar_updated':'Ավատարը թարմացվեց ✓',
  'notif.bribe_ok':      'Կաշառքը հաջողվեց, դուք ազատ եք:',
  'notif.car_removed':   'Ավտոմեքենան հանվեց հանցագործություններից',
  'notif.car_selected':  'Ավտոմեքենան ընտրվեց հանցագործությունների համար',
  'notif.cloud_loaded':  'Ամպային պահուստը բեռնվեց ✓',
  'notif.delete_error':  'Սխալ պրոֆիլը ջնջելիս',
  'notif.error_generic': 'Տեղի ունեցավ սխալ',
  'notif.escape_fail':   'Փախուստը ձախողվեց: Ժամկետը մեծացավ:',
  'notif.escape_ok':     'Փախուստը հաջողվեց, դուք ազատ եք:',
  'notif.freed':         'Դուք դուրս եկաք ազատության մեջ',
  'notif.friend_added':  'Ընկերության հայտը ընդունվեց',
  'notif.friend_declined':'Ընկերության հայտը մերժվեց',
  'notif.friend_req_ok': 'Ընկերության հայտն ուղարկվեց',
  'notif.loan_max':      'Առավելագույն վարկը՝ հիսուն հազար դոլար:',
  'notif.loan_no_cash':  'Բավարար գումար չկա վարկը մարելու համար:',
  'notif.loan_none':     'Դուք վարկ չունեք մարելու համար:',
  'notif.max_bet':       'Առավելագույն խաղադրույքը՝',
  'notif.no_1000':       'Անհրաժեշտ է մեկ հազար դոլար:',
  'notif.no_2500':       'Անհրաժեշտ է երկու հազար հինգ հարյուր դոլար:',
  'notif.no_money5':     'Անհրաժեշտ է երկու հազար դոլար:',
  'notif.profile_updated':'Պրոֆիլը թարմացվեց ✓',
  'notif.rented':        'Անշարժ գույքը հանձնվեց վարձակալության',
  'notif.transfer_bad_acc':'Սխալ հաշվի համար:',
  'notif.transfer_done': 'հաջողությամբ փոխանցվեց հաշվին',
  'notif.transfer_fail': 'Փոխանցման սխալ',
  'notif.transfer_no_amt':'Մուտքագրեք փոխանցման ճիշտ գումարը:',
  'notif.transfer_no_bank':'Բավարար միջոցներ չկան հաշվում',
  'notif.transfer_self': 'Չեք կարող գումար փոխանցել ինքներդ ձեզ:',
  'notif.unrented':      'Անշարժ գույքը հանվեց վարձակալությունից',
  'notif.casino_sorry': 'Ցավոք այս անգամ չհաջողվեց հաղթել: Փորձեք նորից:',
  'notif.already_full_hp':'Ձեր առողջությունն արդեն առավելագույն մակարդակի վրա է:',
  'notif.train_hp':     'Մարզումը հաջողվեց! Առավելագույն առողջությունը մեծացավ հինգ միավորով:',
  'notif.train_en':     'Մարզումը հաջողվեց! Առավելագույն էներգիան մեծացավ հինգ միավորով:',
  'notif.rep_max':      'Ձեր հեղինակությունն արդեն առավելագույն մակարդակի վրա է:',
  'notif.rep_paid':     'Նվիրատվությունն ընդունվել է! Համբավը բարձրացավ հինգ միավորով:',
  'notif.stash_no':     'Պահեստում չկա բավարար գումար դուրս հանելու համար:',

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
  'auth.newPassPh':   'Գաղտնաբառ (նվազագույնը վեց նիշ)',
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
  'crime.extort.desc': 'Պահանջիր հովանավորության գումար տեղական վաճառականներից: Հարկավոր է լավ հեղինակություն:',
  'crime.smuggle.desc':'Ապրանքների անօրինական տեղափոխում: Բարձր վճար, բարձր ռիսկ:',
  'crime.bankrob.desc':'Ամենավտանգավոր և եկամտաբեր գործը: Միայն փորձառուների համար:',

  // ── Cars ─────────────────────────────────────────────
  'car.class0':      '🚗 Էկոնոմ դաս',
  'car.class1':      '🚙 Բիզնես և Սպորտ',
  'car.class0.desc': 'Սովորական քաղաքային մեքենաներ: Հեշտ է գողանալ, քիչ արժեն:',
  'car.class1.desc': 'Թանկարժեք մեքենաներ: Ավելի բարդ է, բայց եկամտաբեր:',
  'cars.desc':       'Գողացված մեքենաները կարելի է վաճառել կամ օգտագործել հանցագործություններում (նվազեցնում է ռիսկը):',

  // ── Main page ─────────────────────────────────────────
  'main.bankLabel':   'Անձնական Բանկային Հաշիվ',
  'main.quickActions':'⚡ Արագ Գործողություններ',
  'quick.pocket':     'Գրպանահատություն',
  'quick.shop':       'Թալանել Խանութ',

  // ── Inventory ────────────────────────────────────────
  'inv.shopTab':        '🛒 Խանութ',
  'inv.ownedTab':       '🎒 Իմ Զինանոց',
  'inv.desc':           'Զենքն ու զրահը ազդում են հանցագործությունների հաջողության տոկոսի և առողջության կորստի վրա:',
  'inv.crimeBonus':     'Հանցագործության բոնուս',
  'inv.hpProt':         'Առողջության Պաշտպանություն',
  'inv.weapons':        '⚔️ Զենքեր',
  'inv.armor':          '🛡️ Զրահ և Հագուստ',
  'inv.myWeapons':      '⚔️ Իմ Զենքերը',
  'inv.myArmor':        '🛡️ Իմ Զրահը',
  'inv.equippedWeapon': '🔫 Կրած Զենքը:',
  'inv.equippedArmor':  '🛡️ Կրած Զրահը:',
  'inv.equipped':       '✅ Էկիպավորված',
  'inv.equip':          '🔫 Էկիպավորել',
  'inv.wear':           '🛡️ Հագնել',
  'inv.already_owned':  '✅ Գնված',
  'inv.rank_required':  '🔒 Պահանջվում է՝ {rank}',
  'inv.sell':           'Վաճառել',
  'inv.none':           '— Ոչ մեկը —',
  'inv.empty_weapons':  'Զենք չկա — գնիր Խանութ ներդիրից',
  'inv.empty_armor':    'Զրահ չկա — գնիր Խանութ ներդիրից',

  // ── Casino ───────────────────────────────────────────
  'casino.roulette':  'Ռուլետկա',
  'casino.slots':     'Սլոթ Մեքենա',
  'casino.betPh':     'Խաղադրույք ($)...',

  // ── Estate / Dealer ──────────────────────────────────
  'estate.myTab':     'Իմ Անշարժ Գույքը',
  'dealer.newTab':    'Նոր Մեքենաներ',
  'dealer.usedTab':   'Օգտագործված',
  'filter.min':       'Նվազագույն գին ($)',
  'filter.max':       'Առավելագույն գին ($)',
  'filter.minShort':  'Նվազագույն ($)',
  'filter.maxShort':  'Առավելագույն ($)',

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
  'reg.nick':      'Կերպարի անունը (Մականուն)',
  'reg.email':     'Էլ. փոստ',
  'reg.pass':      'Գաղտնաբառ',
  'reg.pass2':     'Կրկնեք գաղտնաբառը',
  'reg.submit':    'Գրանցվել ➤',
  'reg.hasAcc':    'Արդեն ունե՞ք հաշիվ:',
  'reg.loginLink': 'Մուտք գործեք',
  'garage.slots':  'Տեղեր',

  // ── Extras ───────────────────────────────────────────
  'weapon.knife': 'Դանակ',
  'weapon.bat': 'Բիտա',
  'weapon.glock': 'Ատրճանակ Գլոկ Տասնինը',
  'weapon.ak47': 'Ավտոմատ Կալաշնիկով Քառասունյոթ',
  'weapon.shotgun': 'Որսորդական հրացան',
  'weapon.m4': 'Գրոհային հրացան Էմ Չորս Ա Մեկ',
  'weapon.sniper': 'Դիպուկահար հրացան',
  'weapon.tommy': 'Թոմփսոնի ատրճանակ-գնդացիր',
  'armor.leather': 'Կաշվե բաճկոն',
  'armor.kevlar': 'Կեվլարային բաճկոն',
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
  'mob.crypto':      'Կրիպտոարժույթ',
  'mob.estate':      'Անշարժ գույք',
  'mob.stash':       'Թաքստոց',
  'mob.prison':      'Բանտ',
  'mob.hospital':    'Հիվանդանոց',
  'mob.training':    'Մարզում',
  'mob.reputation':  'Հեղինակություն',
  'mob.families':    'Ընտանիքներ',
  'mob.friends':     'Ընկերներ',
  'mob.quests':      'Օրվա առաջադրանքներ',
  'mob.daynight':    'Գիշեր / Ցերեկ',
  'mob.events':      'Իրադարձություններ',
  'mob.stats':       'Վիճակագրություն',
  'mob.leaderboard': 'Առաջատարներ',
  'mob.profile':     'Իմ էջը',

  // ── Edit Profile Modal ────────────────────────────────
  'modal.editProfile':    '✏️ Խմբագրել Պրոֆիլը',
  'modal.avatarBgColor':  'Ավատարի ֆոնի գույն',
  'modal.avatarClick':    'Սեղմեք ավատարի վրա՝ նկարը փոխելու համար',
  'modal.nickLabel':      'Մականուն',
  'profile.nicknameLabel': 'Մականուն',
  'modal.nickPh':         'Ձեր մականունը',
  'modal.bioLabel':       'Կարճ կենսագրություն',
  'modal.bioPh':          'Ինչ-որ բան ձեր մասին...',
  'modal.cancel':         'Չեղարկել',
  'modal.save':           'Պահպանել',

  // ── Friend Profile Modal ──────────────────────────────
  'modal.friendProfile':  '👤 Ընկերոջ պրոֆիլ',

  // ── Search & Friends ──────────────────────────────────
  'friends.searching':    'Որոնվում է...',
  'friends.notFound':     'Ոչ ոք չի գտնվել',
  'friends.results':      'Արդյունքներ',
  'friends.removeTip':    'Հեռացնել ընկերոջը',
  'friends.online':       'Առցանց',
  'friends.accept':       'Ընդունել',
  'friends.decline':      'Մերժել',

  // ── Chat ──────────────────────────────────────────────
  'chat.loading':         'Բեռնվում է...',
  'chat.noMessages':      'Հաղորդագրություններ չկան. Գրեք առաջինը!',
  'chat.offline':         'Անցանց',

  // ── Auth errors ───────────────────────────────────────
  'auth.err.nameShort':   'Անունը պետք է լինի առնվազն երկու նիշ',
  'auth.err.emailInvalid':'Մուտքագրեք վավեր էլեկտրոնային հասցե',
  'auth.err.passShort':   'Գաղտնաբառը պետք է լինի առնվազն վեց նիշ',
  'auth.err.passMatch':   'Գաղտնաբառերը չեն համընկնում',
  'auth.err.fillAll':     'Լրացրեք բոլոր դաշտերը',
  'auth.err.emailTaken':  'Այս էլեկտրոնային հասցեն արդեն գրանցված է',
  'auth.err.invalidCreds':'Սխալ էլեկտրոնային հասցե կամ գաղտնաբառ',
  'auth.ok.registered':   'Գրանցումը հաջողվեց! Բարի գալուստ, ',
  'auth.ok.welcome':      'Բարի գալուստ, ',
  'btn.registering':      'Գրանցում...',
  'btn.logging_in':       'Մուտք...',
  'btn.register':         'Գրանցվել ➤',
  'btn.login':            'Մուտք ➤',

  // ── Quests ────────────────────────────────────────────
  'quest.type.crime':   '🎯 Կատարել հանցագործություն: {target}',
  'quest.type.car':     '🚗 Առևանգել մեքենա: {target}',
  'quest.type.earn':    '💰 Վաստակել կանխիկ: ${target}',
  'quest.type.passive': '🏢 Հավաքել պասիվ եկամուտ: ${target}',
  'quest.type.casino':  '🎰 Խաղալ կազինոյում անգամ: {target}',
  'quest.reward':       'Պարգև',
  'quest.done':         'Կատարված է',
  'quest.claim':        'Ստանալ ${reward}',
  'quest.claimed':      '📜 Առաջադրանքը կատարված է: Ստացվել է $',
  'notif.quests_refresh': '📋 Նոր առաջադրանքներ այսօրվա համար:',

  // ── Events ────────────────────────────────────────────
  'event.rain':      '🌧️ Ուժեղ անձրև: Հանցագործությունների ռիսկը նվազել է ոստիկանության պասիվության պատճառով:',
  'event.crypto':    '📈 Կրիպտոարժույթների շուկան ակտիվացել է: Գների տատանումներ:',
  'event.gift':      '🎁 Ձեզ փողոցում ճանաչեցին որպես լավ մարդ: Տրվեց երկու հարյուր դոլար:',
  'event.raid':      '👮 Ոստիկանական ռեյդ թաղամասում:',
  'notif.arrested2': '👮 Ռեյդ: Բռնագրավվել է հինգ հարյուր դոլար',

  // ── Map ───────────────────────────────────────────────
  'map.noBusinesses': 'Բիզնեսներ դեռ չունեք:',
  'map.openBiz':      'Բացել բիզնեսների շուկան →',
  'map.playerLabel':  'Դու',
  'map.legend.bank':       '🏦 Բանկ',
  'map.legend.prison':     '🔒 Բանտ',
  'map.legend.hospital':   '🏥 Հիվանդանոց',
  'map.legend.casino':     '🎰 Կազինո',
  'map.legend.bizmarket':  '🏢 Շուկա',

  // ── Dealership filter dropdowns & render strings ──────
  'dealer.filterAll':    'Բոլոր տեսակները',
  'dealer.filterSedan':  'Սեդան',
  'dealer.filterSuv':    'Ամենագնաց',
  'dealer.filterSport':  'Սպորտային',
  'dealer.sortDefault':  'Սովորական',
  'dealer.sortAsc':      'Գինը աճման կարգով',
  'dealer.sortDesc':     'Գինը նվազման կարգով',
  'dealer.noFound':      'Մեքենաներ չեն գտնվել',
  'dealer.badge.new':    'ՆՈՐ',
  'dealer.cond':         'Վիճակը՝',
  'dealer.viewBtn':      'Դիտել մանրամասն',
  'dealer.closeBtn':     'Փակել',
  'dealer.buyBtn':       'Գնել',
  'dealer.bought':       '🚗 Գնվել է՝ ',

  // ── Dealer — Car types & Spec abbreviations ───────────
  'dealer.type.sport':    'Սպորտային',
  'dealer.type.sedan':    'Սեդան',
  'dealer.type.suv':      'Ամենագնաց',
  'dealer.spec.hp':       'ձիաուժ',
  'dealer.spec.kmh':      'կիլոմետր ժամում',
  'dealer.spec.sec':      'վայրկյան',
  'dealer.spec.topSpeed': 'Առավելագույն արագություն',
  'dealer.spec.auto6':    '6-աստիճան ավտոմատ կորոբկա',
  'dealer.spec.auto8':    '8-աստիճան ավտոմատ կորոբկա',
  'dealer.spec.mech6':    '6-աստիճան մեխանիկական կորոբկա',
  'dealer.spec.fullPkg':  'Լիակատար հավաքածու',
  'dealer.spec.carbon':   'Ածխածնային դետալներ',
  'dealer.spec.seats':    'տեղ',
  'dealer.spec.newKm':    'զրո կիլոմետր',
  'dealer.spec.km':       'կիլոմետր',
  'dealer.spec.cond':     'Մաշվածության աստիճան',

  // ── Estate ───────────────────────────────────────────
  'estate.filterAll':       'Բոլոր տեսակները',
  'estate.type.house':      'Բնակարան',
  'estate.type.land':       'Հողատարածք',
  'estate.type.garage':     'Ավտոտնակ',
  'estate.title.apartment': 'Բնակարան',
  'estate.title.land':      'Հողատարածք',
  'estate.title.garage':    'Ավտոտնակ',
  'estate.title.location':  '(Կենտրոն / Շրջան)',
  'estate.desc.apartment':  'Գերազանց բնակարան վարձակալության համար:',
  'estate.desc.land':       'Բերրի հողատարածք:',
  'estate.desc.garage':     'Քարե, ապահով ավտոտնակ:',
  'estate.notFound':        'Չգտնվեց',
  'estate.rentPer10s':      'Վարձակալություն տասը վայրկյանում՝',
  'estate.viewBtn':         'Դիտել',
  'estate.empty':           'Գույք չկա',
  'estate.unrent':          'Հանել վարձակալությունից',
  'estate.rent':            'Տալ վարձով',
  'estate.typeLabel':       'Տեսակը՝',
  'estate.incomeLabel':     'Եկամուտ վարձակալությունից՝',

  // ── Garage UI ─────────────────────────────────────────
  'garage.marketPrice': 'Շուկայական գինը՝',
  'garage.crimeCar':    '✅ Ուղեկցող մեքենա',
  'garage.makeCrime':   '🚔 Օգտագործել գործերում',

  // ── Sold / Bought notifications ───────────────────────
  'notif.sold':   'Վաճառվել է ',
  'notif.bought': '🚗 Գնվել է՝',

  // ── Map ──────────────────────────────────────────────
  'map.desc':            'Քարտեզի վրա պատկերված են ձեր թաղամասերը, բիզնեսները և կարևոր վայրերը։',

  // ── Rank modal ────────────────────────────────────────
  'rank.title':    '⭐ Կոչումներ',
  'rank.current':  'Ներկայիս՝',
  'rank.progress': 'Առաջընթաց',
  'rank.all':      'Բոլոր Կոչումները',
  'rank.max':      'Միավորներ (Առավելագույնը)',

  // ── Messages ─────────────────────────────────────────
  'msg.header':       'Հաղորդագրություններ',
  'msg.loadingList':  'Բեռնվում է...',
  'msg.selectFriend': 'Ընտրեք ընկերոջը գրելու համար',
  'msg.inputPh':      'Գրել հաղորդագրություն...',
  'msg.sendTitle':    'Ուղարկել',

  // ── Families render ───────────────────────────────────
  'fam.invite.hdr':      '🏰 Ընտանեկան հրավեր',
  'fam.invite.body':     ' ընտանիքը հրավիրում է քեզ (Ղեկավար՝ ',
  'fam.invite.accept':   '✓ Ընդունել',
  'fam.invite.decline':  '✕ Մերժել',
  'fam.create.title':    'Ստեղծել նոր Ընտանիք',
  'fam.create.req':      'Պահանջվում է Մաֆիոզ կոչում և երկու հարյուր հիսուն հազար դոլար',
  'fam.create.namePh':   'Ընտանիքի անվանումը...',
  'fam.create.colorLbl': 'Գույնը՝',
  'fam.create.btn':      '🏰 Հիմնադրել Ընտանիք',
  'fam.create.creating': 'Ստեղծվում է...',
  'fam.create.curRank':  'Ներկայիս կոչումը՝ ',
  'fam.power':           'ՈՒԺ',
  'fam.mem.count':       'ԱՆԴԱՄՆԵՐ',
  'fam.realMembers.hdr': 'Իրական անդամներ',
  'fam.noMembers':       'Անդամներ չկան',
  'fam.kick':            'Հեռացնել',
  'fam.inv.form.hdr':    '📨 Հրավիրել անդամ',
  'fam.inv.form.ph':     'Հաշվեհամար (ՀՀ123456)...',
  'fam.inv.form.btn':    '📨 Հրավիրել',
  'fam.upgrade.btn':     '💪 Ուժ պլյուս տասը (հիսուն հազար դոլար)',
  'fam.recruit.btn':     '👤 Անդամ պլյուս մեկ (տասը հազար դոլար)',
  'fam.leave.btn':       '🚪 Լքել ընտանիքը',
  'fam.disband.btn':     '💀 Կազմալուծել ընտանիքը',
  'fam.family.suffix':   ' Ընտանիք',
  'fam.nameErr':         'Մուտքագրեք ընտանիքի անվանումը',
  'fam.accErr':          'Մուտքագրեք հաշվեհամարը',
  'fam.role.boss':       '👑 Ղեկավար',
  'fam.role.soldier':    '🔫 Ավազակ',

  // ── Missing notification keys ─────────────────────────
  'notif.garage_full2':  'Ավտոտնակը լիքն է',
  'notif.no_money':      'Անբավարար միջոցներ',
  'notif.insufficient':  'Բանկային հաշվին անբավարար միջոցներ',

  // ── New keys ──────────────────────────────────
  'mob.settings': 'Կարգավորումներ',
  'mob.logout': 'Դուրս գալ հաշվից',
  'mob.more': 'Ավելին',
  'section.explore': 'Հետախուզում',
  'log.title': 'Մատյան',
  'btn.close': 'Փակել',
  'dealer.modal.title': 'Ավտոսրահ',
  'estate.modal.title': 'Անշարժ գույք',
  'fp.remove': 'Հեռացնել',
  'map.legend.you': 'Դու',
  'map.legend.strip': 'Ստրիպտիզ ակումբ',
  'map.legend.ammunation': 'Զենքի խանութ',
  'map.legend.airport': 'Օդանավակայան',
  'btn.sell_short': 'Վաճառել',
  'leaderboard.you': 'Դուք (Խաղացող)',
  'chat.online': 'Առցանց',
  'map.label.hospital': 'Հիվանդանոց',
  'map.label.prison': 'Բանտ',
  'map.label.bank': 'Բանկ',
  'map.label.casino': 'Կազինո',
  'map.label.ammunation': 'Զենքի խանութ',
  'map.label.garage': 'Ավտոտնակ',
  'map.label.airport': 'Օդանավակայան',
  'map.label.gym': 'Մարզասրահ',
  'map.label.police': 'Ոստիկանություն',
  'map.label.strip': 'Ստրիպտիզ ակումբ',

  // ── Extra coverage keys ─────────────────────────────────────
  'confirm.logout':         'Դուրս գալ հաշվից՞',
  'confirm.delete':         '⚠️ Ջնջել ձեր պրոֆիլը՞: Սա անդառնալի է:',
  'confirm.reset':          '🗑️ Ջնջել ամբողջ առաջընթացը՞',
  'confirm.remove_friend':  'Հեռացնել այս ընկերոջը՞',
  'fam.boss_label':         'Ղեկավար՝',
  'fam.terr_label':         'Տարածք՝',
  'npc.family.suffix':      ' Ընտանիք',
  'biz.none':               'Բիզնեսներ չկան',
  'chat.empty_preview':     'Հաղորդագրություն չկա',
  'chat.no_friends':        'Նախ հարկավոր է ավելացնել ընկերներ:',
  'chat.contacts_err':      'Կապի հաստատումը ձախողվեց:',
  'chat.just_now':          'Հենց նոր',
  'friend.removed':         'Ընկերը հեռացված է',
  'mob.map':                'Քաղաքի քարտեզ',
  'mob.dd.profile':         'Իմ էջը',
  'mob.dd.settings':        'Կարգավորումներ',
  'mob.drawer.hdr':         'Բոլոր Բաժինները',
  'slots.sorry':            'Ցավոք չհաջողվեց, փորձեք նորից',
  'daily.activity':         'Օրական բոնուս հարյուր դոլար',
  'preloader.s1':           'Բեռնվում է...',
  'preloader.s2':           'Նախապատրաստում...',
  'preloader.s3':           'Պատրաստ է',
  'confirm.leave_family':   'Լքել ընտանիքը՞',
  'main.estate.unit':       'միավոր',
  'friends.loading':        'Որոնվում է համակարգում',
  'friends.connError':      'Կապի հաստատումը ձախողվեց:',
  'friends.emptyList':      'Ընկերների ցուցակը դատարկ է: Գտեք և ավելացրեք նրանց:',
  'notif.fam_created':      '🏰 Ընտանիքը հաջողությամբ հիմնադրվեց՝',
  'notif.fam_power_up':     '💪 Ընտանիքի ուժը մեծացավ մինչև՝',
  'notif.fam_new_member':   '👤 Նոր անդամ միացավ: Ընդհանուր՝',
  'notif.fam_kicked':       '👤 Անդամը հեռացվեց ընտանիքից:',

  // ── Weapons & Armor ───────────────────────────────────
  'weapon.knife.name': '🔪 Դանակ',
  'weapon.knife.desc': 'Փողոցային հիմնական զենք։ Բարձրացնում է հաջողության հավանականությունը հինգ տոկոսով։',
  'weapon.pistol.name': '🔫 Ատրճանակ (Մակարով)',
  'weapon.pistol.desc': 'Ստանդարտ ատրճանակ։ Տալիս է տասը տոկոս հաջողություն և կանխում է հինգ միավոր առողջության կորուստը։',
  'weapon.revolver.name': '🔫 Ռևոլվեր',
  'weapon.revolver.desc': 'Ծանր ռևոլվեր։ Տալիս է տասնհինգ տոկոս հաջողություն և կանխում է ութ միավոր առողջության կորուստը։',
  'weapon.shotgun.name': '💥 Որսորդական հրացան',
  'weapon.shotgun.desc': 'Կարճ հեռավորության հզոր զենք։ Տալիս է տասնութ տոկոս հաջողություն և կանխում է տասներկու միավոր առողջության կորուստը։',
  'weapon.thomson.name': '🔫 Թոմփսոնի ատրճանակ-գնդացիր',
  'weapon.thomson.desc': 'Թոմփսոնի ատրճանակ-գնդացիր։ Տալիս է քսանհինգ տոկոս հաջողություն և կանխում է տասնութ միավոր առողջության կորուստը։ Պահանջվում է «Կապո» կոչում։',
  'weapon.ak47.name': '⚙️ Ավտոմատ Կալաշնիկով Քառասունյոթ',
  'weapon.ak47.desc': 'Ծանր մարտական զենք։ Տալիս է երեսուներկու տոկոս հաջողություն և կանխում է քսանհինգ միավոր առողջության կորուստը։ Պահանջվում է «Դոն» կոչում։',

  'armor.jacket.name': '🧥 Կաշվե բաճկոն',
  'armor.jacket.desc': 'Հիմնական պաշտպանություն։ Կանխում է ութ միավոր առողջության կորուստը հարձակման ժամանակ։',
  'armor.vest.name': '🦺 Կևլարե զրահաբաճկոն',
  'armor.vest.desc': 'Միջին պաշտպանություն։ Կանխում է քսան միավոր առողջության կորուստը։ Պահանջվում է «Ավազակ» կոչում։',
  'armor.heavy.name': '🛡️ Ծանր մարտական զրահ',
  'armor.heavy.desc': 'Առավելագույն պաշտպանություն։ Կանխում է երեսունհինգ միավոր առողջության կորուստը։ Պահանջվում է «Մաֆիոզ» կոչում։',

  // ── Territory keys ────────────────────────────────────
  'fam.terr.north':  'Հյուսիսային թաղամաս',
  'fam.terr.center': 'Կենտրոնական թաղամաս',
  'fam.terr.east':   'Արևելյան թաղամաս',
  'fam.terr.west':   'Արևմտյան թաղամաս',
  'fam.terr.south':  'Հարավային թաղամաս',

  // ── Quest desc keys ───────────────────────────────────
  'quest.1.desc': '🎯 Կատարել երեք հանցագործություն',
  'quest.2.desc': '🚗 Առևանգել մեկ ավտոմեքենա',
  'quest.3.desc': '💰 Վաստակել մեկ հազար հինգ հարյուր դոլար պասիվ եկամուտ',

  // ── Audit keys ────────────────────────────────────────
  'ui.logout':       'Դուրս գալ հաշվից',
  'ui.profile':      'Անձնական էջ',
  'rank.newbie':     'Սկսնակ',
  'rank.boss':       'Ղեկավար',
  'rank.godfather':  'Կնքահայր',
  'fam.create_btn':  'Հիմնադրել նոր ընտանիք',
  'fam.creating':    'Ընտանիքը ստեղծվում է, խնդրում ենք սպասել',
  'fam.invite':      'Ընտանեկան հրավեր',
  'fam.accept':      'Ընդունել հրավերը',
  'fam.decline':     'Մերժել հրավերը',
  'fam.disband':     'Կազմալուծել ընտանիքը ամբողջությամբ',
  'biz.bank_name':   'Մուտքագրեք բանկի անվանումը',
  'biz.taxi_park':   'Տաքսոպարկի կառավարում',
  'biz.vip_status':  'Հատուկ կարգավիճակ',
  'biz.income':      'Պասիվ եկամուտ',
  'board.title':     'Առաջատարների աղյուսակ',
  'board.points':    'Վարկանիշային միավորներ',
  'quest.title':     'Օրական առաջադրանքներ',
  'quest.task1':     'Կատարել երեք հանցագործություն',
  'quest.task2':     'Առևանգել մեկ ավտոմեքենա',
  'friends.search':  'Որոնել ընկերներին',
  'friends.loading': 'Որոնվում է համակարգում',
  'friends.empty':   'Ոչ ոք չի գտնվել տվյալներում',
  'chat.write':      'Գրել հաղորդագրություն',
  'ui.exp_points':   'փորձի միավորներ',
  'ui.hp_units':     'առողջության միավորներ',
  'bank.deposited':  'մուտքագրված է բանկ',
  'bank.withdrawn':  'հանված է բանկից',
  // ── Car Theft Modal ──────────────────────────
  'ct.modal.title':    '🚗 Մեքենա է գողացվել',
  'ct.carName':        'Անվանում',
  'ct.condition':      'Վիճակ',
  'ct.type':           'Տեսակ',
  'ct.btnGarage':      '🚗 Տեղափոխել ավտոտնակ',
  'ct.btnSell':        '💰 Վաճառել միանգամից',
  'ct.addedToGarageHint': 'Այս մեքենան ավելացվել է ձեր ավտոտնակում։ Ընտրեք գործողություն՝',
  'ct.soldMsg':        'Մեքենան վաճառվել է ',
  'ct.garageMsg':      'Մեքենան ավելացվել է ավտոտնակում',
  'ct.type.sport':     'Սպորտային',
  'ct.type.sedan':     'Սեդան',
  'ct.type.suv':       'Ամենագնաց',
  'ct.type.other':     'Այլ',
};

// ═══════════════════════════════════════════════════════
//   RANK NAME TRANSLATIONS
// ═══════════════════════════════════════════════════════
// Locale-agnostic rank IDs decouple the RU/HY translations from the raw
// Armenian rank strings still used internally by game logic, so editing the
// Armenian label no longer risks silently breaking the Russian mapping.
const RANK_ID_BY_HY_NAME = {
  'Դատարկապորտ': 'newbie',
  'Գրպանահատ':   'pickpocket',
  'Ավազակ':      'bandit',
  'Մաֆիոզ':      'mafioso',
  'Կապո':        'capo',
  'Դոն':         'don',
  'Կնքահայր':    'godfather'
};

const RANK_NAMES_RU = {
  newbie:     'Бродяга',
  pickpocket: 'Карманник',
  bandit:     'Бандит',
  mafioso:    'Мафиози',
  capo:       'Капо',
  don:        'Дон',
  godfather:  'Крёстный Отец'
};

const RANK_NAMES_HY = {
  newbie:     'Դատարկապորտ',
  pickpocket: 'Գրպանահատ',
  bandit:     'Ավազակ',
  mafioso:    'Մաֆիոզ',
  capo:       'Կապո',
  don:        'Դոն',
  godfather:  'Կնքահայր'
};

function getRankName(name) {
  if (!name) return name || '';
  const id = RANK_ID_BY_HY_NAME[name] || name;
  const dict = getLang() === 'ru' ? RANK_NAMES_RU : RANK_NAMES_HY;
  return dict[id] || name;
}

// ═══════════════════════════════════════════════════════
//   PUBLIC API
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
      el.dataset.i18nOrigLeadWs = (raw.match(/^\s*/) || [''])[0];
    }
    const key    = el.dataset.i18nText;
    const leadWs = el.dataset.i18nOrigLeadWs || '';
    const newTx  = (dict && dict[key] !== undefined) ? dict[key] : el.dataset.i18nOrigText;
    let done = false;
    el.childNodes.forEach(n => {
      if (n.nodeType !== Node.TEXT_NODE) return;
      if (!done) { n.textContent = leadWs + newTx; done = true; }
      else n.textContent = '';
    });
    if (!done) el.appendChild(document.createTextNode(leadWs + newTx));
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

  // 9. Rank name display refresh
  if (typeof player !== 'undefined' && player && player.rank) {
    const _rn = getRankName(player.rank);
    ['rankDisplay', 'sidebar-rank-val', 'sb-profile-rank-label', 'mob-rank-chip'].forEach(function(id) {
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

  // 10. Direct selector bindings (without data-i18n attributes)
  applyLangBySelectors();

  // 11. Re-render dynamically-built pages so their JS-generated text
  //     (families, friends, leaderboard, quests) switches language too
  ['families', 'friends', 'leaderboard', 'quests', 'inventory'].forEach(function(pageId) {
    const pg = document.getElementById('page-' + pageId);
    if (pg && pg.classList.contains('active')) {
      if (pageId === 'families' && typeof renderFamilies === 'function') renderFamilies();
      if (pageId === 'friends' && typeof renderFriendsPage === 'function') renderFriendsPage();
      if (pageId === 'leaderboard' && typeof renderLeaderboard === 'function') renderLeaderboard();
      if (pageId === 'quests' && typeof renderQuests === 'function') renderQuests();
      if (pageId === 'inventory' && typeof renderInventory === 'function') renderInventory();
    }
  });
  // 12. Car theft modal static texts (if modal is open)
  var ctModal = document.getElementById('car-theft-result-modal');
  if (ctModal && ctModal.style.display !== 'none') {
    document.querySelectorAll('#car-theft-result-modal [data-i18n]').forEach(function(el) {
      var key = el.dataset.i18n;
      if (key && t(key) !== undefined) el.textContent = t(key);
    });
    var typeEl = document.getElementById('ct-car-type');
    if (typeEl && typeof _pendingStolenCar !== 'undefined' && _pendingStolenCar) {
      var typeKey = _pendingStolenCar.type && _pendingStolenCar.type.toLowerCase();
  'ct.type.other';     'Այլ';
      if (typeKey === 'sport') typeLabel = t('ct.type.sport');
      else if (typeKey === 'sedan') typeLabel = t('ct.type.sedan');
  'ct.type.suv';       'Ամենագնաց',
      typeEl.textContent = typeLabel;
      var badge = document.getElementById('ct-car-type-badge');
      if (badge) badge.textContent = typeLabel.toUpperCase();
    }
  }
}

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
    if (value === undefined) return;

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