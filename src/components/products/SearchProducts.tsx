import useSearchTasks from "../../hooks/useSearchProducts";
import Input from "../common/Input";

const SearchProducts = () => {
  const { inputValue, handleChange } = useSearchTasks();

  return (
    <div className="w-full max-w-xs mx-auto mb-5">
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search products.."
      />
    </div>
  );
};

export default SearchProducts;
