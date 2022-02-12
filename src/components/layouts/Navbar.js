import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>
        <Link to="/">Rashidi Shop</Link>
      </h3>
      <div className="nav-one">
        <h3>
          <Link to="about">About</Link>
        </h3>
        <h3>
          <Link to="contact">Contact</Link>
        </h3>
        <h3>
          <Link to="Products">Products</Link>
        </h3>
      </div>
      <div className="nav-two">
        <button className="btn">Login</button>
        <button className="btn">Card</button>
      </div>
    </nav>
  );
};

export default Navbar;