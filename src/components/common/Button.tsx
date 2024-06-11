import { ButtonType } from "../../types/buttonTypes";

interface ButtonProps {
  text?: string;
  type: ButtonType;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  node?: React.ReactNode;
}
//
const Button = ({
  text,
  type,
  onClick,
  disabled,
  className,
  node,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        disabled ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {node && node}
      {text}
    </button>
  );
};

export default Button;
