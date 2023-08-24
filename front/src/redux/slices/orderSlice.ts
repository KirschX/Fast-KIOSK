import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState, Product } from "./orderTypes";
import { processVoiceToOrderState } from "@/redux/thunks/orderThunks";

const initialState: OrderState = {
  products: [],
  isTakeout: false,
  ok: false,
  orderStage: 0,
  payStage: 0,
  currentOrderNumber: 0,
  targetOrderNumber: 0,
  // ingredients: [],
  menuPrices: {
    burger: {
      bigMac: [5900, 8300],
      BTD: [5800, 8200],
      bulgogi: [4500, 5900],
    },
    options: {
      pickle: 300,
      tomato: 300,
      cabbage: 300,
      onion: 300,
      patty: 1000,
      cheese: 500,
    },
    // side: {
    //   fries: ;
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
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.orderNumber !== action.payload
      );
    },
    updateProduct: (
      state,
      action: PayloadAction<{ orderNumber: number; changes: Partial<Product> }>
    ) => {
      const { orderNumber, changes } = action.payload;
      console.log(orderNumber, changes);
      const product = state.products.find(
        (product) => product.orderNumber == orderNumber
      );
      if (product) {
        Object.assign(product, changes);
      }
      console.log(product);
    },
    resetOrder: () => {
      return { ...initialState };
    },
    setTakeout: (state, action: PayloadAction<boolean>) => {
      state.isTakeout = action.payload;
    },
    setOrderStage: (state, action: PayloadAction<number>) => {
      state.orderStage = action.payload;
    },
    setPayStage: (state, action: PayloadAction<number>) => {
      state.payStage = action.payload;
    },
    setCurrentOrderNumber: (state, action: PayloadAction<number>) => {
      // console.log(action.payload);
      state.currentOrderNumber = action.payload;
    },
    setTargetOrderNumber: (state, action: PayloadAction<number>) => {
      state.targetOrderNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(processVoiceToOrderState.fulfilled, (state, action) => {
      console.log(action.payload);
      // if (state.orderStage === 1) return;
      if (action.payload.burger)
        state.products.push({
          ...action.payload,
          quantity: +action.payload.quantity || 1,
          orderNumber: state.products.length,
          ingredients: {
            피클: 0,
            토마토: 0,
            양상추: 0,
            양파: 0,
            패티: 0,
            치즈: 0,
          },
        });
      // if (action.payload.burger) state.orderStage = 1;
      // else state.orderStage = 2;
    });
    builder.addCase(processVoiceToOrderState.rejected, (state, action) => {
      // state.errorMessage = action.error.message;
    });
  },
});

export const {
  addProduct,
  removeProduct,
  resetOrder,
  updateProduct,
  setTakeout,
  setCurrentOrderNumber,
  setOrderStage,
  setPayStage,
  setTargetOrderNumber,
} = orderSlice.actions;

export default orderSlice.reducer;
