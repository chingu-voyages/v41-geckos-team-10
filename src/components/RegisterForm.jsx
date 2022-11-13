import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function RegisterForm() {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validateEmail = (e) => {
    const email = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrMsg("Please enter a valid email address");
    } else {
      setErrMsg("");
    }
  };

  const validatePassword = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setErrMsg("Password must be at least 6 characters long");
    } else {
      setErrMsg("");
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    setErrMsg("");
    setSuccessMsg("");

    if (e.target.password.value !== e.target.confirmPassword.value) {
      setErrMsg("Passwords do not match");
      return;
    }

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await axios.post("http://localhost:4000/register", body, {
      withCredentials: true,
    });

    if (response.status === 200) {
      setSuccessMsg(response.data);
    } else {
      setErrMsg("User already exists");
    }

    e.target.reset();
  };

  return (
    <form onSubmit={(e) => registerUser(e)} className='form-container'>
      <label>
        <span className='form_span'>Email</span>
        <input
          type='text'
          name='email'
          onChange={validateEmail}
          className='form_input'
          required
        />
      </label>
      <label>
        <span className='form_span'>Password</span>
        <input
          type='password'
          name='password'
          className='form_input'
          onChange={validatePassword}
          required
        />
      </label>
      <label>
        <span className='form_span'>Repeat password</span>
        <input
          type='password'
          name='confirmPassword'
          className='form_input'
          required
        />
      </label>

      <div className='submit'>
        <button type='submit' className='form_button'>
          Sign up
        </button>
      </div>
      {errMsg && <p className='error'>{errMsg}</p>}
      {successMsg && <p className='success'>{successMsg}</p>}
    </form>
  );
}

export default RegisterForm;
