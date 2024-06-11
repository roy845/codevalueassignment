import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "./products/ProductDetails";
import AddProductForm from "./products/AddProductForm";
import PageNotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "addProduct",
        element: <AddProductForm />,
      },
      {
        path: "product/:productID",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
