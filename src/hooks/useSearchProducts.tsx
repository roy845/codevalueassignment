import React, { useEffect, useState } from "react";
import { setSearchProduct } from "../features/productList/productListSlice";
import useDebounce from "./useDebounce";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const useSearchProducts = () => {
  const { searchProducts } = useAppSelector((state) => state.productList);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(searchProducts);

  const debouncedDispatch: (...args: any[]) => void = useDebounce(
    (value: string) => {
      dispatch(setSearchProduct(value));
    },
    500
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    debouncedDispatch(inputValue);
  }, [inputValue, debouncedDispatch]);

  return { inputValue, handleChange };
};

export default useSearchProducts;
