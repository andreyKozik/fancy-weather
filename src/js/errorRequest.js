import { error } from './globalVariables.js';

export function errorRequest(data) {

  if (data.results.length === 0) {

    document.querySelector('.errorText').innerHTML = error[localStorage.getItem('lastLanguage')];
    document.querySelector('.error').style.display = 'flex';

    document.addEventListener('click', (event) => {

        if (event.toElement.className === 'close') {
          document.querySelector('.error').style.display = 'none';
        }

    });

    return false;

  }

  return true;

}