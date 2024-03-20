//https://codecoda.com/en/blog/entry/text-to-speech-with-javascript

// First we initialize new SpeechSynthesisUtterance object 
let tts = new SpeechSynthesisUtterance(); 
 
//*Setting the Speech Language 
tts.lang = localStorage.getItem("Language"); 
 
//Populating the select dropdown with the list of available voices on Web Speech API 
let speechvoices = []; // global array of available voices 
 
window.speechSynthesis.onvoiceschanged = () => { 
  // To get the list of voices using getVoices() function 
  speechvoices = window.speechSynthesis.getVoices(); 
  // We need to populate the section and set the first voice 
  tts.voice = speechvoices[0]; 
 
  let select_voice = document.getElementById("voices"); 
  speechvoices.forEach((voice, i) => (select_voice.options[i] = new Option(voice.name, i))); 
}; 
 
//SETTING THE CONTROLS - SPEAK, PLAY, PAUSE AND RESUME 
//SPEAK 
//! first we get the value of the textarea or document 
function speak(id){
    document.getElementById(id).addEventListener("click", () => { 
        tts.text = document.getElementById("lines").value; 
        //then we implement the speechsynthesis instance 
        window.speechSynthesis.speak(tts); 
      }); 
}

 
//?PAUSE 
document.getElementById("pause").addEventListener("click", () => { 
  // Pause the speechSynthesis instance 
  window.speechSynthesis.pause(); 
}); 
 
//?RESUME 
document.getElementById("resume").addEventListener("click", () => { 
  // Resume the paused speechSynthesis instance 
  window.speechSynthesis.resume(); 
}); 
 
//!CANCEL 
document.querySelector("cancel").addEventListener("click", () => { 
// Cancel the speechSynthesis instance 
  window.speechSynthesis.cancel(); 
}); 

//TO SET THE VOLUME, PITCH, AND RATE 
//!Volume  
//We get the volume value from the input 
document.getDocumentById("volume").addEventListener("input", () => { 
  const vol = document.getDocumentById("volume").value; 
  // Set volume property of the SpeechSynthesisUtterance instance 
  tts.volume = vol; 
  // Updating the volume label 
  document.querySelector("#vol-label").innerHTML = vol; 
}); 

//!RATE 
// We get the rate Value from the input 
document.getDocumentById("rate").addEventListener("input", () => { 
  const rate = document.getDocumentById("rate").value; 
  // Set rate property of the SpeechSynthesisUtterance instance 
  tts.rate = rate; 
  // Updating the rate label 
  document.getDocumentById("rate-lab").innerHTML = rate; 
}); 

//?PITCH 
// We get the pitch Value from the input 
document.getElementById("pitch").addEventListener("input", () => { 
  const pitch = document.getElementById("pitch").value; 
  // Setting thepitch property of the SpeechSynthesisUtterance instance 
  tts.pitch = pitch; 
  // Updating the pitch label 
  document.getDocumentById("pitch-lab").innerHTML = pitch; 
});