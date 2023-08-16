import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addProduct,
  updateProduct,
  removeProduct,
  resetOrder,
  setTakeout,
} from "@/redux/slices/orderSlice";
import { Product } from "@/redux/slices/orderTypes";

const useOrder = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order);

  const handleAddProduct = (product: Product) => dispatch(addProduct(product));

  const handleUpdateProduct = (
    orderNumber: number,
    changes: Partial<Product>
  ) => {
    dispatch(updateProduct({ orderNumber, changes }));
  };

  const handleRemoveProduct = (product: Product) =>
    dispatch(removeProduct(product));

  const handleResetOrder = () => dispatch(resetOrder());

  const handleSetTakeout = (isTakeout: boolean) =>
    dispatch(setTakeout(isTakeout));

  return {
    order,
    handleAddProduct,
    handleUpdateProduct,
    handleRemoveProduct,
    handleResetOrder,
    handleSetTakeout,
  };
};

export default useOrder;
