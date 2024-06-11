import { Product as ProductType } from "../../types/productTypes";
import Product from "./Product";
import { useAppSelector } from "../../app/hooks";
import { selectPaginatedProducts } from "../../features/productList/productListSlice";
import NoProducts from "./NoProducts";

const ProductList = (): JSX.Element => {
  const products = useAppSelector(selectPaginatedProducts);

  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <div className="p-4 grid grid-cols-1">
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
