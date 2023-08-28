import { useState, useEffect } from "react";

const useVoiceGuidance = () => {
  const [voiceStarted, setVoiceStarted] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  const startVoiceGuidance = (input: string, onEndCallback?: () => void) => {
    const lang = "ko-KR";
    const script = input;
    const newUtterance = new SpeechSynthesisUtterance(script);
    newUtterance.lang = lang;
    newUtterance.rate = 1;

    if (onEndCallback) {
      newUtterance.onend = (event) => {
        onEndCallback();
        setVoiceStarted(false);
      };
    } else {
      newUtterance.onend = () => setVoiceStarted(false);
    }

    window.speechSynthesis.speak(newUtterance);
    setUtterance(newUtterance);
    setVoiceStarted(true);
  };

  const stopVoiceGuidance = () => {
    if (utterance) {
      window.speechSynthesis.cancel();
      setVoiceStarted(false);
    }
  };

  return { voiceStarted, startVoiceGuidance, stopVoiceGuidance };
};

export default useVoiceGuidance;
