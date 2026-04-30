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
