type FormErrorProps = {
  message: string | undefined; // I would pass it as children
};

const FormError = ({ message }: FormErrorProps): JSX.Element => {
  return <p className="text-red-500 text-xs italic">{message}</p>;
};

export default FormError;

// When you make a component, keep on the following structure:

type ComponentTestProps = {

}

const ComponentTest: React.FC<ComponentTestProps> = ({}) => {
  return (
    <></>
  )
}
