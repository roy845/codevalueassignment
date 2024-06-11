import React from "react";
import { UseFormRegister, FieldPath, FieldValues } from "react-hook-form";

interface InputProps<TFieldValues extends FieldValues> {
  register: UseFormRegister<TFieldValues>;
  fieldName: FieldPath<TFieldValues>;
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  id: string;
}

function FormTextArea<TFieldValues extends FieldValues>({
  id,
  register,
  maxLength,
  fieldName,
  placeholder,
  onChange,
  className = "mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left",
}: InputProps<TFieldValues>): JSX.Element {
  return (
    <textarea
      {...register(fieldName)}
      id={id}
      maxLength={maxLength}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}

export default FormTextArea;
