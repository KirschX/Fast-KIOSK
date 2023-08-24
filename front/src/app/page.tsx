"use client";

import { useState, useRef, useEffect } from "react";
import Character from "@public/character.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";

import UseOrder from "@/hooks/useOrder";
import useAudioRecording from "@/hooks/useAudioRecording";
import { resetOrder, updateProduct } from "@/redux/slices/orderSlice";

import EatIn from "@public/eatIn.svg";
import Takeout from "@public/takeout.svg";

export default function Home() {
  const [voiceStarted, setVoiceStarted] = useState(false);
  const router = useRouter();
  const { startRecording, stopRecording, sendDataToServer, loading } =
    useAudioRecording();

  const { handleAddProduct, order, handleUpdateProduct, handleSetTakeout } =
    UseOrder();

  const startVoiceGuidance = () => {
    const lang = "ko-KR";
    const script =
      "아래 버튼을 누르거나 포장하기 혹은 매장에서 식사하기 라고 말씀해주세요";
    const utterance = new SpeechSynthesisUtterance(script);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
    setVoiceStarted(true);
  };

  // useEffect(() => {
  //   const speak = (txt: string) => {
  //     const lang = "ko-KR";
  //     const utterance = new SpeechSynthesisUtterance(txt);
  //     utterance.lang = lang;
  //     window.speechSynthesis.speak(utterance);
  //   };

  //   const handleVoicesChanged = () => {
  //     speak("안녕하세요");
  //   };

  //   // Wait for voices to be loaded
  //   window.speechSynthesis.addEventListener(
  //     "voiceschanged",
  //     handleVoicesChanged
  //   );

  //   // Attempt to speak immediately in case voices are already loaded
  //   speak("안녕하세요");

  //   // Clean up the listener if it was added
  //   return () => {
  //     window.speechSynthesis.removeEventListener(
  //       "voiceschanged",
  //       handleVoicesChanged
  //     );
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("asd");
  //   resetOrder();
  // }, []);

  return (
    <div className=" flex justify-center items-center">
      <div className=" relative top-16 left-6">
        <Image src="/character.png" alt="" width={500} height={1000} />
      </div>
      <div className=" flex flex-col items-center relative mt-24">
        {/* <button onClick={startVoiceGuidance}>Start Voice Guidance</button> */}
        <div className=" ml-10 mb-10">
          <div className="text-h1 font-bold whitespace-nowrap ">
            어디에서 드시나요?
          </div>
          <div className=" flex ml-4">
            <div className=" text-h3 font-medium">
              <div>안녕하세요, 쉽고 빠른 음성 주문을 경험해보세요!</div>
            </div>
          </div>
        </div>

        <div className="flex bg-white p-4 rounded-lg text-[48px]">
          <div
            className=" bg-[#FEBB15] drop-shadow-[-5px_20px_4px_rgba(0,0,0,0.15)] m-4 w-[541px] h-[670px] flex flex-col  items-center rounded-[60px]"
            onClick={() => {
              handleSetTakeout(true);
              router.push("/f1");
            }}
          >
            <div className=" mt-20">
              <Image src="/takeout.png" width={322} height={322} alt="" />
            </div>
            <div className="  mt-20 font-bold text-h2">{`"포장하기"`}</div>
          </div>
          <div
            className=" bg-[#FEBB15] drop-shadow-[-5px_20px_4px_rgba(0,0,0,0.15)]  m-4 w-[541px] h-[670px] flex flex-col  items-center rounded-[60px]"
            onClick={() => {
              handleSetTakeout(false);
              router.push("/f1");
            }}
          >
            <div className=" mt-20">
              <Image src="/eatIn.png" width={322} height={322} alt="" />
            </div>
            <div className=" mt-20 font-bold text-h2">{`"매장에서"`}</div>
          </div>
        </div>
        <div className="flex bg-white p-4 rounded-lg"></div>
      </div>
    </div>
  );
}
