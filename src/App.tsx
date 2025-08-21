
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartPage from "./components/CartPage";
import ProductPageBody from "./components/ProductPageBody";
import { CartProvider } from "./CartContext";


const App: React.FC = () => {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPageBody />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
