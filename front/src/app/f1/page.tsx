"use client";

import Image from "next/image";
import Character_head from "@public/character_head.svg";
import DoubleQMarkLeft from "@public/doubleQMarkLeft.svg";
import DoubleQMarkRight from "@public/doubleQMarkRight.svg";

import useOrder from "@/hooks/useOrder";
import { Product } from "@/redux/slices/orderTypes";
import { useEffect, useRef, useState } from "react";
import useVoiceGuidance from "@/hooks/useVoiceGuidance";
import useAudioRecording from "@/hooks/useAudioRecording";
import TextBox from "@/components/textBox";
import GuideBox from "@/components/guideBox";

import { useRouter } from "next/navigation";
import { processVoiceToOrderState } from "@/redux/thunks/orderThunks";

// import { resetOrder, updateProduct } from "@/redux/slices/orderSlice";

export default function F1() {
  const [timer, setTimer] = useState(60);
  const router = useRouter();

  const {
    handleAddProduct,
    order,
    handleUpdateProduct,
    handleResetOrder,
    handleSetOrderStage,
    handleSetPayStage,
  } = useOrder();
  const cur = order.currentOrderNumber;
  const { isTakeout } = order;
  const { orderNumber, burger, side, quantity, beverage, type } =
    order.products[cur] || {};

  const guideText = [
    "주문을 도와드릴게요. 아래 주문 가이드에 맞춰 주문해주세요.",
    `${burger} ${type} ${quantity}개를 주문하셨군요. 기본 세트는 감자튀김과 콜라입니다.`,
    `잘 못들었어요. 메뉴명과 세트 선택과 수량을 다시 말씀해주세요.`,
    `10초간 응답이 없으시면, 시작화면으로 이동합니다.`,
    `오랜 대기시간으로 60초 후 초기화면으로 이동합니다.`,
    `잘 못들었어요, 메뉴명과 세트 선택과 수량을 다시 말씀해주세요.`,
  ];

  const { startRecording, stopRecording, loading } = useAudioRecording();

  const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } =
    useVoiceGuidance();

  const initialRender = useRef(true);

  const handleVoiceEnd = async () => {
    const response = await startRecording();
    if (response) {
      await handleAddProduct(response);
    }
  };

  // 최초 화면 진입
  useEffect(() => {
    handleSetOrderStage(0);

    //
  }, []);

  // 주문 단계별 Flow
  useEffect(() => {
    if (order.orderStage === 0) {
      startVoiceGuidance(guideText[order.orderStage], handleVoiceEnd);
    }

    if (order.orderStage === 1) {
      startVoiceGuidance(guideText[order.orderStage], () => {
        setTimeout(() => {
          handleSetPayStage(0);
          router.push("/f2");
        }, 1000);
      });
    }

    if (order.orderStage === 2) {
      startVoiceGuidance(
        guideText[order.orderStage],
        // () =>
        // setTimeout(() => {
        //   handleSetOrderStage(5);
        // }, 10000)

        handleVoiceEnd
      );
    }

    if (order.orderStage === 3) {
      startVoiceGuidance(guideText[order.orderStage]);
    }

    if (order.orderStage === 4) {
      startVoiceGuidance(guideText[order.orderStage], () => {
        setTimeout(() => {
          handleSetPayStage(0);
          router.push("/");
        }, 1000);
      });
    }

    if (order.orderStage === 5) {
      startVoiceGuidance(guideText[order.orderStage], handleVoiceEnd);
    }

    let intervalId: NodeJS.Timeout;
    if (
      order.orderStage !== 2 &&
      order.orderStage !== 5 &&
      order.orderStage !== 3
    )
      setTimer(60);
    intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        console.log(prevTimer);
        if (prevTimer === 21) handleSetOrderStage(4);
        if (prevTimer === 31) handleSetOrderStage(3);
        if (prevTimer > 1) return prevTimer - 1;

        clearInterval(intervalId);
        router.push("/");
        return 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [order.orderStage]);

  // redux order state 변경되었을 경우
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log(order);
    // if (!order.ok) setOrderStage(2);
  }, [burger, order, quantity, router, type]);

  const orderHandler = (
    e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>
  ) => {
    const itemName = e.currentTarget.getAttribute("data-text");

    handleAddProduct({
      orderNumber: order.currentOrderNumber,
      burger: itemName!,
      type: "세트",
      quantity: 1,
      side: "감자튀김",
      beverage: "콜라",
      ingredients: {
        피클: 0,
        토마토: 0,
        양상추: 0,
        양파: 0,
        고기패티: 0,
        치즈: 0,
      },
    });
  };

  return (
    <div className=" w-full items-start">
      <div className=" flex justify-start">
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">
          추천메뉴/주문
        </div>
      </div>
      <div className=" grid grid-cols-3 bg-gray-Light_2 mb-20 pt-10 pb-6">
        <div
          data-text="빅맥"
          className=" col-span-1"
          onClick={(e: any) => orderHandler(e)}
        >
          <Image
            src="/burgers/bigMac.png"
            alt=""
            width={585.95}
            height={407.62}
          />
          <div className=" flex-col text-center">
            <div className=" text-[50px] text-gray-Dark font-bold">빅맥</div>
            <div className=" text-[34px] text-gray-Medium">단품 5,900원</div>
            <div className=" text-[34px] text-gray-Medium">세트 8,300원</div>
          </div>
        </div>
        <div
          data-text="불고기 버거"
          className=" col-span-1"
          onClick={(e: any) => orderHandler(e)}
        >
          <Image
            src="/burgers/bigMac.png"
            alt=""
            width={585.95}
            height={407.62}
          />
          <div className=" flex-col text-center">
            <div className=" text-[50px] text-gray-Dark font-bold">
              불고기 버거
            </div>
            <div className=" text-[34px] text-gray-Medium">단품 5,900원</div>
            <div className=" text-[34px] text-gray-Medium">세트 8,300원</div>
          </div>
        </div>
        <div
          data-text="베이컨 토마토 디럭스"
          className=" col-span-1"
          onClick={(e: any) => orderHandler(e)}
        >
          <Image
            src="/burgers/bigMac.png"
            alt=""
            width={585.95}
            height={407.62}
          />
          <div className=" flex-col text-center">
            <div className=" text-[50px] text-gray-Dark font-bold ">
              베이컨 토마토 디럭스
            </div>
            <div className=" text-[34px] text-gray-Medium">단품 5,900원</div>
            <div className=" text-[34px] text-gray-Medium">세트 8,300원</div>
          </div>
        </div>
      </div>
      <div className=" text-guide flex mx-12  mt-32 font-medium mb-40">
        <GuideBox text={guideText[order.orderStage]} isLoading={loading} />
      </div>
      <div className=" text-[70px]">
        <div className=" flex justify-center mx-14 my-4 space-x-10">
          <span className=" absolute left-10">
            <DoubleQMarkLeft />
          </span>
          <TextBox value={burger} placeHolder="메뉴" />
          {type === "세트" ? (
            <div className=" flex justify-center mx-14 space-x-10 relative">
              <div className=" absolute bottom-[130px] text-[50px] right-[140px]">
                세트
              </div>
              <TextBox value={side} placeHolder="사이드" />
              <div className=" text-center flex items-center"> /</div>
              <TextBox value={beverage} placeHolder="음료 옵션" />
            </div>
          ) : (
            <TextBox value={type} placeHolder="세트/단품" />
          )}
        </div>
        <div className=" flex justify-center items-center mx-14 space-x-10">
          {type === "단품" ? (
            beverage ? (
              <TextBox value={beverage} placeHolder="음료 옵션" />
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <TextBox value={quantity} placeHolder="0" />
          <div> 개</div>
          <div>부탁해요!</div>
          <span className=" absolute right-10">
            <DoubleQMarkRight />
          </span>
        </div>
        <div className=" flex justify-center mx-14 space-x-10"></div>
      </div>
    </div>
  );
}
