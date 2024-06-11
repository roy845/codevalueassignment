import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setSortCriteria } from "../features/productList/productListSlice";
import { SortCriteria } from "../types/sortCriteriaTypes";

const useSortProducts = () => {
  const dispatch = useAppDispatch();

  const sortCriteria: SortCriteria = useAppSelector(
    (state: RootState) => state.productList.sortCriteria
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setSortCriteria(e.target.value as SortCriteria));
  };
  return { sortCriteria, handleSortChange };
};

export default useSortProducts;
