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

// First, you already have Input component so you can use that instead,
// Second, why do you put the register over here? I don't think you understand the concept of react-hook-form
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
