import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "./products/ProductDetails";
import AddProductForm from "./products/AddProductForm";
import PageNotFound from "../pages/NotFound";
import { RoutesEnum } from "../constants/routesConstants";

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

const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
