import React, { useState } from "react";
import Modal from "./Modal";

const Newnavbar = (props) => {
  const [signup, setSignup] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [login, setLogin] = useState(true);
  return (
    <Modal hiderLogin={props.hiderLogin}>
      <div className="main-login">
        <section className="login">
          <div class="box">
            <div class="container-form">
              <div class="form">
                {login && (
                  <>
                    <h2>Login Form</h2>
                    <div>
                      <div class="inputbox">
                        <input type="text" placeholder="Username" />
                      </div>

                      <div class="inputbox">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div class="inputbox">
                        <input
                          type="submit"
                          value="Login"
                          onClick={props.hiderLogin}
                        />
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
                    </div>
                  </>
                )}
                {signup && (
                  <>
                    <h2>Sign up div</h2>
                    <div>
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
                        <input
                          type="password"
                          placeholder="Password"
                          onClick={props.hiderLogin}
                        />
                      </div>
                      <div class="inputbox">
                        <input
                          type="submit"
                          value="Register"
                          onClick={props.hiderLogin}
                        />
                      </div>
                    </div>
                  </>
                )}
                {forgot && (
                  <>
                    <h2>Forgot Password</h2>
                    <div>
                      <div class="inputbox">
                        <input type="text" placeholder="Enter your Email" />
                      </div>

                      <div class="inputbox">
                        <input
                          type="submit"
                          value="Submit"
                          onClick={props.hiderLogin}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Newnavbar;
