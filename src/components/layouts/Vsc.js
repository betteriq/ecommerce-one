import React, { useState } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

const Vsc = ({ open, children, onClose, overlay, setOverlay }) => {
  console.log("open is : ", open);
  const [signup, setSignup] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [login, setLogin] = useState(true);

  if (!open) return null;
  function nulli() {
    setOverlay(false);
    setOverlay(true);
  }
  return ReactDom.createPortal(
    <>
      {overlay && (
        <div className="main-login">
          <div className="overlay" onClick={setOverlay(false)} />
          <section className="login">
            <div class="box">
              <div class="container-form">
                <div class="form">
                  {login && (
                    <>
                      <div className="vsc-res">
                        <h3>
                          <Link to="/">Home</Link>
                        </h3>
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default Vsc;
