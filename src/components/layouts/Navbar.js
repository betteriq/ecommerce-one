import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useToggle from "../useToggle";

const Navbar = () => {
  const [values, setValue] = useToggle(true);
  useEffect(() => {
    const pop = document.querySelectorAll("h3");
    pop.forEach((btn) =>
      btn.addEventListener("click", () => {
        if (btn.classList == "liner") {
          console.log("trueee");
          btn.classList.remove("liner");
        } else {
          console.log("nooooooot");
          btn.classList.add("liner");
        }
      })
    );
  });
  const numbers = useSelector((state) => state.number);
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
        <button className="btn">Card-{numbers}</button>
      </div>
    </nav>
  );
};

export default Navbar;
