"use client";
import Image from "next/image";
import Character_head from "@public/character_head.svg";
import { useRouter } from "next/navigation";
import useOrder from "@/hooks/useOrder";
import { computeTotalPrice, computeItemPrices } from "@/helper/orderComputer";
import { useEffect } from "react";
import useVoiceGuidance from "@/hooks/useVoiceGuidance";
import { setOrderStage } from "@/redux/slices/orderSlice";
import X from "@public/x.svg";
import GuideBox from "@/components/guideBox";
import useAudioRecording from "@/hooks/useAudioRecording";

export default function F2() {
  const router = useRouter();

  const {
    handleAddProduct,
    order,
    handleUpdateProduct,
    handleResetOrder,
    handleRemoveProduct,
    handleSetOrderStage,
    handleSetCurrentOrderNumber,
    handleSetPayStage,
    handleSetTargetOrderNumber,
  } = useOrder();

  const { startRecording, stopRecording, loading } = useAudioRecording();

  const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } =
    useVoiceGuidance();

  const { menuPrices, products, payStage } = order;

  const totalPrice = computeTotalPrice(order.menuPrices, order.products);
  const itemPrices = computeItemPrices(order.menuPrices, order.products);

  const guideText = [
    `결제하실 금액은 ${totalPrice}원 입니다.`,
    `결제를 원하시면 결제하기 라고 말씀하시거나 버튼을 눌러주세요.`,
  ];

  const guideTextJSX = [
    `결제하실 금액은 ${totalPrice}원 입니다.`,
    <>
      결제를 원하시면 <span className="text-WineBerry">결제하기</span> 라고
      말씀하시거나 버튼을 눌러주세요.
    </>,
  ];

  const handleVoiceEnd = async () => {
    const response: Blob | null = await startRecording();
    if (response) {
      // console.log(order);
      // if (order.ok) setOrderStage(1);
      // else setOrderStage(2);

      const formData = new FormData();
      formData.append("audio_file", response, "audio.webm");

      const responseData = await fetch(
        "https://sr-kiosk-api-shs2783.koyeb.app/api/stt/pay",
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: formData,
        }
      );

      const result = await responseData.json();
      console.log(result);
      if (result.pay) router.push("/f3");
    }
  };

  useEffect(() => {
    if (payStage === 0) {
      if (products.length !== 0)
        startVoiceGuidance(guideText[payStage], () => {
          handleSetPayStage(1);
        });
    }

    if (payStage === 1) {
      startVoiceGuidance(guideText[payStage], () => {
        handleVoiceEnd();
      });
    }
  }, [payStage]);

  // console.log(

  //   Object.keys(
  //     item.ingredients
  //   )
  //     .filter(
  //       (key) =>
  //         item.ingredients[key as keyof typeof item.ingredients] > 0
  //     )
  //     .map((item) => optionToKorean(item))
  //     .join(", ")

  // )

  return (
    <div className=" w-full items-start">
      <div className=" flex justify-start mb-20">
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">주문내역</div>
      </div>
      <div className=" grid grid-cols-11 text-[50px] mx-10 text-center">
        <div className=" col-span-3">메뉴</div>
        <div className=" col-span-3">구성변경</div>
        <div className=" col-span-2">가격</div>
        <div className=" col-span-2">수량변경</div>
        <div className=" col-span-1">취소</div>
      </div>
      <div className=" col-span-4 border-b-[1px] mb-20"> </div>
      {order.products.map((item, index) => (
        <div
          key={index}
          className=" grid grid-cols-11 text-[50px] mx-10 mb-10 text-center items-center"
        >
          <div className=" col-span-3">
            <div className=" flex-col">
              <div className=" font-bold">{item.burger}</div>
              <div className=" text-[36px] text-gray-Light overflow-hidden">
                {(() => {
                  const filteredKeys = Object.keys(item.ingredients).filter(
                    (key) =>
                      item.ingredients[key as keyof typeof item.ingredients] > 0
                  );

                  const displayText = filteredKeys.join(", ");
                  return displayText.length > 10
                    ? displayText.slice(0, 10) + "..."
                    : displayText;
                })()}
              </div>
              <div className=" text-[36px] text-gray-Light">{`${item.side}, ${item.beverage}`}</div>
            </div>
          </div>
          <div className=" col-span-3">
            <div className=" flex-col space-y-4">
              <div
                onClick={() => {
                  handleSetTargetOrderNumber(index);
                  router.push("f2/side");
                }}
                className=" rounded-[40px] p-4 border border-black"
              >
                <span>사이드/음료</span>
                <span className=" text-[32px] relative left-2">변경</span>
              </div>
              <div
                onClick={() => {
                  handleSetTargetOrderNumber(index);
                  router.push("f2/ingredients");
                }}
                className=" rounded-[40px] p-4 border border-black"
              >
                <span>재료</span>
                <span className=" text-[32px] relative left-2">변경</span>
              </div>
            </div>
          </div>
          <div className=" col-span-2">{`${itemPrices[index]}원`}</div>
          <div className=" col-span-2 space-x-6 font-bold">
            <span
              onClick={() => {
                console.log(+item.quantity - 1);
                handleUpdateProduct(index, {
                  quantity: +item.quantity - 1,
                });
              }}
              className=" text-[#D3D2D2] text-[120px]"
            >
              -
            </span>
            <span className=" text-[80px] relative bottom-[8px]">
              {item.quantity}
            </span>
            <span
              onClick={() => {
                console.log(item);
                console.log(order.products);
                handleUpdateProduct(index, {
                  quantity: +item.quantity + 1,
                });
              }}
              className=" text-[#D3D2D2] text-[120px]"
            >
              +
            </span>
          </div>
          <div
            onClick={() => {
              handleRemoveProduct(index);
              handleSetCurrentOrderNumber(order.currentOrderNumber - 1);
            }}
            className=" col-span-1"
          >
            <div className=" flex justify-center">
              <X />
            </div>
          </div>
        </div>
      ))}
      <div className=" col-span-4 border-b-[1px]"> </div>
      <div className=" flex justify-end p-4 text-guide font-bold mb-40">{`총 ${totalPrice}원`}</div>
      <div className=" mb-20">
        <GuideBox isLoading={loading}>{guideTextJSX[order.payStage]}</GuideBox>
      </div>
      <div className=" text-h2 font-bold text-center">
        <div className=" flex mx-20 space-x-20">
          <div
            onClick={() => {
              handleSetOrderStage(0);
              handleSetCurrentOrderNumber(order.currentOrderNumber + 1);
              router.push("/f1");
            }}
            className=" w-1/2 rounded-[80px] bg-gray-Light_2 text-gray-Medium p-20 shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)]"
          >
            추가 주문
          </div>
          <div
            onClick={() => {
              router.push("/f3");
            }}
            className=" w-1/2 rounded-[80px] bg-LightningYellow text-white p-20 shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)]"
          >
            결제하기
          </div>
        </div>
        <div
          className=" flex "
          onClick={() => {
            handleResetOrder();
            // handleRemoveProduct(order.currentOrderNumber);
            handleSetOrderStage(0);
            router.push("/f1");
          }}
        >
          <div className="w-full rounded-[80px] bg-gray-Light_2 text-gray-Medium p-4 mx-20 mt-20 shadow-lg">
            다시 주문
          </div>
        </div>
      </div>
    </div>
  );
}
