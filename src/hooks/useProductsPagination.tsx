import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  selectTotalPages,
  setCurrentPage,
} from "../features/productList/productListSlice";

const useProductsPagination = () => {
  const dispatch = useAppDispatch();
  const totalPages: number = useAppSelector(selectTotalPages);
  const currentPage: number = useAppSelector(
    (state: RootState) => state.productList.currentPage
  );

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };
  return {
    totalPages,
    currentPage,
    handlePageChange,
  };
};

export default useProductsPagination;
