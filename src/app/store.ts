import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productListReducer from "../features/productList/productListSlice";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistProductListConfig = {
  key: "products",
  storage,
  whitelist: ["products"],
  blacklist: ["_persist"],
};

const persistedProductListReducer = persistReducer(
  persistProductListConfig,
  productListReducer
);

export const store = configureStore({
  reducer: {
    productList: persistedProductListReducer,
  },
});

export const persistor: Persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
