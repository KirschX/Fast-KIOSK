"use client";

import useOrder from "@/hooks/useOrder";
import Character_head from "@public/character_head.svg";
import OrderNumberExample from "@public/orderNumberExample.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Side() {
  const router = useRouter();
  const {
    handleAddProduct,
    order,
    handleUpdateProduct,
    handleResetOrder,
    handleSetOrderStage,
    handleSetPayStage,
  } = useOrder();

  const orderUpdateHandler = (
    e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>
  ) => {
    e.preventDefault();
    // const itemId = e.currentTarget.getAttribute("data-id");
    const itemText = e.currentTarget.getAttribute("data-text");
    const { products, currentOrderNumber, targetOrderNumber } = order;
    const product = products[targetOrderNumber];

    handleUpdateProduct(targetOrderNumber, { side: itemText });

    router.push(`/f2/beverage`);
  };

  const menuItems = [
    { src: "/side/coleslaw.png", text: "코울슬로", id: "coleslaw" },
    { src: "/side/potato.png", text: "후렌치후라이", id: "potato" },
    { src: "/side/cheese.png", text: "치즈스틱", id: "cheese" },
    // ... add more items as necessary
  ];

  useEffect(() => {
    console.log(order);
  }, [order]);

  return (
    <div className=" w-full items-start">
      <div className=" flex justify-start">
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">
          사이드 변경
        </div>
      </div>

      <div className=" grid grid-cols-2 text-[64px] my-40 text-center mx-20 font-semibold grid-flow-row auto-rows-[minmax(650px,_auto)] justify-items-center ">
        {menuItems.map((item, index) => (
          <div
            key={item.text}
            className="border rounded-3xl border-gray-default m-4 flex-col flex justify-center"
          >
            <Image
              data-text={item.text}
              onClick={(e) => orderUpdateHandler(e)}
              src={item.src}
              width={699}
              height={600}
              alt={item.text}
            />
            {item.text}
          </div>
        ))}
      </div>

      <div className=" flex justify-center items-center ">
        <div
          onClick={() => {
            router.push("/f2");
          }}
          className="w-full rounded-[50px] drop-shadow-[-5px_20px_4px_rgba(0,0,0,0.15)] bg-gray-Light_2  p-4 mx-20 shadow-lg text-[140px] text-center"
        >
          뒤로 가기
        </div>
      </div>
    </div>
  );
}
