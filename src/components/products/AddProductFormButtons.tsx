import { NavigateFunction, useNavigate } from "react-router-dom";
import { ButtonEnum } from "../../constants/buttonConstants";
import { RoutesEnum } from "../../constants/routesConstants";
import Button from "../common/Button";

type AddProductFormButtonsProps = {
  disabled: boolean;
};

const AddProductFormButtons = ({ disabled }: AddProductFormButtonsProps) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <Button
        text={ButtonEnum.CANCEL}
        type="button"
        onClick={() => navigate(RoutesEnum.ROOT)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />
      <Button
        text={ButtonEnum.SAVE}
        type="submit"
        disabled={disabled}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default AddProductFormButtons;
