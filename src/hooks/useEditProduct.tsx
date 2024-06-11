import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { ProductData, productSchema } from "../schemas/productSchema";
import { Product } from "../types/productTypes";
import { useAppDispatch } from "../app/hooks";
import { editProduct } from "../features/productList/productListSlice";
import { dataUrlPattern, imagePrefix } from "../constants/regex/regex";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useToast from "./useToast";

const useEditProduct = (product: Product) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ProductData>({
    resolver: zodResolver(productSchema),
    mode: "all",
    defaultValues: {
      name: product?.name || "",
      price: product?.price || 0,
      description: product?.description || "",
      date: product?.date ? product.date.split("T")[0] : "",
      image: product?.image || "",
    },
  });

  const navigate: NavigateFunction = useNavigate();

  const showToast = useToast();

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

  useEffect(() => {
    setValue("name", product?.name);
    setValue("price", product?.price);
    setValue("image", product?.image);
    setImagePreview(product?.image);
    setValue("description", product?.description);
    setValue("date", product?.date?.split("T")[0]);
  }, [product?.id, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log(isSubmitSuccessful);
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue("price", Number(value));
  };

  const onSubmit = (data: ProductData) => {
    dispatch(
      editProduct({
        ...data,
        id: product.id,
      })
    );

    showToast({
      message: `Product ${data.name} updated successfully`,
      type: "success",
      options: { position: "bottom-left" },
    });

    navigate("/");
  };

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
    navigate,
    handlePriceChange,
  };
};

export default useEditProduct;
