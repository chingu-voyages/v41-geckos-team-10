import React from "react";
import RegisterForm from "./RegisterForm";

function SignupModal({ setShowModalSignup }) {
  return (
    <div
      id='authentication-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='justify-center flex-col items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-50'
    >
      <RegisterForm />
      <button onClick={() => setShowModalSignup(false)}>Close</button>
    </div>
  );
}

export default SignupModal;
