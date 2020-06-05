import { weekday, month } from './globalVariables.js';

export function checkTime(i) {
  const x = i < 10 ? (i = `0${i}`) : i;
  return x;
}

export function time() {

  setInterval(() => {

    const ml = Date.parse(new Date()) - (60 * localStorage.getItem('TimezoneOffset') * 60 * 1000) + (localStorage.getItem('timezone') * 1000)
    const localTime = new Date(ml);
    let timesOfDay = 'night'
    let weekdayShort = weekday[localTime.getDay()][localStorage.getItem('lastLanguage')][0].slice(0, 3);
    let dayOfMonth = localTime.getDate();
    let monthLong = month[localStorage.getItem('lastLanguage')][localTime.getMonth()];

    document.querySelector(".date").innerText = `${weekdayShort} ${dayOfMonth} ${monthLong}`;

    let h = localTime.getHours() 
    let m = localTime.getMinutes();
    let s = localTime.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.querySelector('.timeIp').innerHTML = `${h}:${m}:${s}`;

    h >= 5 && h <= 10 ? timesOfDay = 'morning' :
    h > 10 && h <= 16 ? timesOfDay = 'afternoon' :
    h > 16 && h <= 22 ? timesOfDay = 'evening' :
    timesOfDay = 'night';

    localStorage.setItem('timesOfDay', timesOfDay)

  }, 1000);

}


