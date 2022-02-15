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
import Login from "./components/layouts/Login";
import VscLogin from "./components/layouts/VscLogin";
import Card from "./components/layouts/Card";

const App = () => {
  const [showLogin, setShow] = useState(false);
  const [showVsc, setVsc] = useState(false);
  const [showCard, setCard] = useState(false);
  const showerLogin = () => {
    setVsc(false);
    setShow(true);
  };

  const hiderLogin = () => {
    setShow(false);
    setVsc(false);
    setCard(false);
  };

  const showerVsc = () => {
    setVsc(true);
  };

  const showCarded = () => {
    setCard(true);
  };
  return (
    <Provider store={created}>
      <div>
        <Navbar onshow={showerLogin} onshowVsc={showerVsc} showCarded={showCarded}/>
        {showLogin && <Login hiderLogin={hiderLogin} />}
        {showVsc && (
          <VscLogin hiderLogin={hiderLogin} showerLogin={showerLogin} />
        )}
        {showCard && <Card hiderLogin={hiderLogin} />}
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
