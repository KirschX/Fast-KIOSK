import { useState, useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import useOrder from "@/hooks/useOrder";
// import { addProduct, updateProduct } from "@/redux/slices/orderSlice";
import { setLoading } from "@/redux/slices/recordingSlice";

const useAudioRecording = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.recording.loading);

  const { handleAddProduct, order, handleUpdateProduct, handleResetOrder } =
    useOrder();

  const [recording, setRecording] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const intervalRef = useRef<NodeJS.Timeout | number | null>(null);

  const startRecording = async () => {
    return new Promise<Blob | null>(async (resolve, reject) => {
      dispatch(setLoading(true));
      speechSynthesis.cancel();

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaStreamRef.current = stream;
        audioContextRef.current = new AudioContext();
        const source = audioContextRef.current.createMediaStreamSource(stream);

        // Create an AnalyserNode to analyze the audio stream
        const analyser = audioContextRef.current.createAnalyser();
        analyser.fftSize = 1024;
        source.connect(analyser);

        // Array for frequency data
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        let silenceDuration = 0;
        const threshold = 0.03;
        const checkInterval = 200; // Check every 200 milliseconds
        const maximumSilenceDuration = 4000;

        const interval = setInterval(() => {
          analyser.getByteTimeDomainData(dataArray);

          // Calculate the RMS value
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            const value = (dataArray[i] - 128) / 128; // Center around 0
            sum += value * value;
          }
          const rms = Math.sqrt(sum / dataArray.length);
          // console.log(rms);
          // console.log(silenceDuration);
          if (rms > threshold) {
            silenceDuration = 0;
          } else {
            silenceDuration += checkInterval;
          }

          if (silenceDuration > maximumSilenceDuration) {
            stopRecording();
            clearInterval(interval);
          }
        }, checkInterval);

        intervalRef.current = interval;

        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "audio/webm" });
          chunksRef.current = [];
          dispatch(setLoading(false));
          resolve(blob);
        };

        mediaRecorder.start();
        setRecording(true);
        mediaRecorderRef.current = mediaRecorder;
      } catch (err) {
        console.error("Error accessing the microphone:", err);
        reject(err);
      } finally {
      }
    });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }

      setRecording(false);

      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current as any);
        intervalRef.current = null;
      }
    }
  };

  const sendDataToServer = async (audioToSend: Blob) => {
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append("audio_file", audioToSend, "audio.webm");
    try {
      const response = await fetch(
        "https://sr-kiosk-api-shs2783.koyeb.app/api/stt/menu",
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (error) {
      console.log(error);
      // console.error("Network error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // useEffect(() => {
  //   const utterance = new SpeechSynthesisUtterance(
  //     "안녕하세요, 어디에서 드시는지 아래 버튼을 누르거나 말씀해주세요"
  //   );
  //   // ... rest of the code ...
  // }, []);

  return {
    recording,
    audioBlob,
    startRecording,
    stopRecording,
    sendDataToServer,
    loading,
  };
};

export default useAudioRecording;
