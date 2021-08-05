// function populateVoiceList() {
    //     if (typeof speechSynthesis === 'undefined') {
    //       return;
    //     }

    //     var voices = speechSynthesis.getVoices();

    //     for (var i = 0; i < voices.length; i++) {
    //       var option = document.createElement('option');
    //       option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    //       if (voices[i].default) {
    //         option.textContent += ' -- DEFAULT';
    //       }

    //       option.setAttribute('data-lang', voices[i].lang);
    //       option.setAttribute('data-name', voices[i].name);
    //       document.getElementById("voiceSelect").appendChild(option);
    //     }
    //   }

    //   populateVoiceList();
    //   if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    //     speechSynthesis.onvoiceschanged = populateVoiceList;
    //   }

  // var synth = window.speechSynthesis;

  // var inputForm = document.querySelector('');
  // var inputTxt = document.querySelector('intpuData');
  // var voiceSelect = document.querySelector('voicebtn');

  // var voices = synth.getVoices();

  // inputForm.onsubmit = function (event) {
  //   event.preventDefault();

  //   var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  //   var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  //   for (i = 0; i < voices.length; i++) {
  //     if (voices[i].name === selectedOption) {
  //       utterThis.voice = voices[i];
  //     }
  //   }
  //   synth.speak(utterThis);
  //   inputTxt.blur();
  // }
