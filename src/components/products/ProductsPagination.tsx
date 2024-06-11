import Button from "../common/Button";
import useProductsPagination from "../../hooks/useProductsPagination";
import { ButtonEnum } from "../../constants/buttonConstants";

const ProductsPagination = (): JSX.Element => {
  const { currentPage, handlePageChange, totalPages } = useProductsPagination();

  return (
    <div className="flex justify-center items-center mt-4 space-x-4">
      <Button
        text={ButtonEnum.PREVIOUS_PAGE}
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />

      <span>
        {currentPage}/{totalPages}
      </span>

      <Button
        text={ButtonEnum.NEXT_PAGE}
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || currentPage > totalPages}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default ProductsPagination;
