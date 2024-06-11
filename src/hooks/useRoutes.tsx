import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/NotFound";
import { RoutesEnum } from "../constants/routesConstants";
import AddProductForm from "../components/products/AddProductForm";
import ProductDetails from "../components/products/ProductDetails";

const useRoutes = () => {
  const router = createBrowserRouter([
    {
      path: RoutesEnum.PRODUCTS,
      element: <Home />,
      children: [
        {
          path: RoutesEnum.ADD_PRODUCT,
          element: <AddProductForm />,
        },
        {
          path: RoutesEnum.PRODUCT_DETAILS,
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: RoutesEnum.ROOT,
      element: <Navigate to={RoutesEnum.PRODUCTS} replace />,
    },
    {
      path: RoutesEnum.CATCH_ALL,
      element: <PageNotFound />,
    },
  ]);

  return router;
};

export default useRoutes;
