import { FaBoxOpen } from "react-icons/fa";

type NoElementsProps = {
  elements: string;
};

const NoElements = ({ elements }: NoElementsProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white mr-5">
      <FaBoxOpen className="text-6xl mb-4" />
      <p className="text-xl">No {elements} found</p>
    </div>
  );
};

export default NoElements;
