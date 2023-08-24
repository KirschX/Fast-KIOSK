"use client";

import GuideBox from "@/components/guideBox";
import useVoiceGuidance from "@/hooks/useVoiceGuidance";
import Character_head from "@public/character_head.svg";
import OrderNumberExample from "@public/orderNumberExample.svg";
import { use, useEffect, useState } from "react";

const guideText = [
  `주문 번호는 120번 입니다. 출력된 주문번호와 카드를 챙겨주세요.`,
  `번호가 불리면 카운터에서 수령해 주세요!`,
];

const guideTextJSX = [
  <>
    주문 번호는 <span className="text-WineBerry font-bold">120번 </span>입니다.
    출력된 주문번호와 카드를 챙겨주세요.
  </>,
  <>번호가 불리면 카운터에서 수령해 주세요!</>,
];

export default function F4() {
  const [stage, setStage] = useState(0);

  const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } =
    useVoiceGuidance();

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(stage);
    if (stage === 0) {
      startVoiceGuidance(guideText[stage], () => {
        setStage(1);
      });
    }
    if (stage === 1) {
      startVoiceGuidance(guideText[stage]);
    }
  }, [stage]);

  return (
    <div className=" w-full items-start">
      <div className=" flex justify-start">
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">결제완료</div>
      </div>
      <div className=" flex justify-center items-center my-60">
        <OrderNumberExample />
      </div>
      {/* <div className=" text-guide flex mx-8 font-medium mb-20">
        <div>
          <Character_head />
        </div>
        <div>
          <span>주문 번호는</span>
          <span className=" text-WineBerry font-bold"> 120번 </span>
          <span>입니다. 출력된 주문번호와 카드를 챙겨주세요</span>
        </div>
      </div> */}
      <GuideBox isLoading={false}>{guideTextJSX[stage]}</GuideBox>
      <div className=" flex justify-center items-center mt-60">
        <div className="w-full rounded-[50px] bg-gray-Light_2 text-gray-Medium p-4 mx-20 shadow-lg text-h2 text-center">
          결제 취소
        </div>
      </div>
    </div>
  );
}
