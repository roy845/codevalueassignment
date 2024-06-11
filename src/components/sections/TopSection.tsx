import AddProductButton from "../products/AddProduct";
import SearchProducts from "../products/SearchProducts";
import SortProducts from "../products/SortProducts";

const TopSection = (): JSX.Element => {
  return (
    <div className="flex space-x-4 mb-4">
      <AddProductButton />
      <SearchProducts />
      <SortProducts />
    </div>
  );
};

export default TopSection;
