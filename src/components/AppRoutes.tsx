import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "./products/ProductDetails";
import AddProductForm from "./products/AddProductForm";
import PageNotFound from "../pages/NotFound";
import ProductNotFound from "./products/ProductNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="addProduct" element={<AddProductForm />} />
        <Route path="product/:productID" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="productNotFound" element={<ProductNotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
