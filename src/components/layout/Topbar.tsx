import { NavigateFunction, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Tooltip from "../common/Tooltip";
import { HeaderEnum } from "../../constants/headerConstants";
import { TooltipEnum } from "../../constants/tooltipConstants";
import { RoutesEnum } from "../../constants/routesConstants";

const Topbar = (): React.JSX.Element => {
  // you don't need to define the type, it's already inferred from the hook
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="bg-[#0d0c26] p-4 text-white flex items-center justify-between shadow-lg">
      <Tooltip content={TooltipEnum.HOME}>
        <Header
          cursor
          sm
          title={HeaderEnum.MainHeader}
          onClick={() => navigate(RoutesEnum.ROOT)}
        />
      </Tooltip>
    </div>
  );
};

export default Topbar;
