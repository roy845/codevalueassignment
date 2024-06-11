import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { MdAdd } from "react-icons/md";
import { ButtonEnum } from "../../constants/buttonConstants";
import { IconEnum } from "../../constants/iconConstants";
import { RoutesEnum } from "../../constants/routesConstants";

const AddProductButton = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="ml-5 mt-0.5">
      <Button
        node={
          <span className="flex items-center">
            <MdAdd className="mr-2 text-white" size={IconEnum.ICON_SIZE} />
            {ButtonEnum.ADD_PRODUCT}
          </span>
        }
        type="button"
        className={
          "bg-green-600 text-white hover:bg-green-700 focus:ring-indigo-500"
        }
        onClick={() => navigate(RoutesEnum.ADD_PRODUCT)}
      />
    </div>
  );
};

export default AddProductButton;
