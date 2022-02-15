import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = (props) => {
  const numbers = useSelector((state) => state);

  return (
    <nav>
      <div className="asli">
        <h3>
          <Link to="/">Rashidi Center</Link>
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
          <div className="btn" onClick={props.onshow}>
            Login
          </div>

          <button className="btn" onClick={props.showCarded}>
            Card-{numbers.length}
          </button>
        </div>
      </div>
      <div className="vsc">
        <h3>Rashidi Center</h3>
        <VscThreeBars className="big" onClick={props.onshowVsc} />
      </div>
    </nav>
  );
};

export default Navbar;
