import { NavigateFunction, useNavigate } from "react-router-dom";
import Header from "../common/Header";

const Topbar = (): React.JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="bg-[#0d0c26] p-4 text-white flex items-center justify-between shadow-lg">
      <Header cursor sm title="My Store" onClick={() => navigate("/")} />
    </div>
  );
};

export default Topbar;
