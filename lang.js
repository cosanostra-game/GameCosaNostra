// lang.js — Cosa Nostra i18n System (Հայerén / Русский)
// toggleLang() — переключить язык
// t('key')     — получить перевод
// applyLang()  — обновить весь DOM

window.LANG_CURRENT = localStorage.getItem('cosaNostra_lang') || 'hy';

const LANG_DICT = {
  'lang.btn':                 { hy: '🇷🇺 Ρус',      ru: '🇦🇲 Հայ' },
  'topbar.theme':             { ru: 'Тема' },
  'nav.section.main':         { ru: 'Основное' },
  'nav.section.finance':      { ru: 'Финансы и Имущество' },
  'nav.section.underground':  { ru: 'Подполье' },
  'nav.section.extra':        { ru: 'Дополнительно' },
  'nav.main':                 { ru: 'Главная' },
  'nav.crimes':               { ru: 'Преступления' },
  'nav.cars':                 { ru: 'Угон авто' },
  'nav.garage':               { ru: 'Гараж' },
  'nav.inventory':            { ru: 'Арсенал' },
  'nav.dealership':           { ru: 'Автосалон' },
  'nav.bank':                 { ru: 'Банк' },
  'nav.business':             { ru: 'Бизнес' },
  'nav.casino':               { ru: 'Казино' },
  'nav.crypto':               { ru: 'Крипто' },
  'nav.estate':               { ru: 'Недвижимость' },
  'nav.stash':                { ru: 'Тайник' },
  'nav.prison':               { ru: 'Тюрьма' },
  'nav.hospital':             { ru: 'Больница' },
  'nav.training':             { ru: 'Тренировка' },
  'nav.reputation':           { ru: 'Репутация' },
  'nav.families':             { ru: 'Семьи' },
  'nav.friends':              { ru: 'Друзья' },
  'nav.messages':             { ru: 'Сообщения' },
  'nav.quests':               { ru: 'Задания дня' },
  'nav.daynight':             { ru: 'День/Ночь' },
  'nav.events':               { ru: 'События' },
  'nav.stats':                { ru: 'Статистика' },
  'nav.leaderboard':          { ru: 'Лидерборд' },
  'nav.settings':             { ru: 'Настройки' },
  'nav.profile':              { ru: 'Мой Профиль' },
  'main.title':               { ru: 'Главная база' },
  'crimes.title':             { ru: 'Преступления' },
  'cars.title':               { ru: 'Угон Автомобилей' },
  'garage.title':             { ru: 'Гараж' },
  'inv.title':                { ru: 'Арсенал (Инвентарь)' },
  'dealer.title':             { ru: 'Автосалон' },
  'bank.title':               { ru: 'Центральный Банк' },
  'biz.title':                { ru: 'Бизнес и Отмывание' },
  'prison.title':             { ru: 'Тюрьма' },
  'casino.title':             { ru: 'Казино' },
  'crypto.title':             { ru: 'Крипто' },
  'estate.title':             { ru: 'Недвижимость' },
  'stash.title':              { ru: 'Тайник (Сейф)' },
  'hospital.title':           { ru: 'Больница' },
  'training.title':           { ru: 'Тренировка' },
  'rep.title':                { ru: 'Репутация' },
  'quests.title':             { ru: 'Задания Дня' },
  'stats.title':              { ru: 'Статистика' },
  'leaderboard.title':        { ru: 'Лидерборд' },
  'events.title':             { ru: 'События' },
  'daynight.title':           { ru: 'Цикл Времени' },
  'settings.title':           { ru: 'Настройки' },
  'families.title':           { ru: 'Семьи' },
  'profile.title':            { ru: 'Мой Профиль' },
  'prison.bribe':             { ru: '💰 Взятка ($1,000)' },
  'prison.escape':            { ru: '🚀 Побег ($2,500)' },
  'auth.login_btn':           { ru: 'Войти в Игру' },
  'auth.register_btn':        { ru: 'Зарегистрироваться и Играть' },
  'bank.personal':            { ru: 'Личный Счёт' },
  'bank.transfer.title':      { ru: 'Банковский Перевод' },
  'bank.loan.title':          { ru: 'Кредитная Линия' },
  'bank.deposit':             { ru: 'Депозит' },
  'bank.withdraw':            { ru: 'Снять' },
  'bank.transfer.btn':        { ru: 'Перевести' },
  'bank.loan.take':           { ru: 'Взять' },
  'bank.loan.repay':          { ru: 'Погасить' },
  'bank.amount_ph':           { ru: 'Сумма...' },
  'bank.transfer.acc_ph':     { ru: 'Номер счёта (AM123456)' },
  'casino.red':               { ru: '🔴 КРАСНОЕ (x2)' },
  'casino.black':             { ru: '⚫ ЧЁРНОЕ (x2)' },
  'casino.spin':              { ru: '🎰 КРУТИТЬ' },
  'crypto.buy':               { ru: 'Купить' },
  'crypto.sell':              { ru: 'Продать' },
  'hospital.light.btn':       { ru: 'Вылечиться' },
  'hospital.full.btn':        { ru: 'Полное Лечение' },
  'training.hp.btn':          { ru: 'Тренироваться' },
  'training.energy.btn':      { ru: 'Тренироваться' },
  'rep.donate.btn':           { ru: 'Заплатить' },
  'crimes.pocket.btn':        { ru: 'Совершить' },
  'crimes.shop.btn':          { ru: 'Совершить' },
  'crimes.extortion.btn':     { ru: 'Выбить деньги' },
  'crimes.smuggle.btn':       { ru: 'Перевезти' },
  'crimes.bank.btn':          { ru: 'Ограбить' },
  'cars.cheap.btn':           { ru: 'Угнать' },
  'cars.exp.btn':             { ru: 'Угнать' },
  'inv.tab.shop':             { ru: '🛒 Магазин' },
  'inv.tab.owned':            { ru: '🎒 Мой Арсенал' },
  'stash.in_btn':             { ru: 'Спрятать' },
  'stash.out_btn':            { ru: 'Достать' },
  'settings.save.btn':        { ru: 'Сохранить' },
  'settings.load.btn':        { ru: 'Загрузить' },
  'settings.reset.btn':       { ru: 'Сбросить' },
  'profile.edit_btn':         { ru: 'Редактировать' },
  'profile.cash':             { ru: 'Наличные' },
  'profile.bank':             { ru: 'Банк' },
  'profile.xp':               { ru: 'XP Очки' },
  'profile.crimes':           { ru: 'Прест.' },
  'profile.garage':           { ru: 'Автопарк' },
  'profile.hp':               { ru: 'Жизнь (HP)' },
  'profile.since':            { ru: 'Дата Регистрации' },
  'profile.level':            { ru: 'Уровень' },
  'modal.close':              { ru: 'Закрыть' },
  'modal.buy':                { ru: 'Купить' },
  'friends.search_ph':        { ru: 'Введите nickname...' },
  'messages.select_friend':   { ru: 'Выберите друга для общения' },
  'messages.input_ph':        { ru: 'Написать сообщение...' },
  'log.title':                { ru: 'Журнал' },
  // Dynamic t() keys used in JS
  'notif.success':            { hy: 'Հաջողվեց! +$',   ru: 'Успех! +$' },
  'notif.caught':             { hy: 'Ոստիկանը բռնեց!', ru: 'Поймала полиция!' },
  'notif.not_enough_money':   { hy: 'Բավարար փող չկա!', ru: 'Недостаточно денег!' },
  'notif.low_energy':         { hy: 'Բ. Էnergia չka!', ru: 'Мало энергии!' },
  'notif.low_hp':             { hy: 'Բ. HP չka!',      ru: 'Мало HP!' },
  'notif.saved':              { hy: '✅ Պахпанвец!',    ru: '✅ Сохранено!' },
  'notif.loaded':             { hy: '✅ Бернвец!',      ru: '✅ Загружено!' },
  'notif.healed':             { hy: '❤️ Бужвецит!',    ru: '❤️ Вылечен!' },
  'notif.daily_claimed':      { hy: '✅ Бонус $100 стацвец!', ru: '✅ Бонус $100 получен!' },
  'notif.daily_wait':         { hy: 'Dex 24 жам!',     ru: 'Ещё 24 часа!' },
  'notif.prison_free':        { hy: 'Hy ков бантиц!',  ru: 'Вышел из тюрьмы!' },
  'notif.garage_empty':       { hy: 'Автотнакы датарk э', ru: 'Гараж пустой' },
  'cycle.day':                { hy: '☀️ Ցereka',        ru: '☀️ День' },
  'cycle.night':              { hy: '🌙 Гишер',         ru: '🌙 Ночь' },

  // ── NEW KEY SCHEME (landing.html) ────────────────────────────
  // Auth
  'auth.loginBtn':            { ru: 'Войти в Игру' },
  'auth.loginTab':            { ru: 'Вход' },
  'auth.registerBtn':         { ru: 'Зарегистрироваться и Играть' },
  'auth.registerTab':         { ru: 'Регистрация' },
  'auth.remember':            { ru: 'Запомнить меня (авто-вход)' },

  // Bank
  'bank.loan':                { ru: 'Кредитная Линия' },
  'bank.personal':            { ru: 'Личный Счёт' },
  'bank.transfer':            { ru: 'Банковский Перевод' },

  // Business
  'biz.arms':                 { ru: 'Оружейная Мастерская' },
  'biz.arms.desc':            { ru: 'Тяжёлый, опасный, но невероятно прибыльный теневой бизнес.' },
  'biz.casino':               { ru: 'Подпольное Казино' },
  'biz.casino.desc':          { ru: 'Только для мафии. Приносит большой доход, но требует связей.' },
  'biz.dirtyMoney':           { ru: '🚫💰 Грязные Деньги:' },
  'biz.launderDesc':          { ru: 'Доходы от стриптиз-клуба и оружейной мастерской — «грязные». Через фонд можно их отмыть — 30% вычитается под видом «благотворительности».' },
  'biz.launderSub':           { ru: '(Отмывание денег)' },
  'biz.launderTitle':         { ru: 'Благотворительный Фонд' },
  'biz.market':               { ru: 'Рынок' },
  'biz.myTab':                { ru: 'Мои Бизнесы' },
  'biz.price75':              { ru: 'Стоимость: $75,000' },
  'biz.price150':             { ru: 'Стоимость: $150,000' },
  'biz.price200':             { ru: 'Стоимость: $200,000' },
  'biz.price300':             { ru: 'Стоимость: $300,000' },
  'biz.restaurant':           { ru: 'Ресторан (Легальный)' },
  'biz.restaurant.desc':      { ru: 'Чистый и легальный бизнес. Низкий, но стабильный доход. Макс. Ур.: 15' },
  'biz.slotsLabel':           { ru: 'Слоты Бизнеса' },
  'biz.strip':                { ru: 'Стриптиз Клуб 🔞' },
  'biz.strip.desc':           { ru: 'Теневые развлечения, грязные деньги. Реп.: 40+ | Доход: Грязные деньги' },

  // Buttons
  'btn.black':                { ru: '⚫ ЧЁРНОЕ (x2)' },
  'btn.bribe':                { ru: '💰 Взятка ($1,000)' },
  'btn.buy':                  { ru: 'Купить' },
  'btn.commit':               { ru: 'Совершить' },
  'btn.deleteProfile':        { ru: 'Удалить Профиль' },
  'btn.deposit':              { ru: 'Депозит' },
  'btn.donate':               { ru: 'Заплатить' },
  'btn.edit':                 { ru: 'Редактировать' },
  'btn.escape':               { ru: '🚀 Побег ($2,500)' },
  'btn.expand':               { ru: 'Расширить +5 ($2,500)' },
  'btn.expand2':              { ru: 'Расширить ($100,000)' },
  'btn.extort':               { ru: 'Вымогать' },
  'btn.found':                { ru: 'Основать' },
  'btn.heal25':               { ru: 'Вылечиться' },
  'btn.healFull':             { ru: 'Полное Лечение' },
  'btn.hide':                 { ru: 'Спрятать' },
  'btn.launder':              { ru: '🧹 Отмыть (70%)' },
  'btn.launderAll':           { ru: 'Отмыть Всё' },
  'btn.load':                 { ru: 'Загрузить' },
  'btn.logout':               { ru: 'Выход' },
  'btn.red':                  { ru: '🔴 КРАСНОЕ (x2)' },
  'btn.repayLoan':            { ru: 'Погасить' },
  'btn.reset':                { ru: 'Сбросить' },
  'btn.rob':                  { ru: 'Ограбить' },
  'btn.save':                 { ru: 'Сохранить' },
  'btn.sell':                 { ru: 'Продать' },
  'btn.smuggle':              { ru: 'Перевезти' },
  'btn.spin':                 { ru: '🎰 КРУТИТЬ' },
  'btn.steal':                { ru: 'Угнать' },
  'btn.take':                 { ru: 'Снять' },
  'btn.takeLoan':             { ru: 'Взять' },
  'btn.train':                { ru: 'Тренироваться' },
  'btn.transfer':             { ru: 'Перевести' },
  'btn.withdraw':             { ru: 'Снять' },

  // Cars
  'car.class0':               { ru: '🚗 Эконом Класс' },
  'car.class0.desc':          { ru: 'Обычный или старый автомобиль. Низкий риск, небольшой доход.' },
  'car.class1':               { ru: '🚙 Бизнес/Спорт' },
  'car.class1.desc':          { ru: 'Дорогие и быстрые машины. Высокий риск на улице, большие деньги на чёрном рынке.' },
  'cars.desc':                { ru: 'Угнанные машины можно продать или использовать в других преступлениях (снижает риск).' },

  // Casino
  'casino.roulette':          { ru: 'Рулетка' },
  'casino.slots':             { ru: 'Игровой Автомат' },

  // Crimes
  'crime.bankrob':            { ru: '🏦 Ограбление Банка' },
  'crime.bankrob.desc':       { ru: 'Только для опытных. Наибольший риск, но крупные деньги.' },
  'crime.extort':             { ru: '💼 Вымогательство (Extortion)' },
  'crime.extort.desc':        { ru: 'Требуй «крышевание» с местных торговцев. Нужна хорошая репутация.' },
  'crime.pocket':             { ru: '🎯 Карманная Кража' },
  'crime.pocket.desc':        { ru: 'Мелкое дело, мелкие деньги. Самый лёгкий вариант для новичков.' },
  'crime.shop':               { ru: '🏪 Ограбить Магазин' },
  'crime.shop.desc':          { ru: 'Средний риск, хорошие деньги. Ночью выполнять безопаснее.' },
  'crime.smuggle':            { ru: '📦 Контрабанда' },
  'crime.smuggle.desc':       { ru: 'Перевозка нелегальных товаров через границу города. Высокая оплата, высокий риск.' },

  // Crypto
  'crypto.trade':             { ru: 'Торговля' },
  'crypto.updateNote':        { ru: 'Зарабатывать на улице непросто. Оцени риски перед тем как действовать.' },

  // Day/Night cycle
  'cycle.current':            { ru: 'Текущее время' },
  'cycle.dayDesc':            { ru: '☀️ Днём' },
  'cycle.nightDesc':          { ru: '🌙 Ночью' },
  'cycle.status':             { ru: 'Статус:' },

  // Daily bonus
  'daily.claim':              { ru: 'Получить $100' },
  'daily.label':              { ru: 'Ежедневный Бонус' },

  // Dealership
  'dealer.newTab':            { ru: 'Новые Машины' },
  'dealer.usedTab':           { ru: 'Б/У' },

  // Estate
  'estate.myTab':             { ru: 'Моя Недвижимость' },

  // Events
  'events.desc':              { ru: 'История случайных событий, происходящих в городе.' },
  'events.empty':             { ru: 'Событий пока нет...' },

  // Families
  'families.desc':            { ru: '5 известных мафиозных семей города, поделивших территорию. Достигни звания Мафиозо' },

  // Friends
  'friends.incoming':         { ru: 'Входящие Заявки' },
  'friends.list':             { ru: 'Список Друзей' },
  'friends.title':            { ru: 'Друзья' },

  // Garage
  'garage.slots':             { ru: 'Места' },

  // Hospital
  'hosp.full':                { ru: 'Полное Восстановление' },
  'hosp.fullDesc':            { ru: 'Восстанавливает полное HP и энергию.' },
  'hosp.fullPrice':           { ru: 'Стоимость: $1,500' },
  'hosp.hp':                  { ru: 'Здоровье (HP):' },
  'hosp.light':               { ru: 'Лёгкое Лечение' },
  'hosp.lightDesc':           { ru: 'Восстанавливает 25 HP. Полезно при незначительных травмах.' },
  'hosp.lightPrice':          { ru: 'Стоимость: $200' },

  // Inventory
  'inv.armor':                { ru: '🛡️ Броня и Одежда' },
  'inv.crimeBonus':           { ru: 'Бон.' },
  'inv.desc':                 { ru: 'Оружие и броня влияют на % успеха преступления и потерянный HP:' },
  'inv.equippedArmor':        { ru: '🛡️ Надетая Броня:' },
  'inv.equippedWeapon':       { ru: '🔫 Экипированное Оружие:' },
  'inv.hpProt':               { ru: 'Защита HP' },
  'inv.myArmor':              { ru: '🛡️ Моя Броня' },
  'inv.myWeapons':            { ru: '⚔️ Моё Оружие' },
  'inv.ownedTab':             { ru: '🎒 Мой Арсенал' },
  'inv.shopTab':              { ru: '🛒 Магазин' },
  'inv.weapons':              { ru: '⚔️ Оружие' },

  // Loading
  'loading':                  { ru: 'Загрузка...' },

  // Main page
  'main.bankLabel':           { ru: 'Личный Банковский Счёт' },
  'main.quickActions':        { ru: '⚡ Быстрые Действия' },

  // Map
  'map.desc':                 { ru: 'На карте города ты видишь свою территорию, бизнес и важные объекты.' },

  // Menu (sidebar nav)
  'menu.bank':                { ru: 'Банк' },
  'menu.business':            { ru: 'Бизнес' },
  'menu.cars':                { ru: 'Угон Авто' },
  'menu.casino':              { ru: 'Казино' },
  'menu.crimes':              { ru: 'Преступления' },
  'menu.crypto':              { ru: 'Крипто' },
  'menu.daynight':            { ru: 'Ночь/День' },
  'menu.dealership':          { ru: 'Автосалон' },
  'menu.estate':              { ru: 'Недвижимость' },
  'menu.events':              { ru: 'События' },
  'menu.families':            { ru: 'Семьи' },
  'menu.friends':             { ru: 'Друзья' },
  'menu.garage':              { ru: 'Гараж' },
  'menu.hospital':            { ru: 'Больница' },
  'menu.inventory':           { ru: 'Арсенал' },
  'menu.leaderboard':         { ru: 'Лидерборд' },
  'menu.main':                { ru: 'Главная' },
  'menu.map':                 { ru: 'Карта Города' },
  'menu.messages':            { ru: 'Сообщения' },
  'menu.prison':              { ru: 'Тюрьма' },
  'menu.profile':             { ru: 'Мой Профиль' },
  'menu.quests':              { ru: 'Задания Дня' },
  'menu.reputation':          { ru: 'Репутация' },
  'menu.settings':            { ru: 'Настройки' },
  'menu.stash':               { ru: 'Тайник' },
  'menu.stats':               { ru: 'Статистика' },
  'menu.training':            { ru: 'Тренировка' },

  // Page titles
  'page.bank':                { ru: 'Центральный Банк' },
  'page.business':            { ru: 'Бизнес и Отмывание' },
  'page.cars':                { ru: 'Угон Автомобилей' },
  'page.casino':              { ru: 'Игровой Дом (Казино)' },
  'page.crimes':              { ru: 'Преступления' },
  'page.crypto':              { ru: 'Крипто' },
  'page.daynight':            { ru: 'Цикл Времени' },
  'page.dealership':          { ru: 'Автосалон' },
  'page.estate':              { ru: 'Недвижимость' },
  'page.events':              { ru: 'События' },
  'page.families':            { ru: 'Семьи' },
  'page.garage':              { ru: 'Гараж' },
  'page.hospital':            { ru: 'Больница' },
  'page.inventory':           { ru: 'Арсенал (Инвентарь)' },
  'page.leaderboard':         { ru: 'Лидерборд' },
  'page.main':                { ru: 'Главная База' },
  'page.map':                 { ru: 'Карта Лос-Анджелеса' },
  'page.prison':              { ru: 'Тюрьма' },
  'page.profile':             { ru: 'Мой Профиль' },
  'page.quests':              { ru: 'Задания Дня' },
  'page.reputation':          { ru: 'Репутация' },
  'page.settings':            { ru: 'Настройки' },
  'page.stash':               { ru: 'Тайник (Сейф)' },
  'page.stats':               { ru: 'Статистика' },
  'page.training':            { ru: 'Тренировка' },

  // Pre-loader screen
  'pre.loading':              { ru: 'Загрузка...' },
  'pre.quote':                { ru: '«У каждого своя судьба...»' },
  'pre.sub':                  { ru: 'Вход в криминальный мир' },

  // Prison
  'prison.bribeTip':          { ru: 'Взятка = 100% успех, Побег = 50% успех и большой риск.' },
  'prison.free':              { ru: 'На Свободе' },
  'prison.freeSub':           { ru: 'Вы чисты перед законом (пока что).' },
  'prison.locked':            { ru: 'ВЫ ЗА РЕШЁТКОЙ' },

  // Profile
  'profile.accInfo':          { ru: 'Информация об Аккаунте' },
  'profile.cars':             { ru: 'Автопарк' },
  'profile.created':          { ru: 'Звание' },
  'profile.welcome':          { ru: 'Добро пожаловать' },

  // Quick actions
  'quick.pocket':             { ru: 'Карманник' },
  'quick.shop':               { ru: 'Ограбить Магазин' },

  // Reputation
  'rep.desc':                 { ru: 'Твоя репутация в городе. Высокая репутация снижает риск ареста и открывает новые бизнесы.' },
  'rep.donDesc':              { ru: 'Пожертвовав деньги, вы покупаете тишину города: +5 Репутации' },
  'rep.donPrice':             { ru: 'Стоимость: $2,000' },
  'rep.donation':             { ru: 'Благотворительность / Взятка Мэрии' },

  // Sidebar sections
  'section.extra':            { ru: 'Дополнительно' },
  'section.finance':          { ru: 'Финансы и Имущество' },
  'section.main':             { ru: 'Основное' },
  'section.underground':      { ru: 'Подполье' },

  // Settings
  'set.bg':                   { ru: 'Фоновое Изображение' },
  'set.bgDesc':               { ru: 'Выберите фоновое изображение из своей папки:' },
  'set.langDesc':             { ru: 'Выберите язык игры:' },
  'set.langTitle':            { ru: 'Выбор Языка' },
  'set.load':                 { ru: 'Загрузить Игру' },
  'set.loadDesc':             { ru: 'Загрузить последнее сохранённое состояние:' },
  'set.reset':                { ru: 'Удалить Всё' },
  'set.resetDesc':            { ru: 'Обнулить весь прогресс:' },
  'set.save':                 { ru: 'Сохранить Игру' },
  'set.saveDesc':             { ru: 'Сохраните свой прогресс в браузере:' },

  // Sidebar
  'sidebar.rank':             { ru: 'Звание' },

  // Stash
  'stash.desc':               { ru: 'Эти деньги защищены от полицейских конфискаций или других потерь.' },
  'stash.stored':             { ru: 'Сохранено' },

  // Stats
  'stats.cars':               { ru: 'Репутация' },
  'stats.crimes':             { ru: 'Общая Мощность' },
  'stats.earnings':           { ru: 'Автопарк' },
  'stats.time':               { ru: 'Недвижимость' },
  'stats.timeUnit':           { ru: 'мин' },

  // Topbar
  'topbar.energy':            { ru: '⚡ Энергия' },

  // Training
  'train.desc':               { ru: 'Повысьте свои максимальные физические и умственные параметры.' },
  'train.mentDesc':           { ru: '+5 Максимальной Энергии' },
  'train.mental':             { ru: 'Умственная Подготовка' },
  'train.phys':               { ru: 'Физическая Подготовка' },
  'train.physDesc':           { ru: '+5 Максимального HP' },
  'train.price500':           { ru: 'Стоимость: $500' },
};

