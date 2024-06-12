import useSearchProducts from "../../hooks/useSearchProducts";
import Input from "../common/Input";

const SearchProducts = (): JSX.Element => {
  const { inputValue, handleChange } = useSearchProducts();

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
