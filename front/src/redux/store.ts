import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "@/redux/slices/orderSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Define RootState type based on the rootReducer
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
