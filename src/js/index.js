import { time } from "./time.js";
import { setDate } from './dateToday.js';
import { getLinkToCityCoordinate } from './getCoordinateWithMapFirstLoad.js';
import { getLocationAtRequestOfUser } from './getLocationAtRequestOfUser.js';
import { getImg, changeImg } from './getImg';
import { pressButtonFahrenheit, pressButtonCelsius, blockClickGetCelsiusElement } from './degrees';
import { voiceSearch } from './voiceSearch.js';
import { pressButtonTranslateEn, pressButtonTranslateRu, pressButtonTranslateBe } from './translate.js';
import { keydownEnter } from "./keyDown.js";
import { preload } from './preload.js';
import { speechWeather } from './speechSynthesis.js';
import { myPosition } from './myPosition.js';


if (!localStorage.getItem('lastLanguage')) {
  localStorage.setItem('lastLanguage', 0)
}

window.onload = preload();
time();
speechWeather();
getLinkToCityCoordinate();
document.querySelector('.button-search-local').addEventListener('mousedown', getLocationAtRequestOfUser);
setDate();
getImg();
changeImg();
pressButtonCelsius();
blockClickGetCelsiusElement()
pressButtonFahrenheit();
voiceSearch(getLocationAtRequestOfUser);
pressButtonTranslateEn();
pressButtonTranslateRu();
pressButtonTranslateBe();
keydownEnter();
myPosition();
