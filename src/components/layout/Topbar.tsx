import { NavigateFunction, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Tooltip from "../common/Tooltip";

const Topbar = (): React.JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="bg-[#0d0c26] p-4 text-white flex items-center justify-between shadow-lg">
      <Tooltip content="Home">
        <Header cursor sm title="My Store" onClick={() => navigate("/")} />
      </Tooltip>
    </div>
  );
};

export default Topbar;
