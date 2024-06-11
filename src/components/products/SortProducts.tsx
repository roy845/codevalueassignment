import { sortProductsOptions } from "../../constants/sortProductsConstants";
import useSortProducts from "../../hooks/useSortProducts";
import Select from "../common/Select";
import Tooltip from "../common/Tooltip";

const SortProducts = (): JSX.Element => {
  const { sortCriteria, handleSortChange } = useSortProducts();

  return (
    <div className="w-full max-w-xs mx-auto mb-5">
      <Tooltip content="Sort by criteria">
        <Select
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
          options={sortProductsOptions}
          handleChange={handleSortChange}
          value={sortCriteria}
          placeholder="Select sort criteria"
        />
      </Tooltip>
    </div>
  );
};

export default SortProducts;
