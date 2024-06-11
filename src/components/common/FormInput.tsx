import React from "react";
import { UseFormRegister, FieldPath, FieldValues } from "react-hook-form";

interface InputProps<TFieldValues extends FieldValues> {
  register: UseFormRegister<TFieldValues>;
  fieldName: FieldPath<TFieldValues>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: Array<{ label: string; value: string }>;
  className?: string;
  id: string;
}

function FormInput<TFieldValues extends FieldValues>({
  id,
  register,
  fieldName,
  placeholder,
  type,
  onChange,
  className,
}: InputProps<TFieldValues>): JSX.Element {
  return (
    <input
      {...register(fieldName)}
      id={id}
      type={type}
      placeholder={placeholder}
      className={type === "date" ? `${className} cursor-pointer` : className}
      onChange={onChange}
    />
  );
}

export default FormInput;
