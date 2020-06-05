import { date, month, weekDay, weekday, coordinates, descriptionWeather, button, WeatherConditionCodes } from './globalVariables.js';

export async function yandexTranslate(TranslateElement, language, htmlElement) {
	
	const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191203T103541Z.38c6e09aef077e18.54727e162922872781a8693d29f6b65dc750ce22&text=${TranslateElement}&lang=${language}&format=plain&options=0`;
	const res = await fetch(url);
	const data = await res.json();
	
	if(data.code === 200) {

    	htmlElement.innerText = data.text[0];
		return false;
		
	}

}


export function translateEn() {

	const ml = Date.parse(new Date()) - (60 * localStorage.getItem('TimezoneOffset') * 60 * 1000) + (localStorage.getItem('timezone') * 1000)
	const localTime = new Date(ml);
	document.querySelector(".date").innerText = `${weekday[localTime.getDay()][localStorage.getItem('lastLanguage')][0].slice(0, 3)} ${localTime.getDate()} ${month[localStorage.getItem('lastLanguage')][localTime.getMonth()]}`;
	  
	document.querySelector('.feelLikeName').innerText = `Feel like:`;
	document.querySelector('.after-one-day-weather-name-day').innerText = `${weekday[date.getDay()][0][1]}`;
	document.querySelector('.after-two-day-weather-name-day').innerText = `${weekday[date.getDay()][0][2]}`;
	document.querySelector('.after-three-day-weather-name-day').innerText = `${weekday[date.getDay()][0][3]}`;
	document.querySelector('.latitudeName').innerText = `${coordinates.coordinatesEn[0]}`;
	document.querySelector('.longitudeName').innerText = `${coordinates.coordinatesEn[1]}`;
	document.querySelector('.feelLikeName').innerText = `${descriptionWeather.descriptionWeatherEn[0]}`;
	document.querySelector('.windName').innerText = `${descriptionWeather.descriptionWeatherEn[1]}`;
	document.querySelector('.humidityName').innerText = `${descriptionWeather.descriptionWeatherEn[2]}`;
	document.querySelector('.button-search-local').innerText = `${button.buttonEn[0]}`;
	document.querySelector('.description').innerText = `${WeatherConditionCodes[localStorage.getItem('weatherId')][0]}`;
	document.querySelector('.search-local').placeholder = `Search city`;
	document.querySelector('.my-position').innerText = `Мy location`;
	
	const TranslatelocationUser = document.querySelector('.location-user').innerText
	const htmlElementlocationUser = document.querySelector('.location-user')
	yandexTranslate(TranslatelocationUser, 'en', htmlElementlocationUser)

	document.querySelector('.en').style.opacity = 1;
	document.querySelector('.ru').style.opacity = 0.5;
	document.querySelector('.be').style.opacity = 0.5;

	localStorage.setItem('lastLanguage', 0);
}

export function translateRu() {

	const ml = Date.parse(new Date()) - (60 * localStorage.getItem('TimezoneOffset') * 60 * 1000) + (localStorage.getItem('timezone') * 1000)
	const localTime = new Date(ml);
	document.querySelector(".date").innerText = `${weekday[localTime.getDay()][localStorage.getItem('lastLanguage')][0].slice(0, 3)} ${localTime.getDate()} ${month[localStorage.getItem('lastLanguage')][localTime.getMonth()]}`;

	document.querySelector('.feelLikeName').innerText = `По ощущению:`;
	document.querySelector('.after-one-day-weather-name-day').innerText = `${weekday[date.getDay()][1][1]}`;
	document.querySelector('.after-two-day-weather-name-day').innerText = `${weekday[date.getDay()][1][2]}`;
	document.querySelector('.after-three-day-weather-name-day').innerText = `${weekday[date.getDay()][1][3]}`;
	document.querySelector('.latitudeName').innerText = `${coordinates.coordinatesRu[0]}`;
	document.querySelector('.longitudeName').innerText = `${coordinates.coordinatesRu[1]}`;
	document.querySelector('.feelLikeName').innerText = `${descriptionWeather.descriptionWeatherRu[0]}`;
	document.querySelector('.windName').innerText = `${descriptionWeather.descriptionWeatherRu[1]}`;
	document.querySelector('.humidityName').innerText = `${descriptionWeather.descriptionWeatherRu[2]}`;
	document.querySelector('.button-search-local').innerText = `${button.buttonRu[0]}`;
	document.querySelector('.description').innerText = `${WeatherConditionCodes[localStorage.getItem('weatherId')][1]}`;
	document.querySelector('.search-local').placeholder = `Поиск города`;
	document.querySelector('.my-position').innerText = `Моё местоположение`;

	const TranslatelocationUser = document.querySelector('.location-user').innerText
	const htmlElementlocationUser = document.querySelector('.location-user')
	yandexTranslate(TranslatelocationUser, 'ru', htmlElementlocationUser)

	document.querySelector('.en').style.opacity = 0.5;
	document.querySelector('.ru').style.opacity = 1;
	document.querySelector('.be').style.opacity = 0.5;

	localStorage.setItem('lastLanguage', 1);
}

export function translateBe() {

	const ml = Date.parse(new Date()) - (60 * localStorage.getItem('TimezoneOffset') * 60 * 1000) + (localStorage.getItem('timezone') * 1000)
	const localTime = new Date(ml);
	document.querySelector(".date").innerText = `${weekday[localTime.getDay()][localStorage.getItem('lastLanguage')][0].slice(0, 3)} ${localTime.getDate()} ${month[localStorage.getItem('lastLanguage')][localTime.getMonth()]}`;

	document.querySelector('.feelLikeName').innerText = `Па адчуванні:`;
	document.querySelector('.after-one-day-weather-name-day').innerText = `${weekday[date.getDay()][2][1]}`;
	document.querySelector('.after-two-day-weather-name-day').innerText = `${weekday[date.getDay()][2][2]}`;
	document.querySelector('.after-three-day-weather-name-day').innerText = `${weekday[date.getDay()][2][3]}`;
	document.querySelector('.latitudeName').innerText = `${coordinates.coordinatesBe[0]}`;
	document.querySelector('.longitudeName').innerText = `${coordinates.coordinatesBe[1]}`;
	document.querySelector('.feelLikeName').innerText = `${descriptionWeather.descriptionWeatherBe[0]}`;
	document.querySelector('.windName').innerText = `${descriptionWeather.descriptionWeatherBe[1]}`;
	document.querySelector('.humidityName').innerText = `${descriptionWeather.descriptionWeatherBe[2]}`;
	document.querySelector('.button-search-local').innerText = `${button.buttonBe[0]}`;
	document.querySelector('.description').innerText = `${WeatherConditionCodes[localStorage.getItem('weatherId')][2]}`;
	document.querySelector('.search-local').placeholder = `Пошук горада`;
	document.querySelector('.my-position').innerText = `Маё месцазнаходжанне`;

	const TranslatelocationUser = document.querySelector('.location-user').innerText
	const htmlElementlocationUser = document.querySelector('.location-user')
	yandexTranslate(TranslatelocationUser, 'be', htmlElementlocationUser)

	document.querySelector('.en').style.opacity = 0.5;
	document.querySelector('.ru').style.opacity = 0.5;
	document.querySelector('.be').style.opacity = 1;

	localStorage.setItem('lastLanguage', 2);
}

export function pressButtonTranslateEn() {
	document.querySelector('.en').addEventListener('mousedown', () => { translateEn() });
}

export function pressButtonTranslateRu() {
	document.querySelector('.ru').addEventListener('mousedown', () => { translateRu() });
}

export function pressButtonTranslateBe() {
	document.querySelector('.be').addEventListener('mousedown', () => { translateBe() });
}
