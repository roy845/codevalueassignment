interface InputProps<
  T extends string | number | readonly string[] | undefined
> {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: T;
}

function Input<T extends string | number | readonly string[] | undefined>({
  placeholder,
  value,
  type,
  onChange,
  className = "mt-1 block w-full px-3 py-2 border border-white bg-[#0d0c26] text-white rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-left",
}: InputProps<T>): JSX.Element {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${className}`}
      onChange={onChange}
    />
  );
}

export default Input;
