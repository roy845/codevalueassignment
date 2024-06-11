import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import MainLayout from "../components/layout/MainLayout";
import AddProductButton from "../components/products/AddProduct";
import ProductList from "../components/products/ProductList";
import ProductsPagination from "../components/products/ProductsPagination";
import SearchProducts from "../components/products/SearchProducts";
import SortProducts from "../components/products/SortProducts";
import { ITEMS_PER_PAGE } from "../constants/itemsPerPageConstants";

const Home = () => {
  const { products } = useAppSelector((state: RootState) => state.productList);

  return (
    <MainLayout title="Product List">
      <div className="flex space-x-4 mb-4">
        <AddProductButton />
        <SearchProducts />
        <SortProducts />
      </div>
      <div className="flex gap-4">
        <ProductList />
        <Outlet />
      </div>
      {products.length > ITEMS_PER_PAGE && <ProductsPagination />}
    </MainLayout>
  );
};

export default Home;
