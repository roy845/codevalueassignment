import { Product as ProductType } from "../../types/productTypes";
import Product from "./Product";
import { useAppSelector } from "../../app/hooks";
import { selectPaginatedProducts } from "../../features/productList/productListSlice";
import NoElements from "../common/NoElements";
import { ProductEnum } from "../../constants/productsConstants";

const ProductList = (): JSX.Element => {
  const products: ProductType[] = useAppSelector(selectPaginatedProducts);

  if (products.length === 0) {
    return <NoElements elements={ProductEnum.PRODUCTS} />;
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
