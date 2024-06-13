import { TooltipEnum } from "../../constants/tooltipConstants";
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
    {/* I would make isNotNullOrUndefined function and use it here */}
      {imagePreview && (
        <Tooltip content={TooltipEnum.ADD_PRODUCT_IMAGE}>
          <img
            onClick={onFileIconClick}
            src={imagePreview}
            alt=""
            className="w-32 h-32 mb-4 object-cover rounded cursor-pointer"
            loading="lazy"
          />
        </Tooltip>
      )}
    </>
  );
};

export default ProductFormImagePreview;
