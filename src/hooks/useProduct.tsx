import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { deleteProduct } from "../features/productList/productListSlice";
import useToast, { ToastProps } from "./useToast";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const showToast: ({ message, options, type }: ToastProps) => void =
    useToast();

  const { pathname } = useLocation();

  const deleteProductById = (productName: string, productId: string): void => {
    dispatch(deleteProduct(productId));
    showToast({
      message: `Product ${productName} deleted successfully`,
      type: "success",
      options: { position: "bottom-left" },
    });
  };

  const handleDeleteClick: (
    productName: string,
    productId: string,
    e: React.MouseEvent
  ) => void = (productName: string, productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteProductById(productName, productId);
  };

  const navigateToProductComponent = (productId: string): void => {
    navigate(`/product/${productId}`);
  };

  const productId: string = pathname.split("/")[2];

  return {
    productId,
    handleDeleteClick,
    navigateToProductComponent,
  };
};

export default useProduct;
