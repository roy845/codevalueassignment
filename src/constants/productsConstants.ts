import { Product } from "../types/productTypes";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: uuidv4(),
    name: "Product 1",
    description: "Description for Product 1",
    price: 100,
    image:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nav/nav00087/v/14.jpg",
    date: "2024-06-10T00:00:00.000Z",
  },
  {
    id: uuidv4(),
    name: "Product 2",
    description: "Description for Product 2",
    price: 200,
    image:
      "https://umina.co.il/cdn/shop/products/umina3237_600x.jpg?v=1670232518",
    date: "2024-06-10T00:00:00.000Z",
  },
];

export const MAX_PRODUCT_NAME_LENGTH: number = 30;
export const MAX_PRODUCT_DESCRIPTION_LENGTH: number = 200;

export enum ProductEnum {
  CREATE_NEW_PRODUCT = "Create New Product",
}
