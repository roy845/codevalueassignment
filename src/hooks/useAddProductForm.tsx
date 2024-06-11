import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { ProductData, productSchema } from "../schemas/productSchema";
import { useAppDispatch } from "../app/hooks";
import { dataUrlPattern, imagePrefix } from "../constants/regex/regex";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../features/productList/productListSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useToast, { ToastProps } from "./useToast";
import { RoutesEnum } from "../constants/routesConstants";

const useAddProductForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductData>({
    mode: "all",
    resolver: zodResolver(productSchema),
  });

  const navigate: NavigateFunction = useNavigate();

  const showToast: ({ message, options, type }: ToastProps) => void =
    useToast();

  const fileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const isImage = (base64String: string): boolean => {
    const match: RegExpMatchArray | null = base64String.match(dataUrlPattern);
    if (match) {
      const mimeType: string = match[1];
      return mimeType.startsWith(imagePrefix);
    }
    return false;
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        const base64String: string = reader.result as string;
        if (isImage(base64String)) {
          setImagePreview(base64String);
          setValue("image", base64String);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setValue("image", "");
    }
  };

  const onFileIconClick = (): void => {
    fileInputRef.current?.click();
  };

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setValue("price", Number(value));
  };

  const onSubmit = (data: ProductData): void => {
    dispatch(
      addProduct({
        ...data,
        id: uuidv4(),
      })
    );

    showToast({
      message: `Product ${data.name} added successfully`,
      type: "success",
      options: { position: "bottom-left" },
    });

    navigate(RoutesEnum.ROOT);
  };

  const isNameValid: boolean = !errors.name;
  const isPriceValid: boolean = !errors.price;
  const isDateValid: boolean = !errors.date;
  const isImageValid: boolean = !errors.image || !!imagePreview;

  const isValid: boolean =
    isNameValid && isPriceValid && isDateValid && isImageValid;

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
    fileInputRef,
    onImageChange,
    onFileIconClick,
    imagePreview,
    handlePriceChange,
    navigate,
    isValid,
  };
};

export default useAddProductForm;
