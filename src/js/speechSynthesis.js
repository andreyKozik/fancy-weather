export function speechWeather() {
  document.querySelector('.speech').addEventListener('mousedown', () => {
    const temperature = document.querySelector('.temperature').innerHTML;
    const locationUser = document.querySelector('.location-user').innerHTML;
    const description = document.querySelector('.description').innerHTML;
    const feelLike = document.querySelector('.feelLike').innerHTML;
    const wind = document.querySelector('.windValue').innerHTML;
    const humidity = document.querySelector('.humidity').innerHTML;

    let speech = new SpeechSynthesisUtterance();

    speech.rate = 1;
    speech.pitch = 2;
    speech.volume = 1;

    if (localStorage.getItem('lastLanguage') === '0') {
      speech.lang = 'en-US';
      speech.text = `Good time, now in ${locationUser}, ${temperature}, ${description}, ${feelLike}, wind ${wind.slice(0, -3)} meters per second, ${humidity}, have a nice day`;
    } else if (localStorage.getItem('lastLanguage') === '1') {
      speech.lang = 'ru-RU';
      speech.text = `Доброго времени суток, Сейчас в ${locationUser}, ${temperature}, ${description}, ${feelLike}, ветер ${wind.slice(0, -3)} метров в секунду, ${humidity}, хорошего вам дня`;
    } else if (localStorage.getItem('lastLanguage') === '2') {
       speech.lang = 'be-BY';
      speech.text = `Добрага часу, цяпер у ${locationUser}, ${temperature}, ${description}, ${feelLike}, вецер  ${wind.slice(0, -3)} метраў у секунду, ${humidity}, добрага вам дня`;
    }

    speechSynthesis.speak(speech);

  });
}