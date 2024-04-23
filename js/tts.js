document.addEventListener('DOMContentLoaded', function() {
  let tts = new SpeechSynthesisUtterance();

  function setVoice() {
      let speechvoices = window.speechSynthesis.getVoices();
      tts.voice = speechvoices.find(voice => voice.lang.startsWith(document.documentElement.lang)) || speechvoices[0];
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = setVoice;
  }

  // Funzione per leggere il contenuto della pagina
  function readPageContent() {
      let pageContent = document.querySelector('main').textContent;
      tts.text = pageContent;
      window.speechSynthesis.speak(tts);
  }

  // Crea e aggiungi il bottone per attivare la lettura del contenuto
  let readContentButton = document.getElementById('read');
  readContentButton.addEventListener('click', readPageContent);
  // Crea e aggiungi il bottone per fermare la lettura
  let stopReadingButton = document.getElementById('stop');
  stopReadingButton.addEventListener('click', function() {
      window.speechSynthesis.cancel();
  });
});
