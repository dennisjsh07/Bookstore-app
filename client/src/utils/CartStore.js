import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import { booksApi } from "./bookApi";

export default configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
