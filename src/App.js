import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/Navbar";
import Products from "./components/layouts/Products";
import Contact from "./components/layouts/Contact";
import About from "./components/layouts/About";
import Product from "./components/layouts/Product";
import { Provider } from "react-redux";
import created from "./components/redux/created";

const App = () => {
  return (
    <Provider store={created}>
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
    </Provider>
  );
};

export default App;
