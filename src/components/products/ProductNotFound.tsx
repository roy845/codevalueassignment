import { MdErrorOutline } from "react-icons/md";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../common/Button";

const ProductNotFound = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0d0c22]">
      <MdErrorOutline className="text-6xl text-red-500" />
      <h1 className="text-2xl font-semibold text-white mt-4">
        Product Not Found
      </h1>
      <p className="text-white mb-4">
        Sorry, the product you are looking for does not exist.
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

export default ProductNotFound;
