import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import salesReducer from "./salesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    sales: salesReducer,
  },
});
