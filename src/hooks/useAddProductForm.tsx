import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { ProductData, productSchema } from "../schemas/productSchema";
import { useAppDispatch } from "../app/hooks";
import { dataUrlPattern, imagePrefix } from "../constants/regex/regex";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../features/productList/productListSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";

const useAddProductForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ProductData>({
    mode: "all",
    resolver: zodResolver(productSchema),
  });

  const navigate: NavigateFunction = useNavigate();

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

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue("price", Number(value));
  };

  const onSubmit = (data: ProductData) => {
    dispatch(
      addProduct({
        ...data,
        id: uuidv4(),
      })
    );

    navigate("/");
    console.log(data);
  };

  return {
    register,
    isValid,
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
  };
};

export default useAddProductForm;
