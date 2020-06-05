import { translateEn, translateRu, translateBe } from './translate.js';
import { getFahrenheit } from './degrees';

export function lastDegree() {
	if (localStorage.getItem('lastDegree') === '1') {
		getFahrenheit()
	}
}

export function lastLanguage() {

	localStorage.getItem('lastLanguage') === '2' ? translateBe() :
	localStorage.getItem('lastLanguage') === '1' ? translateRu() :
	translateEn();
	
}

export function chooseLanguage() {

	let language;
	localStorage.getItem('lastLanguage') === '2' ? language = 'be' :
	localStorage.getItem('lastLanguage') === '1' ? language = 'ru' :
	language = 'en';

	return language;

}