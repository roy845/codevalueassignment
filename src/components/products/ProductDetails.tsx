import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useFetchProduct from "../../hooks/useFetchProduct";
import { Product } from "../../types/productTypes";
import { useParams } from "react-router-dom";
import ElementNotFound from "../common/ElementNotFound";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ProductForm from "./ProductForm";
import useProductForm from "../../hooks/useProductForm";
import { ProductEnum } from "../../constants/productsConstants";

type RouteParams = {
  productID: string;
};

const ProductDetails = (): JSX.Element => {
  const { productID } = useParams<RouteParams>();
  useFetchProduct(productID as string);
  const { product } = useAppSelector((state: RootState) => state.productList);
  useDocumentTitle(`${product?.name} - Details`);

  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    handlePriceChange,
    fileInputRef,
    onImageChange,
    onFileIconClick,
    imagePreview,
    isValid,
    nameLength,
    descriptionLength,
  } = useProductForm(product as Product);

  if (!product) {
    return (
      <div className="mt-4">
        <ElementNotFound element={ProductEnum.PRODUCT} />
      </div>
    );
  }

  return (
    <ProductForm
      title={`${product.name} Details`}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      handlePriceChange={handlePriceChange}
      fileInputRef={fileInputRef}
      onImageChange={onImageChange}
      onFileIconClick={onFileIconClick}
      imagePreview={imagePreview}
      isValid={isValid}
      nameLength={nameLength}
      descriptionLength={descriptionLength}
    />
  );
};

export default ProductDetails;
