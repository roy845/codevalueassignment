import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const AddProductButton = () => {
  const navigate = useNavigate();
  return (
    <div className="ml-5">
      <Button
        text="Add product"
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
