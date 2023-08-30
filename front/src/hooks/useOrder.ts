import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addProduct,
  updateProduct,
  removeProduct,
  resetOrder,
  setTakeout,
  setCurrentOrderNumber,
  setOrderStage,
  setPayStage,
  setTargetOrderNumber,
} from "@/redux/slices/orderSlice";
import { Product } from "@/redux/slices/orderTypes";
import { processVoiceToOrderState } from "@/redux/thunks/orderThunks";
import useAudioRecording from "@/hooks/useAudioRecording";
import { current } from "@reduxjs/toolkit";

type AddProductInput = Product | Blob;

const useOrder = () => {
  // const { startRecording, stopRecording, loading } = useAudioRecording();

  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order);

  const handleAddProduct = async (input: AddProductInput) => {
    if (!(input instanceof Blob)) {
      const currentState = dispatch((dispatch, getState) => getState()).order;
      if (
        currentState.products.some(
          (product) => product.orderNumber === input.orderNumber
        )
      ) {
        return;
      }
      dispatch(addProduct(input));
      dispatch(setOrderStage(1));
    } else {
      const currentState = dispatch((dispatch, getState) => getState()).order;
      // if (currentState.orderStage === 1 || currentState.orderStage === 2)
      //   return;

      try {
        const result = await dispatch(processVoiceToOrderState(input));

        if (result.payload.burger) {
          dispatch(setOrderStage(1));
        } else {
          currentState.orderStage === 2
            ? dispatch(setOrderStage(5))
            : dispatch(setOrderStage(2));
        }
      } catch (error) {
        console.error("Error processing voice:", error);
        return;
      }
    }
  };

  const handleUpdateProduct = (
    orderNumber: number,
    changes: Partial<Product>
  ) => {
    console.log(orderNumber, changes);
    dispatch(updateProduct({ orderNumber, changes }));
  };

  const handleRemoveProduct = (orderNumber: number) =>
    dispatch(removeProduct(orderNumber));

  const handleResetOrder = () => dispatch(resetOrder());

  const handleSetTakeout = (isTakeout: boolean) =>
    dispatch(setTakeout(isTakeout));

  const handleSetOrderStage = (orderStage: number) =>
    dispatch(setOrderStage(orderStage));

  const handleSetCurrentOrderNumber = (orderNumber: number) =>
    dispatch(setCurrentOrderNumber(orderNumber));

  const handleSetPayStage = (payStage: number) =>
    dispatch(setPayStage(payStage));

  const handleSetTargetOrderNumber = (targetOrderNumber: number) =>
    dispatch(setTargetOrderNumber(targetOrderNumber));

  return {
    order,
    handleAddProduct,
    handleUpdateProduct,
    handleRemoveProduct,
    handleResetOrder,
    handleSetTakeout,
    handleSetCurrentOrderNumber,
    handleSetOrderStage,
    handleSetPayStage,
    handleSetTargetOrderNumber,
  };
};

export default useOrder;
