"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 6425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2897);
/* harmony import */ var _hooks_useOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8075);
/* harmony import */ var _redux_slices_recordingSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3338);



// import { addProduct, updateProduct } from "@/redux/slices/orderSlice";

const useAudioRecording = ()=>{
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const loading = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.recording.loading);
    const { handleAddProduct, order, handleUpdateProduct, handleResetOrder } = (0,_hooks_useOrder__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const audioContextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const mediaStreamRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const mediaRecorderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [audioBlob, setAudioBlob] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const chunksRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const startRecording = async ()=>{
        return new Promise(async (resolve, reject)=>{
            dispatch((0,_redux_slices_recordingSlice__WEBPACK_IMPORTED_MODULE_3__/* .setLoading */ .K4)(true));
            speechSynthesis.cancel();
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
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
                const threshold = 0.02;
                const checkInterval = 200; // Check every 200 milliseconds
                const maximumSilenceDuration = 5000;
                const interval = setInterval(()=>{
                    analyser.getByteTimeDomainData(dataArray);
                    // Calculate the RMS value
                    let sum = 0;
                    for(let i = 0; i < dataArray.length; i++){
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
                mediaRecorder.ondataavailable = (e)=>{
                    if (e.data.size > 0) {
                        chunksRef.current.push(e.data);
                    }
                };
                mediaRecorder.onstop = ()=>{
                    const blob = new Blob(chunksRef.current, {
                        type: "audio/webm"
                    });
                    chunksRef.current = [];
                    dispatch((0,_redux_slices_recordingSlice__WEBPACK_IMPORTED_MODULE_3__/* .setLoading */ .K4)(false));
                    resolve(blob);
                };
                mediaRecorder.start();
                setRecording(true);
                mediaRecorderRef.current = mediaRecorder;
            } catch (err) {
                console.error("Error accessing the microphone:", err);
                reject(err);
            } finally{}
        });
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            if (mediaStreamRef.current) {
                mediaStreamRef.current.getTracks().forEach((track)=>track.stop());
            }
            setRecording(false);
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    };
    const sendDataToServer = async (audioToSend)=>{
        dispatch((0,_redux_slices_recordingSlice__WEBPACK_IMPORTED_MODULE_3__/* .setLoading */ .K4)(true));
        const formData = new FormData();
        formData.append("audio_file", audioToSend, "audio.webm");
        try {
            const response = await fetch("https://sr-kiosk-api-shs2783.koyeb.app/api/stt/menu", {
                method: "POST",
                headers: {
                    accept: "application/json"
                },
                body: formData
            });
            if (response.ok) {
                const result = await response.json();
                return result;
            }
        } catch (error) {
            console.log(error);
        // console.error("Network error:", error);
        } finally{
            dispatch((0,_redux_slices_recordingSlice__WEBPACK_IMPORTED_MODULE_3__/* .setLoading */ .K4)(false));
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
        loading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAudioRecording);


/***/ })

};
;