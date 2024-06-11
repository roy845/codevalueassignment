import { MdErrorOutline } from "react-icons/md";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Button from "../components/common/Button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { MainLayoutEnum } from "../constants/mainLayoutConstants";

const PageNotFound = (): JSX.Element => {
  useDocumentTitle(MainLayoutEnum.NOT_FOUND);
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdErrorOutline className="text-6xl text-red-500" />
      <h1 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        type="button"
        text="Go back"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default PageNotFound;
