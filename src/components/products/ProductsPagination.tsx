import React from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  setCurrentPage,
  selectTotalPages,
} from "../../features/productList/productListSlice";
import { useAppSelector } from "../../app/hooks";
import Button from "../common/Button";

const ProductsPagination: React.FC = () => {
  const dispatch = useDispatch();
  const totalPages = useAppSelector(selectTotalPages);
  const currentPage = useAppSelector(
    (state: RootState) => state.productList.currentPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-4">
      <Button
        text="Previous Page"
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />

      <span>
        {currentPage}/{totalPages}
      </span>

      <Button
        text="Next Page"
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default ProductsPagination;
