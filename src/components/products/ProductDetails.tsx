import React from "react";
import { MdFileUpload } from "react-icons/md";
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

type RouteParams = {
  productID: string;
};

const ProductDetails = (): JSX.Element => {
  const { productID } = useParams<RouteParams>();
  useFetchProduct(productID as string);
  const { product } = useAppSelector((state: RootState) => state.productList);

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
  } = useEditProduct(product as Product);

  if (!product) {
    return (
      <div className="mt-4">
        <ProductNotFound />
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Header sm title={`${product?.name} Details`} />
      <>
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
      </>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="mb-4">
          <FormLabel label="Name" />
          <FormInput
            type="text"
            id="name"
            placeholder="Enter product name"
            register={register}
            fieldName="name"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
          />

          {errors.name && <FormError message={errors.name.message} />}
        </div>
        <div className="mb-4">
          <FormLabel label="Price" />

          <div className="relative">
            <FormInput
              type="number"
              id="price"
              placeholder="Enter product price"
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
          <FormLabel label="Description" />

          <FormTextArea
            id="description"
            register={register}
            fieldName="description"
          />

          {errors.description && (
            <FormError message={errors.description.message} />
          )}
        </div>
        <div className="mb-4">
          <FormLabel label="Date" />

          <FormInput
            type="date"
            id="date"
            placeholder="Enter product date"
            register={register}
            fieldName="date"
            onChange={handlePriceChange}
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
          />
          {errors.date && <FormError message={errors.date.message} />}
        </div>
        <div className="flex items-center justify-between">
          <Button
            text="Cancel"
            type="button"
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
          <Button
            text="Save"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </section>
  );
};

export default ProductDetails;
