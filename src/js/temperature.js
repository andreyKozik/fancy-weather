import { date, weekday, iconWeather } from './globalVariables.js';
import { yandexTranslate } from './translate.js';
import { lastLanguage, lastDegree, chooseLanguage } from './localStorage.js';

export async function getTemperature(lat, lon) {
	const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=Be&units=metric&cnt=30&APPID=cd46eb43dab8940de2d4fe4ed3d1f274`;
	const res = await fetch(url);
	const data = await res.json();

	const timezone = data.city.timezone
	localStorage.setItem('timezone', timezone);

	const weatherId = data.list[0].weather[0].id;
	localStorage.setItem('weatherId', weatherId);

	const weatherIconToday = data.list[0].weather[0].icon;
	const weatherIcon1 = data.list[1].weather[0].icon;
	const weatherIcon2 = data.list[2].weather[0].icon;
	const weatherIcon3 = data.list[3].weather[0].icon;

	document.querySelector('.temperature').innerText = `${Math.round(data.list[0].main.temp)}°`;
	document.querySelector('.weather-icon').style.backgroundImage = `url(${iconWeather[weatherIconToday]})`
	document.querySelector('.description').innerText = `${data.list[0].weather[0].description}`;
	document.querySelector('.feelLikeValue').innerText = `${Math.round(data.list[0].main.feels_like)}°`;
	document.querySelector('.windValue').innerText = `${data.list[0].wind.speed} m/s`;
	document.querySelector('.humidityValue').innerText = `${data.list[0].main.humidity}%`;

	document.querySelector('.after-one-day-weather-name-day').innerText = `${weekday[date.getDay()][0][1]}`;
	document.querySelector('.after-one-day-weather-temperature').innerText = `${Math.round(data.list[1].main.temp)}°`;
	document.querySelector('.after-one-day-weather-icon').style.backgroundImage = `url(${iconWeather[weatherIcon1]})`

	document.querySelector('.after-two-day-weather-name-day').innerText = `${weekday[date.getDay()][0][2]}`;
	document.querySelector('.after-two-day-weather-temperature').innerText = `${Math.round(data.list[2].main.temp)}°`;
	document.querySelector('.after-two-day-weather-icon').style.backgroundImage = `url(${iconWeather[weatherIcon2]})`

	document.querySelector('.after-three-day-weather-name-day').innerText = `${weekday[date.getDay()][0][3]}`;
	document.querySelector('.after-three-day-weather-temperature').innerText = `${Math.round(data.list[3].main.temp)}°`;
	document.querySelector('.after-three-day-weather-icon').style.backgroundImage = `url(${iconWeather[weatherIcon3]})`

	lastDegree();
	lastLanguage();

}

