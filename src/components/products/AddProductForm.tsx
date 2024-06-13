import { ProductEnum } from "../../constants/productsConstants";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useProductForm from "../../hooks/useProductForm";
import ProductForm from "./ProductForm";

const AddProductForm = (): JSX.Element => {
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
  } = useProductForm();

  useDocumentTitle(ProductEnum.CREATE_NEW_PRODUCT);

  return (
    <ProductForm
      title={ProductEnum.CREATE_NEW_PRODUCT}
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

export default AddProductForm;
