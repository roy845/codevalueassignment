import { ButtonType } from "../../types/buttonTypes";

// why do you use interface and not types?
interface ButtonProps {
  text?: string;
  type: ButtonType;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  node?: React.ReactNode; // Why not use children instead?
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

// Here's an example of how I would implement the Button instead

const NewButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${props.disabled ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""} ${props.className}`}
      {...props}
    />
  );
}