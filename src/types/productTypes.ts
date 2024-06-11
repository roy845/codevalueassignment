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
  sortCriteria: "name" | "date_asc" | "date_desc";
  searchProducts: string;
  currentPage: number;
};
