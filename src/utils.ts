export const voiceAssistant = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(voice => voice.name === 'Google US English') || null;
    speech.pitch = 1; // Set the pitch
    speech.rate = 1; // Set the rate

    window.speechSynthesis.speak(speech);
}