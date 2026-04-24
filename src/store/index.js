import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import salesReducer from "./salesSlice";
import { cartReducer } from "./cartSlice";
import shoppingCartReducer from "./shopCartSlice";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    sales: salesReducer,
    cart: cartReducer,
    shoppingCart: shoppingCartReducer,
    order: orderReducer,
  },
});
