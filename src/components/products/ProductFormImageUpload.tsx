import React from "react";
import { MdFileUpload } from "react-icons/md";
import Tooltip from "../common/Tooltip";

type AddProductFormImageUploadProps = {
  onFileIconClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProductFormImageUpload = ({
  onFileIconClick,
  fileInputRef,
  onImageChange,
}: AddProductFormImageUploadProps): JSX.Element => {
  return (
    <>
      <Tooltip content="Add product image">
        <MdFileUpload
          onClick={onFileIconClick}
          className="cursor-pointer text-indigo-600"
          size="1.5em"
        />
      </Tooltip>

      <input
        type="file"
        ref={fileInputRef}
        onChange={onImageChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default ProductFormImageUpload;
