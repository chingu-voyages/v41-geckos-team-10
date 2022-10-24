import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function RegisterForm() {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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

    axios
      .post("http://localhost:4000/register", body)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });

      e.target.reset();
      setSuccessMsg("User registered successfully");
  };

  return (
    <form onSubmit={(e) => registerUser(e)} className="form-container">
      <label>
        <span className="form--span">Email</span>
        <input type="text" name="email" className="form--input" required />
      </label>
      <label>
        <span className="form--span">Password</span>
        <input
          type="password"
          name="password"
          className="form--input"
          required
        />
      </label>
      <label>
        <span className="form--span">Repeat password</span>
        <input
          type="password"
          name="confirmPassword"
          className="form--input"
          required
        />
      </label>

      <div className="submit">
        <button type="submit" className="form--button">
          Sign up
        </button>
      </div>
      {errMsg && <p className="error">{errMsg}</p>}
      {successMsg && <p className="success">{successMsg}</p>}
    </form>
  );
}

export default RegisterForm;
