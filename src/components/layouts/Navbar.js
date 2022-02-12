import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const numbers = useSelector((state) => state.number);
  return (
    <nav>
      <h3>
        <Link to="/">Rashidi Shop</Link>
      </h3>
      <div className="nav-one">
        <h3 className="liner">
          <Link to="about">About</Link>
        </h3>
        <h3 className="liner">
          <Link to="contact">Contact</Link>
        </h3>
        <h3 className="liner">
          <Link to="Products">Products</Link>
        </h3>
        <h3 className="liner">
          <Link to="about">Home</Link>
        </h3>
      </div>
      <div className="nav-two">
        <button className="btn">Login</button>
        <button className="btn">Card-{numbers}</button>
      </div>
    </nav>
  );
};

export default Navbar;
