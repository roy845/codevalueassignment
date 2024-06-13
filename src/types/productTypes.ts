import { SortCriteria } from "./sortCriteriaTypes";

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
  product: Product | undefined;
  sortCriteria: SortCriteria;
  searchProducts: string;
  currentPage: number;
};
