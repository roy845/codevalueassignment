import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  selectTotalPages,
  setCurrentPage,
} from "../features/productList/productListSlice";

const useProductsPagination = () => {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(
    (state: RootState) => state.productList.currentPage
  );

  const handlePageChange = (page: number) => {
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
