import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Products/>} />

        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
