import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState, Product } from "./orderTypes";

const initialState: OrderState = {
  products: [
    {
      orderNumber: 1,
      burger: null,
      side: null,
      quantity: 1,
      beverage: null,
      type: null,
    },
  ],
  isTakeout: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ orderNumber: number }>) => {
      state.products = state.products.filter(
        (product) => product.orderNumber !== action.payload.orderNumber
      );
    },
    updateProduct: (
      state,
      action: PayloadAction<{ orderNumber: number; changes: Partial<Product> }>
    ) => {
      const { orderNumber, changes } = action.payload;
      const product = state.products.find(
        (product) => product.orderNumber === orderNumber
      );
      if (product) {
        Object.assign(product, changes);
      }
    },
    resetOrder: () => {
      console.log(initialState);
      return { ...initialState };
    },
    setTakeout: (state, action: PayloadAction<boolean>) => {
      state.isTakeout = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  resetOrder,
  updateProduct,
  setTakeout,
} = orderSlice.actions;

export default orderSlice.reducer;
