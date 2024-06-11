type ProductFormImagePreviewProps = {
  imagePreview: string | null;
  onFileIconClick: () => void;
};

const ProductFormImagePreview = ({
  imagePreview,
  onFileIconClick,
}: ProductFormImagePreviewProps) => {
  return (
    <>
      {imagePreview && (
        <img
          onClick={onFileIconClick}
          src={imagePreview}
          className="w-32 h-32 mb-4 object-cover rounded cursor-pointer"
        />
      )}
    </>
  );
};

export default ProductFormImagePreview;
