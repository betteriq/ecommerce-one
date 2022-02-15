import React, { useState } from "react";
import Modal from "./Modal";

const Login = (props) => {
  const [signup, setSignup] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [login, setLogin] = useState(true);
  return (
    <Modal hiderLogin={props.hiderLogin}>
      <div className="main-login">
        <section className="login">
          <div className="box">
            <div className="container-form">
              <div className="form">
                {login && (
                  <>
                    <h2>Login Form</h2>
                    <div>
                      <div className="inputbox">
                        <input type="text" placeholder="Username" />
                      </div>

                      <div className="inputbox">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="inputbox">
                        <input
                          type="submit"
                          value="Login"
                          onClick={props.hiderLogin}
                        />
                      </div>
                      <p className="forgot">
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
                      <p className="forgot">
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
                      <div className="inputbox">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="inputbox">
                        <input type="text" placeholder="Family" />
                      </div>
                      <div className="inputbox">
                        <input type="text" placeholder="Usename" />
                      </div>
                      <div className="inputbox">
                        <input
                          type="password"
                          placeholder="Password"
                          onClick={props.hiderLogin}
                        />
                      </div>
                      <div className="inputbox">
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
                      <div className="inputbox">
                        <input type="text" placeholder="Enter your Email" />
                      </div>

                      <div className="inputbox">
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

export default Login;
