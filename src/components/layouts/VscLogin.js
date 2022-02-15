import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const VscLogin = (props) => {
  return (
    <Modal hiderLogin={props.hiderLogin}>
      <div className="main-login">
        <section className="login">
          <div class="box">
            <div class="container-form">
              <div class="form">
                <h2>Menu</h2>
                <div>
                  <div className="nav-vsc">
                    <h3 className>
                      <Link to="/">Home</Link>
                    </h3>
                    <h3 className>
                      <Link to="about">About</Link>
                    </h3>
                    <h3 className>
                      <Link to="contact">Contact</Link>
                    </h3>
                    <h3 className>
                      <Link to="Products">Products</Link>
                    </h3>
                    <button className="btn" onClick={props.showerLogin}>Login</button>
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
