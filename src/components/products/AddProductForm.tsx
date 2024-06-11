import useAddProductForm from "../../hooks/useAddProductForm";
import Button from "../common/Button";
import FormError from "../common/FormError";
import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";
import FormTextArea from "../common/FormTextArea";
import Header from "../common/Header";
import ProductFormImagePreview from "./ProductFormImagePreview";
import ProductFormImageUpload from "./ProductFormImageUpload";

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
    navigate,
  } = useAddProductForm();

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Header sm title="Create new product" />
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

            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
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
            placeholder="Enter product description"
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
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
            className="mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left"
            onChange={handlePriceChange}
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
            text="Add Product"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </section>
  );
};

export default AddProductForm;
