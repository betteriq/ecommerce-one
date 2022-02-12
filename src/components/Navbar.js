import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">Rashidi Shop</Link>
      </h2>
      <div className="nav-one">
        <h2>
          <Link to="about">About</Link>
        </h2>
        <h2>
          <Link to="contact">Contact</Link>
        </h2>
        <h2>
          <Link to="Products">Products</Link>
        </h2>
      </div>
      <div className="nav-two">
        <button className="btn">Login</button>
        <button className="btn">Card</button>
      </div>
    </nav>
  );
};

export default Navbar;