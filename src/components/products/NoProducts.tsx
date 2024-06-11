import { FaBoxOpen } from "react-icons/fa";

const NoProducts = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white mr-5">
      <FaBoxOpen className="text-6xl mb-4" />
      <p className="text-xl">No products found</p>
    </div>
  );
};

export default NoProducts;
