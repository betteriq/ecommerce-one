import React from "react";
import ReactDom from "react-dom";

const Styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "red",
  padding: "50px",
  zIndex: 1000,
};
const Overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "black",
  zIndex: 1000,
};

const Login = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={Overlay} />
      <div style={Styles}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Login;
