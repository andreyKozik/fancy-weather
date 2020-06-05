import { date, weekday, month } from './globalVariables.js';

export function setDate() {

    let weekdayShort = weekday[date.getDay()][localStorage.getItem('lastLanguage')][0].slice(0, 3);
    let dayOfMonth = date.getDate();
    let monthLong = month[localStorage.getItem('lastLanguage')][date.getMonth()];

    document.querySelector(".date").innerText = `${weekdayShort} ${dayOfMonth} ${monthLong}`;
}