import React from "react";
import Login from "./Login";

function LoginModal({ setShowModalLogin }) {
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <Login />
      <button onClick={() => setShowModalLogin(false)}>Close</button>
    </div>
  );
}

export default LoginModal;
