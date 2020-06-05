import { getTemperature } from './temperature.js';
import { mapConnection } from './mapConnection.js';

export async function getLinkToCityCoordinate() {
  
	const url = `https://api.ipgeolocation.io/ipgeo?apiKey=043e8eafef21492ab8599389504bd650`;
  const res = await fetch(url);
  const data = await res.json();

	document.querySelector('.latitudeValue').innerText = `${data.latitude.slice(0, 5).replace('.', '°')}'`;
  document.querySelector('.longitudeValue').innerText = `${data.longitude.slice(0, 5).replace('.', '°')}'`;
  
  const lat = +data.latitude;
  const lon = +data.longitude;

  mapConnection(lat, lon);
  
  getTemperature(lat, lon);
  
  document.querySelector('.location-user').innerText = `${data.city}, ${data.country_name}`;

  localStorage.setItem('TimezoneOffset', data.time_zone.offset)
}
