const speak = (speechMsg) => {
    if (speechMsg.length > 0) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = speechMsg;
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;
        const voices = window.speechSynthesis.getVoices();
        msg.voice = voices[1];
        window.speechSynthesis.speak(msg);
    }
};

export default speak;