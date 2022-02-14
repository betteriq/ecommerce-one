import React, { useState } from "react";
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
  const [show, setShow] = useState(false);

  const shower = () => {
    setShow(true);
  };

  const hider = () => {
    setShow(false);
  };

  return (
    <Provider store={created}>
      <div>
        <Navbar onshow={shower} />
        {show && <Home onhide={hider} />}

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/product/:id" element={<Product />} />
        </Routes> */}
      </div>
    </Provider>
  );
};

export default App;

// import React, { useState } from "react";
// import Login from "./components/layouts/Login";

// const App = () => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <div>
//       <Login open={isOpen} onPlose={() => setOpen(true)}>
//         hi
//       </Login>
//     </div>
//   );
// };

// export default App;
