"use client";

import useOrder from "@/hooks/useOrder";
import Character_head from "@public/character_head.svg";
import OrderNumberExample from "@public/orderNumberExample.svg";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Ingredients() {
  const router = useRouter();
  const {
    handleAddProduct,
    order,
    handleUpdateProduct,
    handleResetOrder,
    handleSetOrderStage,
    handleSetPayStage,
  } = useOrder();

  // const orderUpdateHandler = (
  //   e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>,
  //   type: string
  // ) => {
  //   e.preventDefault();
  //   // const itemText = e.currentTarget.getAttribute("data-id");
  //   const itemText = e.currentTarget.getAttribute("data-text");
  //   if (!itemText) return;

  //   const { products, targetOrderNumber } = order;
  //   const product = products[targetOrderNumber];

  //   switch (type) {
  //     case "추가":
  //       handleUpdateProduct(targetOrderNumber, {
  //         ingredients: {...Ingredients, }],
  //       });
  //       break;

  //     case "빼기": {
  //       break;
  //     }
  //   }

  //   router.push(`/f2/beverage`);
  // };
  const { products, targetOrderNumber } = order;
  const product = products[targetOrderNumber];
  const { ingredients = {} } = product || {};

  const orderUpdateHandler = (
    e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>,
    type: string
  ) => {
    e.preventDefault();

    const itemText = e.currentTarget.getAttribute(
      "data-text"
    ) as keyof typeof Ingredients;
    console.log(itemText);
    if (!itemText) return;

    const currentCount = ingredients[itemText] || 0;

    const newCount =
      type === "추가"
        ? currentCount + 1
        : type === "빼기"
        ? currentCount - 1
        : currentCount;

    const finalCount = newCount >= 0 ? newCount : 0;

    // Update the Ingredients object
    const updatedIngredients = {
      ...ingredients,
      [itemText]: finalCount,
    };

    handleUpdateProduct(targetOrderNumber, {
      ingredients: updatedIngredients,
    });
  };

  const menuItems = [
    { text: "피클", id: "pickle" },
    { text: "토마토", id: "tomato" },
    { text: "양상추", id: "cabbage" },
    { text: "양파", id: "onion" },
    { text: "고기패티", id: "patty" },
    { text: "치즈", id: "cheese" },
  ];

  return (
    <div className=" w-full items-start">
      <div className=" flex justify-start">
        <div className=" h-[300px] text-h1 font-bold pt-20 ml-10">결제완료</div>
      </div>
      <div>
        <div></div>
      </div>
      <div className=" p-10">
        <table className="table-fixed w-full text-[64px] text-center ">
          <thead className=" border-b-[1px] text-[50px] text-[#626262] font-normal">
            <tr className=" ">
              <th className=" w-1/5">메뉴</th>
              <th className=" w-1/5">추가비용</th>
              <th className=" w-3/5">수량변경</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index: number) => (
              <tr key={item.text}>
                <td>{item.text}</td>
                <td>{`${
                  order.menuPrices.options[
                    item.id as keyof typeof order.menuPrices.options
                  ]
                }원`}</td>
                <td className=" flex justify-center space-x-16 items-center">
                  <div
                    data-text={item.text}
                    onClick={(e: any) => {
                      orderUpdateHandler(e, "빼기");
                    }}
                    className=" border rounded-3xl px-20 py-6 my-4"
                  >
                    빼기
                  </div>
                  <div>
                    {ingredients[item.text as keyof typeof ingredients] || 0}
                  </div>
                  <div
                    data-text={item.text}
                    onClick={(e: any) => {
                      orderUpdateHandler(e, "추가");
                    }}
                    className=" border rounded-3xl px-20 py-6 my-4"
                  >
                    추가
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" flex justify-center items-center ">
        <div
          onClick={() => {
            router.push("/f2");
          }}
          className="w-full rounded-[50px] bg-gray-Light_2 text-gray-Medium p-4 mx-20 shadow-lg text-h2 text-center"
        >
          뒤로 가기
        </div>
      </div>
    </div>
  );
}
