import Tooltip from "../common/Tooltip";

type ProductFormImagePreviewProps = {
  imagePreview: string | null;
  onFileIconClick: () => void;
};

const ProductFormImagePreview = ({
  imagePreview,
  onFileIconClick,
}: ProductFormImagePreviewProps): JSX.Element => {
  return (
    <>
      {imagePreview && (
        <Tooltip content="Add product image">
          <img
            onClick={onFileIconClick}
            src={imagePreview}
            className="w-32 h-32 mb-4 object-cover rounded cursor-pointer"
          />
        </Tooltip>
      )}
    </>
  );
};

export default ProductFormImagePreview;
