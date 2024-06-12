import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { ProductData, productSchema } from "../schemas/productSchema";
import { useAppDispatch } from "../app/hooks";
import { dataUrlPattern, imagePrefix } from "../constants/regex/regex";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../features/productList/productListSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useToast, { ToastProps } from "./useToast";
import { RoutesEnum } from "../constants/routesConstants";
import { Subscription } from "react-hook-form/dist/utils/createSubject";

const useAddProductForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [nameLength, setNameLength] = useState<number>(0);
  const [descriptionLength, setDescriptionLength] = useState<number>(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductData>({
    mode: "all",
    resolver: zodResolver(productSchema),
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

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = event.target.value;
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

export default useAddProductForm;
