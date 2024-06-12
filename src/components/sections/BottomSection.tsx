import { Outlet } from "react-router-dom";
import ProductList from "../products/ProductList";
import ProductsPagination from "../products/ProductsPagination";
import { ITEMS_PER_PAGE } from "../../constants/itemsPerPageConstants";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const BottomSection = (): JSX.Element => {
  const products = useAppSelector(
    (state: RootState) => state.productList.products
  );

  return (
    <>
      <div className="flex gap-4">
        <div className="flex-none w-72">
          <ProductList />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      {products.length > ITEMS_PER_PAGE && <ProductsPagination />}
    </>
  );
};

export default BottomSection;
