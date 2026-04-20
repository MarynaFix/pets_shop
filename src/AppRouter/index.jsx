import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Categories from "../pages/Categories";
import AllProducts from "../pages/AllProducts";
import AllSales from "../pages/AllSales";
import Cart from "../pages/Cart";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/sales" element={<AllSales />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRouter;
