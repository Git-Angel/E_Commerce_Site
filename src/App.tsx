
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import CartPage from "./assets/components/CartPage";
import ProductPageBody from "./assets/components/ProductPageBody";


const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPageBody />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
