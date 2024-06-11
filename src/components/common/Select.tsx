import { SelectOption } from "../../types/sortProductsOptions";

type SelectProps<T> = {
  value: T;
  className?: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
};

const Select = <T extends string | number | readonly string[] | undefined>({
  value,
  handleChange,
  options,
  placeholder,
  className,
}: SelectProps<T>): JSX.Element => {
  return (
    <select
      value={value}
      onChange={handleChange}
      className={`${className} cursor-pointer`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value.toString()} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
