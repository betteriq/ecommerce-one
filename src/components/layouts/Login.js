import React from "react";
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
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={Overlay} className="section" />
      <section style={Styles} className="login">
        <div class="box">
          <div class="container">
            <div class="form">
              <h2>Login Form</h2>
              <form>
                <div class="inputbox">
                  <input type="text" placeholder="username" />
                </div>
                <div class="inputbox">
                  <input type="password" placeholder="password" />
                </div>
                <div class="inputbox">
                  <input type="submit" value="login" />
                </div>
                <p class="forgot">
                  Forgot password?<a href="#">Click Here</a>
                </p>
                <p class="forgot">
                  Dont have an account <a href="#">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
};

export default Login;
