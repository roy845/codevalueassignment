import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";
import { Product, ProductListState } from "../../types/productTypes";
import { RootState } from "../../app/store";
import { INITIAL_PRODUCTS } from "../../constants/productsConstants";
import { ITEMS_PER_PAGE } from "../../constants/itemsPerPageConstants";

const initialState: ProductListState = {
  products: INITIAL_PRODUCTS,
  product: undefined,
  searchProducts: "",
  sortCriteria: "name",
  currentPage: 1,
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,

  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },

    fetchProduct: (state, action: PayloadAction<string>) => {
      state.product = state.products.find(
        (product: Product) => product.id === action.payload
      );
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },

    editProduct: (state, action: PayloadAction<Product>) => {
      const index: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },

    setProductUndefined: (state) => {
      state.product = undefined;
    },

    setSearchProduct: (state, action: PayloadAction<string>) => {
      state.searchProducts = action.payload;
    },

    setSortCriteria: (
      state,
      action: PayloadAction<"name" | "date_asc" | "date_desc">
    ) => {
      state.sortCriteria = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const selectFilteredProducts = createSelector(
  (state: RootState) => state.productList.products,
  (state: RootState) => state.productList.searchProducts,
  (state: RootState) => state.productList.sortCriteria,
  (products, searchProducts, sortCriteria) => {
    let filteredProducts: Product[] = [...products];
    if (searchProducts) {
      filteredProducts = filteredProducts.filter(
        (product: Product) =>
          product.name.toLowerCase().includes(searchProducts.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchProducts.toLowerCase()))
      );
    }
    if (sortCriteria === "name") {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortCriteria === "date_desc") {
      filteredProducts = filteredProducts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortCriteria === "date_asc") {
      filteredProducts = filteredProducts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
    return filteredProducts;
  }
);

export const selectPaginatedProducts = createSelector(
  selectFilteredProducts,
  (state: RootState) => state.productList.currentPage,
  (filteredProducts, currentPage) => {
    const startIndex: number = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex: number = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }
);

export const selectTotalPages = createSelector(
  selectFilteredProducts,
  (filteredProducts) => Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
);

export const {
  addProduct,
  fetchProduct,
  deleteProduct,
  editProduct,
  setProductUndefined,
  setSearchProduct,
  setSortCriteria,
  setCurrentPage,
} = productListSlice.actions;

export default productListSlice.reducer;
