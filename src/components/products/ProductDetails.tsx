import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import useEditProduct from "../../hooks/useEditProduct";
import useFetchProduct from "../../hooks/useFetchProduct";
import { Product } from "../../types/productTypes";
import Button from "../common/Button";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import ProductNotFound from "./ProductNotFound";
import ProductFormImagePreview from "./ProductFormImagePreview";
import FormError from "../common/FormError";
import ProductFormImageUpload from "./ProductFormImageUpload";
import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";
import FormTextArea from "../common/FormTextArea";
import { FormPlaceholderEnum } from "../../constants/formPlaceholderConstants";
import { ButtonEnum } from "../../constants/buttonConstants";
import { FormLabelEnum } from "../../constants/formLabelConstants";
import { RoutesEnum } from "../../constants/routesConstants";
import {
  MAX_PRODUCT_DESCRIPTION_LENGTH,
  MAX_PRODUCT_NAME_LENGTH,
} from "../../constants/productsConstants";
import useDocumentTitle from "../../hooks/useDocumentTitle";

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
    navigate,
    isValid,
    nameLength,
    descriptionLength,
  } = useEditProduct(product as Product);

  if (!product) {
    return (
      <div className="mt-4">
        <ProductNotFound />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <Header sm title={`${product?.name} Details`} />
      <section className="flex flex-col items-center justify-center">
        <ProductFormImagePreview
          imagePreview={imagePreview}
          onFileIconClick={onFileIconClick}
        />
        <ProductFormImageUpload
          onFileIconClick={onFileIconClick}
          fileInputRef={fileInputRef}
          onImageChange={onImageChange}
        />

        {errors.image && <FormError message={errors.image.message} />}
      </section>

      <div className="mb-4">
        <FormLabel label={FormLabelEnum.NAME} />
        <input
          {...register("name")}
          maxLength={MAX_PRODUCT_NAME_LENGTH}
          id="Name"
          type="text"
          placeholder={FormPlaceholderEnum.ENTER_NAME}
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
        />
        <p className="text-sm text-end text-white-500">
          {nameLength}/{MAX_PRODUCT_NAME_LENGTH}
        </p>
        {errors.name && <FormError message={errors.name.message} />}
      </div>
      <div className="mb-4">
        <FormLabel label={FormLabelEnum.PRICE} />

        <div className="relative">
          <FormInput
            type="number"
            id="price"
            placeholder={FormPlaceholderEnum.ENTER_PRICE}
            register={register}
            fieldName="price"
            onChange={handlePriceChange}
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left pl-8"
          />

          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white">
            $
          </span>
        </div>
        {errors.price && <FormError message={errors.price.message} />}
      </div>
      <div className="mb-4">
        <FormLabel label={FormLabelEnum.DESCRIPTION} />

        <textarea
          id="description"
          {...register("description")}
          maxLength={MAX_PRODUCT_DESCRIPTION_LENGTH}
          placeholder={FormPlaceholderEnum.ENTER_DESCRIPTION}
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
        />
        <p className="text-sm text-end text-white-500">
          {descriptionLength}/{MAX_PRODUCT_DESCRIPTION_LENGTH}
        </p>
        {errors.description && (
          <FormError message={errors.description.message} />
        )}
      </div>
      <div className="mb-4">
        <FormLabel label={FormLabelEnum.DATE} />

        <FormInput
          type="date"
          id="date"
          placeholder={FormPlaceholderEnum.ENTER_DATE}
          register={register}
          fieldName="date"
          className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
        />
        {errors.date && <FormError message={errors.date.message} />}
      </div>
      <div className="flex items-center justify-between">
        <Button
          text={ButtonEnum.CANCEL}
          type="button"
          onClick={() => navigate(RoutesEnum.ROOT)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
        <Button
          text={ButtonEnum.SAVE}
          type="submit"
          disabled={!isValid}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );
};

export default ProductDetails;
