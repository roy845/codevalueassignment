import { SortCriteria } from "./sortCriteriaTypes";

// You creaded productSchema with zod. Why not to infer the type from it?
export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  date: string;
};

export type ProductListState = {
  products: Product[];
  product: Product | undefined; // why do you have this? is it the selected product? why does is just named as product?
  sortCriteria: SortCriteria;
  searchProducts: string;
  currentPage: number;
};