// ── Snapshot of original Armenian DOM text ──────────────────────
const _hySnap = {};

function _snapshotHy() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (_hySnap[key]) return;
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      _hySnap[key] = el.getAttribute(attr) || '';
    } else {
      const tn = Array.from(el.childNodes).filter(n => n.nodeType === 3);
      _hySnap[key] = tn.length ? tn[tn.length - 1].textContent.trim()
                               : el.textContent.trim();
    }
  });
}

// ── Core: translate one key ──────────────────────────────────────
window.t = function(key) {
  if (window.LANG_CURRENT === 'hy') {
    return _hySnap[key] || (LANG_DICT[key] && LANG_DICT[key].hy) || key;
  }
  const e = LANG_DICT[key];
  return (e && e.ru) || _hySnap[key] || key;
};

// ── Apply translations to all [data-i18n] elements ───────────────
window.applyLang = function() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const val  = window.t(key);
    if (!val) return;
    if (attr) {
      el.setAttribute(attr, val);
    } else {
      const tn = Array.from(el.childNodes).filter(n => n.nodeType === 3);
      if (tn.length) {
        tn[tn.length - 1].textContent = val;
      } else if (!el.querySelector('i,img,svg,span')) {
        el.textContent = val;
      }
    }
  });
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = window.LANG_CURRENT === 'hy' ? '🇷🇺 Ρус' : '🇦🇲 Հայ';
  document.documentElement.lang = window.LANG_CURRENT;
};

// ── Toggle hy ↔ ru ───────────────────────────────────────────────
window.toggleLang = function() {
  window.LANG_CURRENT = window.LANG_CURRENT === 'hy' ? 'ru' : 'hy';
  localStorage.setItem('cosaNostra_lang', window.LANG_CURRENT);
  window.applyLang();
};

// ── Init on DOM ready ────────────────────────────────────────────
function _langInit() {
  _snapshotHy();
  if (window.LANG_CURRENT !== 'hy') window.applyLang();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _langInit);
} else {
  _langInit();
}
