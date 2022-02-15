import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VscLogin = (props) => {
  const numbers = useSelector((state) => state);

  return (
    <Modal hiderLogin={props.hiderLogin}>
      <div className="main-login">
        <section className="login">
          <div class="box">
            <div class="container-form">
              <div class="form">
                <h2>Menu</h2>
                <div className="form-vsc"       >
                  <div className="nav-vsc">
                    <h3 className>
                      <Link onClick={props.hiderLogin} to="/">
                        Home
                      </Link>
                    </h3>
                    <h3 className>
                      <Link onClick={props.hiderLogin} to="about">
                        About
                      </Link>
                    </h3>
                    <h3 className>
                      <Link onClick={props.hiderLogin} to="contact">
                        Contact
                      </Link>
                    </h3>
                    <h3 className>
                      <Link onClick={props.hiderLogin} to="Products">
                        Products
                      </Link>
                    </h3>
                  </div>
                    <div>
                      <button className="btn" onClick={props.showerLogin}>
                        Login
                      </button>
                      <button className="btn" onClick={props.showCarded}>Card-{numbers.length}</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default VscLogin;
