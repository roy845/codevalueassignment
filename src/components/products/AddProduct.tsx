import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { MdAdd } from "react-icons/md";

const AddProductButton = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="ml-5 mt-0.5">
      <Button
        node={
          <span className="flex items-center">
            <MdAdd className="mr-2 text-white" size={15} />
            Add product
          </span>
        }
        type="button"
        className={
          "bg-green-600 text-white hover:bg-green-700 focus:ring-indigo-500"
        }
        onClick={() => navigate("/addProduct")}
      />
    </div>
  );
};

export default AddProductButton;
