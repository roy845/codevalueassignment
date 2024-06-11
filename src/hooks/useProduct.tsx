import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { deleteProduct } from "../features/productList/productListSlice";
import useToast from "./useToast";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const showToast = useToast();

  const deleteProductById = (productName: string, productId: string) => {
    dispatch(deleteProduct(productId));
    showToast({
      message: `Product ${productName} deleted successfully`,
      type: "success",
      options: { position: "bottom-left" },
    });
  };

  const handleDeleteClick = (
    productName: string,
    productId: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    deleteProductById(productName, productId);
  };

  const navigateToProductComponent = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return {
    deleteProductById,
    handleDeleteClick,
    navigateToProductComponent,
  };
};

export default useProduct;
