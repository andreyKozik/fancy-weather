function microphoneOn(recognizer, requestOfUser) {

  document.querySelector('.microphone').src = "./assets/img/microphone-on.png"
  document.querySelector('.microphone').classList.remove('off');

	// Start listening to the microphone and recognize the voice
	recognizer.start();

	// use the callback to process the results
  recognizer.onresult = function (ev) {// eslint-disable-line func-names
    
		const result = ev.results[ev.resultIndex];
		if (result.isFinal) {
			document.querySelector('.search-local').value = result[0].transcript;
			if (document.querySelector(".search-local").value) {
				requestOfUser();
			} else {
				document.querySelector('.error').style.display = 'flex';
				document.querySelector('.click', (event) => {
					if (event.toElement.id === 'close') {
						document.querySelector('.error').style.display = 'none';
					}
				})
				return false;
			}
			document.querySelector('.microphone').src = "./assets/img/microphone-off.png"
			document.querySelector('.microphone').classList.add('off');
		}
	}
}
 
function microphoneOff(recognizer) {

  recognizer.abort();

  document.querySelector('.microphone').src = "./assets/img/microphone-off.png"
  document.querySelector('.microphone').classList.add('off');

}


export function voiceSearch(getLocationAtRequestOfUser) {

  let recognizer = new webkitSpeechRecognition();// eslint-disable-line no-undef, new-cap

  // put an option so that recognition starts even before the user finishes talking
  recognizer.interimResults = true;

  // What language will we recognize
  localStorage.getItem('lastLanguage') === '2' ? recognizer.lang = 'be-Be' :
  localStorage.getItem('lastLanguage') === '1' ? recognizer.lang = 'ru-Ru' :
  recognizer.lang = 'en-En';


  document.querySelector('.microphone').addEventListener('mousedown', () => {

    document.querySelector('.microphone').classList.contains('off') ? microphoneOn(recognizer, getLocationAtRequestOfUser) : microphoneOff(recognizer);
    
	});
}
