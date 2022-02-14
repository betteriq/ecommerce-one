import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrops = (props) => {
  return <div className={classes.backdrop} />;
};

const ModaloverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("portal");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrops />, portalElement)}
      {ReactDOM.createPortal(
        <ModaloverLay>{props.children}</ModaloverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
