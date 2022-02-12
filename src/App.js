import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
