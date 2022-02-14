import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import { VscThreeBars } from "react-icons/vsc";
import Vsc from "./Vsc";

const Navbar = (props) => {
  const numbers = useSelector((state) => state);
  const [isOpen, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [isvOpen, setOpenv] = useState(false);

  const [vsc, setVsc] = useState(false);

  const vscFunc = () => {
    setVsc((prev) => !prev);
    console.log(vsc);
  };
  return (
    <nav>
      <div className="asli">
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
          {/* <button
            onClick={() => {
              setOpen(true);
              setOverlay(true);
            }}
            className="btn"
          >
            Login
          </button> */}
          <div className="btn" onClick={props.onshow}>
            licky
          </div>

          <button className="btn">Card-{numbers.length}</button>
        </div>

        <Login
          open={isOpen}
          onClose={() => {
            setOpen(false);
          }}
          overlay={overlay}
          setOverlay={setOverlay}
          onClick={setOverlay}
        >
          assa
        </Login>
      </div>
      <div className="vsc">
        <Vsc
          open={isvOpen}
          onClose={() => {
            setOpenv(false);
          }}
          overlay={overlay}
          setOverlay={setOverlay}
        >
          ss
        </Vsc>
        <h3>vashidi</h3>
        <VscThreeBars
          className="big"
          onClick={() => {
            setOpenv(true);
            setOverlay(true);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
