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

export default function F11() {
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

  // const guideText = [
  //   "원하는 메뉴와 사이드 변경, 요청사항 등을 편하게 말씀해 주세요!",
  // ];

  const [gptStage, setGptStage] = useState(1);
  const [gptText, setGptText] = useState(
    "원하는 메뉴와 사이드 변경, 요청사항 등을 편하게 말씀해 주세요!"
  );

  const { startRecording, stopRecording, loading } = useAudioRecording();

  const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } =
    useVoiceGuidance();

  const initialRender = useRef(true);

  const handleVoiceEnd = async () => {
    const response = await startRecording();
    if (response) {
      // await handleAddProduct(response);
      const formData = new FormData();
      formData.append("audio_file", response, "audio.webm");

      const apiResponse = await fetch(
        "https://sr-kiosk-api-shs2783.koyeb.app/api/stt/gpt",
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: formData,
        }
      );

      const result: any = await apiResponse.json();
      console.log(result);
      if (!result.ok) {
        setGptText(result.context.answer);
        setGptStage((prev) => prev + 1);
      } else {
        setGptText("주문이 완료되었습니다, 감사합니다.");
        result.menu.map((product: any, index: number) => {
          // handleAddProduct({
          //   ...product,
          //   orderNumber: order.currentOrderNumber + index,
          // });
          handleAddProduct({
            orderNumber: +order.currentOrderNumber + index,
            burger: product.burger,
            beverage: product.beverage,
            quantity: product.quantity,
            side: product.side,
            type: product.type,
            ingredients: {
              피클: 0,
              토마토: 0,
              양상추: 0,
              양파: 0,
              고기패티: 0,
              치즈: 0,
            },
          });
        });
        setGptStage(5);
        setTimeout(() => {
          router.push("/f2");
        }, 4000);
        return;
      }
    }
  };

  // 최초 화면 진입
  useEffect(() => {
    handleSetOrderStage(0);

    startVoiceGuidance(gptText, handleVoiceEnd);

    //
  }, []);

  useEffect(() => {
    if (gptStage !== 5) startVoiceGuidance(gptText, handleVoiceEnd);
  }, [gptStage]);

  // 주문 단계별 Flow
  // useEffect(() => {
  //   if (order.orderStage === 0) {
  //     startVoiceGuidance(guideText[order.orderStage], handleVoiceEnd);
  //   }

  //   if (order.orderStage === 1) {
  //     startVoiceGuidance(guideText[order.orderStage], () => {
  //       setTimeout(() => {
  //         handleSetPayStage(0);
  //         router.push("/f2");
  //       }, 1000);
  //     });
  //   }

  //   if (order.orderStage === 2) {
  //     startVoiceGuidance(
  //       guideText[order.orderStage],
  //       // () =>
  //       // setTimeout(() => {
  //       //   handleSetOrderStage(5);
  //       // }, 10000)

  //       handleVoiceEnd
  //     );
  //   }

  //   if (order.orderStage === 3) {
  //     startVoiceGuidance(guideText[order.orderStage]);
  //   }

  //   if (order.orderStage === 4) {
  //     startVoiceGuidance(guideText[order.orderStage], () => {
  //       setTimeout(() => {
  //         handleSetPayStage(0);
  //         router.push("/");
  //       }, 1000);
  //     });
  //   }

  //   if (order.orderStage === 5) {
  //     startVoiceGuidance(guideText[order.orderStage], handleVoiceEnd);
  //   }

  //   let intervalId: NodeJS.Timeout;
  //   if (
  //     order.orderStage !== 2 &&
  //     order.orderStage !== 5 &&
  //     order.orderStage !== 3
  //   )
  //     setTimer(60);
  //   intervalId = setInterval(() => {
  //     setTimer((prevTimer) => {
  //       console.log(prevTimer);
  //       if (prevTimer === 21) handleSetOrderStage(4);
  //       if (prevTimer === 31) handleSetOrderStage(3);
  //       if (prevTimer > 1) return prevTimer - 1;

  //       clearInterval(intervalId);
  //       router.push("/");
  //       return 0;
  //     });
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [order.orderStage]);

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
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">추천메뉴</div>
      </div>
      <div className=" grid grid-cols-3  mb-20 pt-10 pb-6 mx-14 space-x-10">
        <div
          data-text="빅맥"
          className=" relative col-span-1 overflow-hidden shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)] rounded-[60px] "
          onClick={(e: any) => orderHandler(e)}
        >
          <div className=" left-20 absolute text-[50px] text-gray-Dark font-bold bottom-[410px] right-20 whitespace-pre-line">
            빅맥
          </div>
          <Image
            className=" relative left-[212px] top-4"
            src="/burgers/bigMac.png"
            alt=""
            width={400.95}
            height={270.62}
          />
          <div className=" flex-col text-center mt-[100px]">
            <div className=" text-[50px] text-gray-Medium">단품 5,900원</div>
            <div className=" text-[50px] text-gray-Medium">세트 8,300원</div>
          </div>
        </div>
        <div
          data-text="불고기 버거"
          className=" col-span-1 relative overflow-hidden shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)] rounded-[60px]"
          onClick={(e: any) => orderHandler(e)}
        >
          <div>
            <div className=" left-20 absolute text-[50px] text-gray-Dark font-bold bottom-[350px] right-20 whitespace-pre-line">
              {`불고기\n버거\n`}
            </div>
            <Image
              className=" relative left-40 bottom-6"
              src="/burgers/bulgogi.png"
              alt=""
              width={585.95}
              height={407.62}
            />
          </div>
          <div className=" flex-col text-center mt-20 relative bottom-[26px]">
            <div className=" text-[50px] text-gray-Medium">단품 5,900원</div>
            <div className=" text-[50px] text-gray-Medium">세트 8,300원</div>
          </div>
        </div>
        <div
          data-text="베이컨 토마토 디럭스"
          className=" col-span-1 relative overflow-hidden shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)] rounded-[60px]"
          onClick={(e: any) => orderHandler(e)}
        >
          <div className=" ">
            <div className=" left-20 absolute text-[50px] text-gray-Dark font-bold bottom-[290px] right-20 whitespace-pre-line">
              {`베이컨\n토마토\n디럭스`}
            </div>
            <Image
              className=" relative left-40"
              src="/burgers/btd.png"
              alt=""
              width={585.95}
              height={407.62}
            />
          </div>
          <div className=" flex-col text-center mt-20">
            <div className=" text-[50px] text-gray-Medium">단품 5,900원</div>
            <div className=" text-[50px] text-gray-Medium">세트 8,300원</div>
          </div>
        </div>
      </div>
      <div className=" text-guide flex mx-12  mt-32 font-medium mb-40">
        <GuideBox text={gptText} isLoading={loading} />
      </div>
      <div className=" text-[70px] mx-12">
        <div className=" mx-20">
          {` 주문을 마치려면 "주문 완료"라고 말씀해주세요`}
        </div>
        {/* <div className=" font-bold">주문 내역</div>
        <div className=" flex text-center">
          {order.products.map((product, index) => (
            <div key={product.orderNumber} className=" flex-col flex mt-6">
              <span>
                <Image
                  className=" shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)] rounded-full"
                  src="/burgers/bigMac.png"
                  alt=""
                  width={261}
                  height={262}
                />
              </span>
              <div>{product.burger}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
