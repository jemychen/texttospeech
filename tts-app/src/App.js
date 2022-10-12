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
        console.log(option)
    }
}

synth.addEventListener('voiceChanged', voiceSpeech)

function textToSpeech(text) {
    let utternance = new speechSynthesisUtternance(text)
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utternance.voice = voice
        }
    }
    speechSynthesis.speak(utternance)
}

speechBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (textArea.value != '') {
        if (!synth.speaking) {
            textToSpeech(textArea.value)
        }
        if (textArea.value.length > 80) {
            if (isSpeaking) {
                synth.resume()
                isSpeaking = false
                speechBtn.innerHTML = 'Pause Speech'
            } else {
                synth.pause()
                isSpeaking = true
                speechBtn.innerHTML = 'Resume Speech'
            }
        }
    }
})

export default App;
