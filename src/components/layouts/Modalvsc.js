import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useState } from "react";

const Backdrops = (props) => {
  return <div className={classes.backdrop} onClick={props.hider} />;
};

const ModaloverLay = (props) => {
  const [signup, setSignup] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [login, setLogin] = useState(true);
  return (
    <div className={classes.modal}>
      <div className="main-login">
        <section className="login">
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
                        <input
                          type="submit"
                          value="Login"
                          onClick={props.hider}
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
                          onClick={props.hider}
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
                          onClick={props.hider}
                        />
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("portal");
const Vsc = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrops hider={props.hider} />, portalElement)}
      {ReactDOM.createPortal(
        <ModaloverLay hider={props.hider}>{props.children}</ModaloverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Vsc;
