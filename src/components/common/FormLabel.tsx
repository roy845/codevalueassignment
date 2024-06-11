type FormLabelProps = {
  label: string;
};

const FormLabel = ({ label }: FormLabelProps): JSX.Element => {
  return (
    <label
      htmlFor={label}
      className="block text-sm text-white font-medium  mb-2"
    >
      {label}
    </label>
  );
};

export default FormLabel;
