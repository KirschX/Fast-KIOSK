import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "@/redux/slices/orderSlice";
import recordingSlice from "./slices/recordingSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
    recording: recordingSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Define RootState type based on the rootReducer
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
