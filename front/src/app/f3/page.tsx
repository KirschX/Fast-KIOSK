"use client";

import Character_head from "@public/character_head.svg";
// import { LoadingRing } from "@/components/guideBox";
import TimerBox from "@/components/timerBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CardPaymentAnimation from "@/components/cardPaymentAnimation";
import useVoiceGuidance from "@/hooks/useVoiceGuidance";

export default function F3() {
  const [timer, setTimer] = useState(60);
  const router = useRouter();

  const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } =
    useVoiceGuidance();

  useEffect(() => {
    startVoiceGuidance("카드를 투입구에 넣어주세요.");

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 1) return prevTimer - 1;

        clearInterval(intervalId);
        router.push("/f2");
        return 0;
      });
    }, 1000);
    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  return (
    <div className=" w-full items-start">
      <div className=" flex justify-start">
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">결제하기</div>
      </div>
      <div
        onClick={() => {
          router.push("/f4");
        }}
        className=" flex justify-center items-center relative bottom-20"
      >
        {/* <div className=" bg-gray-400 w-[1000px] h-[1000px] mb-32"></div> */}
        <CardPaymentAnimation />
      </div>
      <div className=" text-guide flex mx-8 font-medium mb-20">
        <div>
          <Character_head />
        </div>
        <div>
          <span>위 영상과 같이 아래 카드 투입구에 카드를 삽입해주세요.</span>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div
          onClick={() => {
            router.push("/f2");
          }}
          className="w-full relative rounded-[50px] flex bg-gray-Light_2 text-gray-Medium py-16 mx-20 shadow-lg text-h2 text-center justify-center"
        >
          <div>결제 취소</div>
          {/* <div className=" absolute w-[150px] h-[150px] right-20 flex items-center">
            <LoadingRing isLoading={true} />
            <div className=" flex justify-center items-center text-[60px]">
              60
            </div>
          </div> */}
          <div className=" absolute right-20">
            <TimerBox time={timer} isLoading={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
