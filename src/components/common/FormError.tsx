type FormErrorProps = {
  message: string | undefined;
};

const FormError = ({ message }: FormErrorProps): JSX.Element => {
  return <p className="text-red-500 text-xs italic">{message}</p>;
};

export default FormError;
