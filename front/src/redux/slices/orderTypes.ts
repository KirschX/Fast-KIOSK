interface Ingredients {
  [key: string]: number;
}

interface BurgerPrices {
  [key: string]: number[];
}

interface MenuPrice {
  [key: string]: number;
}

export interface MenuPrices {
  burger: BurgerPrices;
  options: MenuPrice;
}
export interface Product {
  orderNumber: number;
  type: string;
  burger: string;
  side: string | null;
  beverage: string | null;
  quantity: number;
  ingredients: Ingredients;
}

// export interface CustomerInfo {
//   name: string;
//   email: string;
// }

export interface OrderState {
  ok: boolean;
  products: Product[];
  isTakeout: boolean;
  orderStage: number;
  payStage: number;
  currentOrderNumber: number;
  targetOrderNumber: number;
  menuPrices: MenuPrices;
}
// type: {
//   basic: number;
//   deluxe: number;
// };
// side: {
//   fries: number;
//   friesAndCheeseSticks: number;
//   coleslaw: number;
// };
// beverage: {
//   coke: number;
//   zeroCoke: number;
//   sprite: number;
//   HotAmericano: number;
//   IceAmericano: number;
// };
