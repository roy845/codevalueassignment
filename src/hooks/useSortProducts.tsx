import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setSortCriteria } from "../features/productList/productListSlice";

const useSortProducts = () => {
  const dispatch = useAppDispatch();

  const sortCriteria: "name" | "date_asc" | "date_desc" = useAppSelector(
    (state: RootState) => state.productList.sortCriteria
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setSortCriteria(e.target.value as "name" | "date_asc" | "date_desc")
    );
  };
  return { sortCriteria, handleSortChange };
};

export default useSortProducts;
