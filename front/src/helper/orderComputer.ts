import { MenuPrices, Product } from "@/redux/slices/orderTypes";

type BurgerType = "bigMac" | "bulgogi" | "BTD";

const burgerNameToTypeMapping: { [key: string]: BurgerType } = {
  빅맥: "bigMac",
  "불고기 버거": "bulgogi",
  "베이컨 토마토 디럭스": "BTD",
};

const optionToEnglish = (option: string) => {
  switch (option) {
    case "피클":
      return "pickle";
    case "양파":
      return "onion";
    case "토마토":
      return "tomato";
    case "양상추":
      return "cabbage";
    case "고기패티":
      return "patty";
    case "치즈":
      return "cheese";
    default:
      throw new Error(`Unknown option: ${option}`);
  }
};

export const getBurgerType = (name: string): BurgerType | undefined => {
  return burgerNameToTypeMapping[name];
};

export const computeTotalPrice = (
  menuPrices: MenuPrices,
  products: Product[]
): number => {
  return products.reduce((total: number, item: Product) => {
    let productPrice = 0;
    const burgerType = getBurgerType(item.burger);

    // 메인 메뉴 계산
    if (burgerType) {
      productPrice +=
        item.type === "단품"
          ? menuPrices.burger[burgerType][0] * item.quantity
          : menuPrices.burger[burgerType][1] * item.quantity;
    }

    // 옵션 추가 시 계산
    productPrice += Object.entries(item.ingredients).reduce((acc, cur) => {
      const [ingredient, quantity] = cur;
      // console.log(ingredient, quantity);
      if (quantity === 0) return acc;
      if (ingredient) {
        return acc + menuPrices.options[optionToEnglish(ingredient)] * quantity;
      } else return acc;
    }, 0);

    return total + productPrice;
  }, 0);
};

export const computeItemPrices = (
  menuPrices: MenuPrices,
  products: Product[]
): number[] => {
  return products.map((item: Product) => {
    let productPrice = 0;
    const burgerType = getBurgerType(item.burger);

    if (burgerType) {
      productPrice +=
        item.type === "단품"
          ? menuPrices.burger[burgerType][0] * item.quantity
          : menuPrices.burger[burgerType][1] * item.quantity;

      productPrice += Object.entries(item.ingredients).reduce((acc, cur) => {
        const [ingredient, quantity] = cur;
        if (quantity === 0) return acc;
        else
          return (
            acc + menuPrices.options[optionToEnglish(ingredient)] * quantity
          );
      }, 0);

      return productPrice;
    } else {
      return 0;
    }
  });
};
