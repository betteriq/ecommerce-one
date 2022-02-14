import React, { useState } from "react";
import ReactDom from "react-dom";

const Styles = {
  position: "fixed",
  top: "50%",
  left: "33%",
  padding: "50px",
  zIndex: 1000,
  opacity: 1,
};
const Overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.7,
  background: "linear-gradient(to bottom, #8c38ff, #1b5fcc)",
  zIndex: 1000,
};

const Login = ({ open, children, onClose }) => {
  console.log("open is : ", open);
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [forgot, setForgot] = useState(false);
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={Overlay} className="overlay" />
      <section style={Styles} className="login">
        <div class="box">
          <div class="container-form">
            <div class="form">
              {login && (
                <>
                  <h2>Login Form</h2>
                  <form>
                    <div class="inputbox">
                      <input type="text" placeholder="Username" />
                    </div>

                    <div class="inputbox">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div class="inputbox">
                      <input type="submit" value="Login" />
                    </div>
                    <p class="forgot">
                      Forgot password?
                      <a
                        href="#"
                        onClick={() => {
                          setSignup(false);
                          setLogin(false);
                          setForgot(true);
                        }}
                      >
                        Click Here
                      </a>
                    </p>
                    <p class="forgot">
                      Dont have an account{" "}
                      <a
                        href="#"
                        onClick={() => {
                          setSignup(true);
                          setLogin(false);
                          setForgot(false);
                        }}
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </>
              )}
              {signup && (
                <>
                  <h2>Sign up Form</h2>
                  <form>
                    <div class="inputbox">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div class="inputbox">
                      <input type="text" placeholder="Family" />
                    </div>
                    <div class="inputbox">
                      <input type="text" placeholder="Usename" />
                    </div>
                    <div class="inputbox">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div class="inputbox">
                      <input
                        type="submit"
                        value="Register"
                        onClick={() => {
                          setSignup(false);
                          setLogin(true);
                          setForgot(false);
                        }}
                      />
                    </div>
                  </form>
                </>
              )}
              {forgot && (
                <>
                  <h2>Forgot Password</h2>
                  <form>
                    <div class="inputbox">
                      <input type="text" placeholder="Enter your Email" />
                    </div>
                 
                    <div class="inputbox">
                      <input
                        type="submit"
                        value="Submit"
                        onClick={() => {
                          setSignup(false);
                          setLogin(true);
                          setForgot(false);
                        }}
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default Login;
