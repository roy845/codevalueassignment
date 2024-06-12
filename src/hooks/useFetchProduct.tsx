import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import {
  fetchProduct,
  setProductUndefined,
} from "../features/productList/productListSlice";

const useFetchProduct = (productId: string): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }

    return () => {
      dispatch(setProductUndefined());
    };
  }, [dispatch, productId]);
  return null;
};

export default useFetchProduct;
