import { Product as ProductType } from "../../types/productTypes";
import Button from "../common/Button";
import useProduct from "../../hooks/useProduct";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps): JSX.Element => {
  const { navigateToProductComponent, handleDeleteClick, productId } =
    useProduct();

  const isSelected: boolean = productId === product.id;

  return (
    <div
      onClick={() => navigateToProductComponent(product.id)}
      className={`border rounded-lg p-4 mb-2 items-start shadow-md cursor-pointer group w-64 ${
        isSelected
          ? "bg-white text-black border-white"
          : "bg-transparent border-white hover:bg-white hover:text-black"
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 mb-4 cursor-pointer rounded-lg mr-4"
        loading="lazy"
      />
      <div className="flex flex-col justify-start">
        <h2
          className={`text-2xl font-bold mb-2 break-words ${
            isSelected ? "text-black" : "group-hover:text-black"
          }`}
        >
          {product.name}
        </h2>
        <p
          className={`mb-2 break-words ${
            isSelected ? "text-black" : "text-white group-hover:text-black"
          }`}
        >
          {product.description}
        </p>
        <Button
          text="Delete"
          type="button"
          className={
            "bg-red-600 text-white hover:bg-red-700 focus:ring-indigo-500"
          }
          onClick={(e: React.MouseEvent) =>
            handleDeleteClick(product.name, product.id, e)
          }
        />
      </div>
    </div>
  );
};

export default Product;
