export interface Product {
  orderNumber: number;
  type: string | null;
  burger: string | null;
  side: string | null;
  beverage: string | null;
  quantity: number | null;
}

// export interface CustomerInfo {
//   name: string;
//   email: string;
// }

export interface OrderState {
  products: Product[];
  isTakeout: boolean;
}
