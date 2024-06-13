import { FormLabelEnum } from "../../constants/formLabelConstants";
import { FormPlaceholderEnum } from "../../constants/formPlaceholderConstants";
import {
  MAX_PRODUCT_DESCRIPTION_LENGTH,
  MAX_PRODUCT_NAME_LENGTH,
} from "../../constants/productsConstants";
import { ProductData } from "../../schemas/productSchema";
import FormError from "../common/FormError";
import FormInput from "../common/FormInput";
import FormLabel from "../common/FormLabel";
import Header from "../common/Header";
import AddProductFormButtons from "./AddProductFormButtons";
import CharacterCount from "./CharacterCount";
import ProductFormImagePreview from "./ProductFormImagePreview";
import ProductFormImageUpload from "./ProductFormImageUpload";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface ProductFormProps {
  title: string;
  register: UseFormRegister<ProductData>;
  handleSubmit: UseFormHandleSubmit<ProductData>;
  errors: FieldErrors<ProductData>;
  onSubmit: (data: ProductData) => void;
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileIconClick: () => void;
  imagePreview: string | null;
  isValid: boolean;
  nameLength: number;
  descriptionLength: number;
}

const ProductForm = ({
  title,
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
}: ProductFormProps): JSX.Element => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <Header sm title={title} />
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
        {errors.image && <FormError message={(errors.image as any).message} />}
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
        <CharacterCount current={nameLength} limit={MAX_PRODUCT_NAME_LENGTH} />
        {errors.name && <FormError message={(errors.name as any).message} />}
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
        {errors.price && <FormError message={(errors.price as any).message} />}
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
        <CharacterCount
          current={descriptionLength}
          limit={MAX_PRODUCT_DESCRIPTION_LENGTH}
        />
        {errors.description && (
          <FormError message={(errors.description as any).message} />
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
        {errors.date && <FormError message={(errors.date as any).message} />}
      </div>
      <AddProductFormButtons disabled={!isValid} />
    </form>
  );
};

export default ProductForm;
