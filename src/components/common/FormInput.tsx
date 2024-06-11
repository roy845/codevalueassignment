import React from "react";
import { UseFormRegister, FieldPath, FieldValues } from "react-hook-form";

interface InputProps<TFieldValues extends FieldValues> {
  register: UseFormRegister<TFieldValues>;
  fieldName: FieldPath<TFieldValues>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id: string;
  maxLength?: number;
}

function FormInput<TFieldValues extends FieldValues>({
  id,
  register,
  fieldName,
  placeholder,
  type,
  onChange,
  className,
  maxLength,
}: InputProps<TFieldValues>): JSX.Element {
  return (
    <input
      {...register(fieldName, {
        valueAsNumber: type === "number" ? true : undefined,
      })}
      maxLength={maxLength}
      id={id}
      type={type}
      placeholder={placeholder}
      className={type === "date" ? `${className} cursor-pointer` : className}
      onChange={onChange}
    />
  );
}

export default FormInput;
