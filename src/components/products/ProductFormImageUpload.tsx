import React from "react";
import { MdFileUpload } from "react-icons/md";

type AddProductFormImageUploadProps = {
  onFileIconClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProductFormImageUpload = ({
  onFileIconClick,
  fileInputRef,
  onImageChange,
}: AddProductFormImageUploadProps) => {
  return (
    <>
      <MdFileUpload
        onClick={onFileIconClick}
        className="cursor-pointer text-indigo-600"
        size="1.5em"
      />
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
