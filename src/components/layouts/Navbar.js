import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

const Navbar = () => {
  const numbers = useSelector((state) => state);
  const [isOpen, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(true);

  return (
    <nav>
      <h3>
        <Link to="/">Rashidi Shop</Link>
      </h3>
      <div className="nav-one">
        <h3 className="liner">
          <Link to="/">Home</Link>
        </h3>
        <h3 className="liner">
          <Link to="about">About</Link>
        </h3>
        <h3 className="liner">
          <Link to="contact">Contact</Link>
        </h3>
        <h3 className="liner">
          <Link to="Products">Products</Link>
        </h3>
      </div>
      <div className="nav-two">
        <button
          onClick={() => {
            setOpen(true);
            setOverlay(true);
          }}
          className="btn"
        >
          Login
        </button>

        <button className="btn">Card-{numbers.length}</button>
      </div>

      <Login
        open={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        overlay={overlay}
        setOverlay={setOverlay}
      >
        assa
      </Login>
    </nav>
  );
};

export default Navbar;
