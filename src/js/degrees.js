// изменяем градусы цельсия на фаренгейт

export function fahrenheit(x) {
	const tC = +x.slice(0, -1);
	return Math.round((tC * 9 / 5) + 32);
}

export function celsius(x) {
	const tF = +x.slice(0, -1);
	return Math.round((tF - 32) * 5 / 9);
}


export function conversionFahrenheit(x) {
	let tC = document.querySelector(x).innerText;
	const tF = fahrenheit(tC);
	document.querySelector(x).innerText = `${tF}°`;
}

export function conversionCelsius(x) {
	let tF = document.querySelector(x).innerText;
	const tC = fahrenheit(tF);
	document.querySelector(x).innerText = `${tC}°`;
}

export function blockClickGetCelsiusElement() {
	document.querySelector('.celsius').style.pointerEvents = 'none';
}

export function getFahrenheit() {

	const fahrenheit = document.querySelector('.fahrenheit');
	const celsius = document.querySelector('.celsius');

	celsius.style.pointerEvents = 'auto';
	fahrenheit.style.backgroundColor = 'rgba(230, 230, 230, 0.651)';
	celsius.style.backgroundColor = 'rgba(230, 230, 230, 0)';

	conversionFahrenheit('.temperature');
	conversionFahrenheit('.after-one-day-weather-temperature');
	conversionFahrenheit('.after-two-day-weather-temperature');
	conversionFahrenheit('.after-three-day-weather-temperature');
	conversionFahrenheit('.feelLikeValue');

	fahrenheit.style.pointerEvents = 'none';

	localStorage.setItem('lastDegree', 1);

}

export function getCelsius() {

	const fahrenheit = document.querySelector('.fahrenheit');
	const celsius = document.querySelector('.celsius');

	fahrenheit.style.pointerEvents = 'auto';
	fahrenheit.style.backgroundColor = 'rgba(230, 230, 230, 0)';
	celsius.style.backgroundColor = 'rgba(230, 230, 230, 0.651)';

	conversionCelsius('.temperature');
	conversionCelsius('.after-one-day-weather-temperature');
	conversionCelsius('.after-two-day-weather-temperature');
	conversionCelsius('.after-three-day-weather-temperature');
	conversionCelsius('.feelLikeValue');

	celsius.style.pointerEvents = 'none';

	localStorage.setItem('lastDegree', 2);

}

export function pressButtonFahrenheit() {
	document.querySelector('.fahrenheit').addEventListener('mousedown', () => { getFahrenheit() });
}

export function pressButtonCelsius() {
	document.querySelector('.celsius').addEventListener('mousedown', () => { getCelsius() });
}
