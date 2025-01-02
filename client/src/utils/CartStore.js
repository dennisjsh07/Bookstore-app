import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import { booksApi } from "./bookApi";
import ordersApi from "./orderApi";

export default configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});
