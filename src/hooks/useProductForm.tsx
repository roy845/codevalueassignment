import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { ProductData, productSchema } from "../schemas/productSchema";
import { Product } from "../types/productTypes";
import { useAppDispatch } from "../app/hooks";
import {
  addProduct,
  editProduct,
} from "../features/productList/productListSlice";
import { dataUrlPattern, imagePrefix } from "../constants/regex/regex";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useToast, { ToastProps } from "./useToast";
import { RoutesEnum } from "../constants/routesConstants";
import { Subscription } from "react-hook-form/dist/utils/createSubject";
import { v4 as uuidv4 } from "uuid";

const useProductForm = (product?: Product) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [nameLength, setNameLength] = useState<number>(0);
  const [descriptionLength, setDescriptionLength] = useState<number>(0);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ProductData>({
    mode: "all",
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: product?.name || "",
      price: product?.price || 0,
      description: product?.description || "",
      date: product?.date ? product.date.split("T")[0] : "",
      image: product?.image || "",
    },
  });

  const isNameValid: boolean = !errors.name;
  const isPriceValid: boolean = !errors.price;
  const isDateValid: boolean = !errors.date;
  const isImageValid: boolean = !errors.image || !!imagePreview;

  const isValid: boolean =
    isNameValid && isPriceValid && isDateValid && isImageValid;

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
        } else {
          showToast({
            message: "Please select a valid image",
            options: { position: "bottom-left" },
            type: "error",
          });
        }
      };
      reader.readAsDataURL(file);
    } else {
      showToast({
        message: "No Image file is selected. Please select an image file",
        options: { position: "bottom-left" },
        type: "error",
      });
      setImagePreview(null);
      setValue("image", "");
    }
  };

  const onFileIconClick = (): void => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    setValue("name", product?.name || "");
    setValue("price", product?.price || 1);
    setValue("image", product?.image || "");
    setImagePreview(product?.image || "");
    setValue("description", product?.description || "");
    setValue("date", product?.date?.split("T")[0] || "");
  }, [
    product?.id,
    product?.date,
    product?.description,
    product?.image,
    product?.name,
    product?.price,
    setValue,
  ]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    const subscription: Subscription = watch((value, { name }) => {
      if (name === "name") {
        setNameLength(value.name?.length || 0);
      } else if (name === "description") {
        setDescriptionLength(value.description?.length || 0);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = event.target.value;
    setValue("price", Number(value));
  };

  const onSubmit = (data: ProductData): void => {
    if (product) {
      try {
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
      } catch (error: any) {
        showToast({
          message: error?.message,
          type: "error",
          options: { position: "bottom-left" },
        });
      }
    } else {
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
    }

    navigate(RoutesEnum.ROOT);
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
    handlePriceChange,
    isValid,
    nameLength,
    descriptionLength,
  };
};

export default useProductForm;
