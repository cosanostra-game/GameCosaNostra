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
  
  // ── Notifications & UI strings (JS-generated) ─────────────────
  'notif.in_prison':        { hy: 'Բanտum եք',                           ru: 'Вы в тюрьме' },
  'notif.no_energy2':       { hy: 'Էnergia chi heriqum',                  ru: 'Недостаточно энергии' },
  'notif.unconscious':      { hy: 'Ангитакиц еk. Бужвек hivandanоcum.',   ru: 'Вы без сознания. Лечитесь в больнице.' },
  'notif.unconscious2':     { hy: 'Ангитакиц еk.',                        ru: 'Вы без сознания.' },
  'notif.no_energy3':       { hy: 'Эnergia chka',                         ru: 'Нет энергии' },
  'notif.garage_full':      { hy: 'Автотнакы лиkn е',                     ru: 'Гараж заполнен' },
  'notif.garage_full2':     { hy: 'Автотнак лиc е',                       ru: 'Гараж полон' },
  'notif.car_removed':      { hy: 'Мекенан ханвец',                       ru: 'Машина снята' },
  'notif.car_selected':     { hy: 'Ынтрвец (+5% шанс)',                   ru: 'Выбрана (+5% шанс)' },
  'notif.garage_expanded':  { hy: 'Автотнак +5 тех ✅',                   ru: 'Гараж расширен +5 мест ✅' },
  'notif.need_2500':        { hy: 'Петк е $2,500',                        ru: 'Нужно $2,500' },
  'notif.no_money':         { hy: 'Гумар chi heriqум',                    ru: 'Недостаточно денег' },
  'notif.insufficient':     { hy: 'Анбав. мидзоц',                       ru: 'Недостаточно средств' },
  'notif.transfer_bad_acc': { hy: '⚠️ Хашвехамеры схале — AM + 6 цанк',  ru: '⚠️ Неверный счёт — нужно AM + 6 цифр (пр. AM123456)' },
  'notif.transfer_no_amt':  { hy: '⚠️ Гумары ншет',                      ru: '⚠️ Укажите сумму' },
  'notif.transfer_self':    { hy: '⚠️ Иренид хашвин чи кареликаров',     ru: '⚠️ Нельзя перевести себе' },
  'notif.transfer_no_bank': { hy: '⚠️ Банк-ум чка бававар гумар',        ru: '⚠️ Недостаточно денег в банке' },
  'notif.transfer_done':    { hy: 'попоханцвец ✅',                        ru: 'переведено ✅' },
  'notif.transfer_fail':    { hy: 'Попохансумы чджвец',                   ru: 'Перевод не удался' },
  'notif.loan_max':         { hy: 'Макс. $50,000',                        ru: 'Макс. $50,000' },
  'notif.loan_none':        { hy: 'Вarians. чка',                         ru: 'Кредита нет' },
  'notif.loan_no_cash':     { hy: 'К. г. м.',                             ru: 'Недостаточно наличных' },
  'notif.wrong_amount':     { hy: 'Схал г.',                              ru: 'Неверная сумма' },
  'notif.arrested':         { hy: '🚔 Бантел',                            ru: '🚔 Арестован' },
  'notif.bribe_ok':         { hy: '💸 Кашарк ынд.',                       ru: '💸 Взятка принята' },
  'notif.no_1000':          { hy: '$1000 чка',                            ru: 'Нет $1,000' },
  'notif.no_2500':          { hy: '$2,500 чка',                           ru: 'Нет $2,500' },
  'notif.escape_ok':        { hy: '🏃 Факустн ajогвец!',                  ru: '🏃 Побег удался!' },
  'notif.escape_fail':      { hy: '❌ Факусты джакогвец | HP -30',        ru: '❌ Побег провалился | HP -30' },
  'notif.biz_slot_add':     { hy: 'Б.Сл. +5',                            ru: 'Бизнес-слотов +5' },
  'notif.no_100k':          { hy: '$100,000 чка',                         ru: 'Нет $100,000' },
  'notif.no_200k':          { hy: '$200,000 чка',                         ru: 'Нет $200,000' },
  'notif.slots_full':       { hy: 'Слотнеры лиkn ен',                    ru: 'Слоты заполнены' },
  'notif.enter_name':       { hy: 'Грек анун',                            ru: 'Введите название' },
  'notif.no_75k':           { hy: '$75,000 чка',                          ru: 'Нет $75,000' },
  'notif.no_150k':          { hy: '$150,000 чка',                         ru: 'Нет $150,000' },
  'notif.no_300k':          { hy: '$300,000 чка',                         ru: 'Нет $300,000' },
  'notif.rep_30':           { hy: 'Хамбавы петк е гонε 30',              ru: 'Нужна репутация минимум 30' },
  'notif.rep_50':           { hy: 'Хамбавы петк е гонε 50',              ru: 'Нужна репутация минимум 50' },
  'notif.rep_40':           { hy: 'Хамбавы петк е гонε 40',              ru: 'Нужна репутация минимум 40' },
  'notif.no_dirty':         { hy: 'Келт фок чка',                         ru: 'Нет грязных денег' },
  'notif.enter_family_name':{ hy: 'Грек ынт. анун',                       ru: 'Введите название семьи' },
  'notif.rank_req_mafioso': { hy: 'Кочумы бав. че (К. Мафиоз)',          ru: 'Нужен ранг Мафиозо' },
  'notif.no_250k':          { hy: '$250,000 чка',                         ru: 'Нет $250,000' },
  'notif.family_name_taken':{ hy: 'Айд ануны ардж. ка',                  ru: 'Название уже занято' },
  'notif.no_50k':           { hy: '$50,000 чка',                          ru: 'Нет $50,000' },
  'notif.no_10k':           { hy: '$10,000 чка',                          ru: 'Нет $10,000' },
  'notif.already_have':     { hy: 'Ардж. унес',                           ru: 'Уже есть' },
  'notif.family_pow':       { hy: '💪 Уж',                                ru: '💪 Сила' },
  'notif.family_mem':       { hy: 'Андам +1',                             ru: 'Участник +1' },
  'notif.max_bet':          { hy: 'Макс. хайладруйтк',                    ru: 'Макс. ставка' },
  'notif.only_mafioso':     { hy: 'Миайн Мафиоз ев барк.',               ru: 'Только Мафиозо и выше' },
  'notif.casino_sorry':     { hy: 'Афсос',                                ru: 'Не повезло' },
  'notif.bad_amount':       { hy: 'Схал кананак',                         ru: 'Неверное количество' },
  'notif.rented':           { hy: 'Вардзов трвец',                        ru: 'Сдано в аренду' },
  'notif.unrented':         { hy: 'Ханвец',                               ru: 'Снято с аренды' },
  'notif.already_full_hp':  { hy: 'Дук ардж. лрив акогч ек',             ru: 'Вы уже полностью здоровы' },
  'notif.train_hp':         { hy: '🏋️ Max HP +5',                         ru: '🏋️ Max HP +5' },
  'notif.train_en':         { hy: '🧠 Max Energy +5',                      ru: '🧠 Max Energy +5' },
  'notif.no_money5':        { hy: 'Вох бававар гумар ($2000)',             ru: 'Недостаточно денег ($2000)' },
  'notif.rep_max':          { hy: 'Хамбавы ардж. максималн е',            ru: 'Репутация уже максимальная' },
  'notif.rep_paid':         { hy: '🤝 Вчарвец. Хамбав +5',               ru: '🤝 Оплачено. Репутация +5' },
  'notif.stash_no':         { hy: 'Пахестум айдканчка',                   ru: 'В тайнике недостаточно' },
  'notif.quests_refresh':   { hy: 'Хндирнеры тармацвецин',               ru: 'Задания обновлены' },
  'notif.arrested2':        { hy: '👮 Кашарецик востиканин -$500',        ru: '👮 Дали взятку полиции -$500' },
  'notif.cloud_loaded':     { hy: '☁️ Cloud save берквец',                ru: '☁️ Облачное сохранение загружено' },
  'notif.freed':            { hy: '🕊 Азат ек!',                          ru: '🕊 Вы свободны!' },
  'notif.friend_req_ok':    { hy: '✅ Ынкертян айтн угхарквец',           ru: '✅ Заявка в друзья отправлена' },
  'notif.friend_added':     { hy: '✅ Ынкер авелацвец!',                  ru: '✅ Друг добавлен!' },
  'notif.friend_declined':  { hy: 'Хайты мержвец',                        ru: 'Заявка отклонена' },
  'notif.daily_bonus':      { hy: 'Ameoria bонус +$100!',                 ru: 'Ежедневный бонус +$100!' },
  'notif.avatar_updated':   { hy: '📸 Avatar-ы тармацвец',                ru: '📸 Аватар обновлён' },
  'notif.avatar_error':     { hy: 'Avatar схал',                          ru: 'Ошибка аватара' },
  'notif.profile_updated':  { hy: '✅ Профилы тармацвец',                 ru: '✅ Профиль обновлён' },
  'notif.error_generic':    { hy: 'Схал',                                 ru: 'Ошибка' },
  'notif.delete_error':     { hy: 'Джнджелн схалвец',                     ru: 'Ошибка удаления' },
  'notif.new_rank':         { hy: '⭐ Нор кочум',                         ru: '⭐ Новый ранг' },
  'notif.get_daily':        { hy: 'Станал $100',                          ru: 'Получить $100' },
  'notif.daily_received':   { hy: 'Стацвац ✓',                           ru: 'Получено ✓' },
  'page.no_activity':       { hy: 'Дер горцогутюннер чкан',              ru: 'Действий пока нет' },
  'page.garage_empty':      { hy: 'Автотнакы датарк е',                   ru: 'Гараж пустой' },
  'btn.registering':        { hy: 'Катарвум е...',                        ru: 'Регистрация...' },
  'btn.register':           { hy: 'Грацнвел ев Хайкал',                  ru: 'Зарегистрироваться и Играть' },
  'btn.logging_in':         { hy: 'Ствуцворкс...',                        ru: 'Входим...' },
  'btn.login':              { hy: 'Мтнел Хайg',                           ru: 'Войти в Игру' },
  'btn.transferring':       { hy: '⏳ Попохансвоум...',                   ru: '⏳ Переводим...' },
  'btn.transfer':           { hy: 'Фоханцел',                             ru: 'Перевести' },
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
