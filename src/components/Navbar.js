import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2>Rashidi Shop</h2>
      <div className="nav-one">
        <h2>
          <a href="">About</a>
        </h2>
        <h2>
          <a href="">Contact</a>
        </h2>
        <h2>
          <a href="">Products</a>
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
