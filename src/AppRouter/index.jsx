import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Categories from "../pages/Categories";
import AllProducts from "../pages/AllProducts";
import AllSales from "../pages/AllSales";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/sales" element={<AllSales />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
