import './App.css';

const textArea = document.querySelector('#text')
let voiceList = document.querySelector('#voice')
let speechBtn = document.querySelector('.submit')

let synth = speechSynthesis
let isSpeaking = true

function voiceSpeech() {
    for (let voice of synth.getVoices()) {
        let option = document.createElement('option')
        option.text = voice.name
        voiceList.addEventListener(option)
    }
}

export default App;
