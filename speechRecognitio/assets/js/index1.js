// ================== VARIABLE DECCELERATION =============
const voicebtn = document.getElementById('voicebtn');
const inputData = document.getElementById('inputData');
const outputData = document.getElementById('outputData');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;             // SPEECHRECOGNIITION IS AM FUNCTION 
const recognition = new SpeechRecognition();   // RETUREN THE OBJECT IN MULTIPPLE FUNCTION

// console.log(recognition);    
// console.log(SpeechRecognition);     

// WORD LIST THE SPEECH RUM RAMDOMLY
const wordList = [              // ARRAY IN ARRAY 
 [
  'holle sir i am your assistens'
 ],
 [
  'he is leder bro'
 ],
 [
  'i thinks'
 ],
];

// console.log(wordList[0][1]);    //CALLING ARRAY IN ARRAY 
// console.log(wordList.length);    // FINDING LENGHT OF ARRAY

// MESSAGES THE USER DO INPUT 
const userMess = [
 [
  'hello',

 ],
 [
  'what is my name',
 ],
 [
  'what is phone number of sanskar',
 ],
];

recognition.onstart = function () { console.log('voice is activeated') };

recognition.onresult = function (e) {
 // console.log(e);     // RETUREN THE OPTION OR VALUES IN FUNCTION

 const current = e.resultIndex;
 const transcript = e.results[current][0].transcript;  // WE GOIN IN TRANSCRIPT , IT IS STORE THE VOIVCE TEXT.

 inputData.textContent = transcript;
 readOutLoud(transcript);

 // console.log(e);
}

voicebtn.addEventListener('click', () => {
 recognition.start();
});

function readOutLoud(mess) {
 console.log(mess);
 const speech = new SpeechSynthesisUtterance();
 speech.text = '';
 speech.lang = 'hi-IN';
 speech.lang = 'en-US';
 speech.volume = 1;
 speech.rate = 1;
 speech.pitch = 1;

 for (i = 0; i <= userMess.length - 1; i++) {

  if (mess === userMess[i][0]) {

   let finalText = wordList[i][Math.floor(Math.random() * wordList[i].length)];
   outputData.textContent = finalText;
   speech.text = finalText;
  }
   else {
      // DEFAULT MESSAGE 
    speech.text = "sorry some error is came";
  }
 }
 window.speechSynthesis.speak(speech);
};

  
