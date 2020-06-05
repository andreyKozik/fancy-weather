import { preload } from './preload.js';
import { getTemperature } from './temperature.js';
import { yandexTranslate } from './translate.js';
import { errorRequest } from './errorRequest.js';
import { mapConnection } from './mapConnection.js';
import { chooseLanguage } from './localStorage.js';


export async function getLocationAtRequestOfUser(time) {
	
	preload();

	let city = document.querySelector('.search-local').value;

	const urlCoordinate = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=02db02a95b0a4009903527692e9d9886&lang=en`;
	const resCoordinate = await fetch(urlCoordinate);
	const data = await resCoordinate.json();
	console.log(data)	
	
  	if( !errorRequest(data) )  return false;
  
  	let town = data.results[0].formatted.split(',').shift();
  	let country = data.results[0].formatted.split(',').pop();

	const lat = data.results[0].geometry.lat;
	const lon = data.results[0].geometry.lng;

	const urlGoogle = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyDKYALRFehOLNda-HNmAGk7QVDTSi4XZyQ&lang=en`;
	const resGoogle = await fetch(urlGoogle);
	const dataGoogle = await resGoogle.json();

	mapConnection(lat, lon);

	document.querySelector('.latitudeValue').innerText = `${String(data.results[0].geometry.lat).slice(0, 5).replace('.', '°')}'`;
	document.querySelector('.longitudeValue').innerText = `${String(data.results[0].geometry.lng).slice(0, 5).replace('.', '°')}'`;

	let language = chooseLanguage();

	const locationUserValue = `${town}, ${country}`;
	const locationUserHtmlElement = document.querySelector('.location-user');

	await yandexTranslate(locationUserValue, language, locationUserHtmlElement)
    
  	getTemperature(lat, lon);

}
