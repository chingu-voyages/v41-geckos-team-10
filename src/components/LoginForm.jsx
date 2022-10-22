import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function LoginForm() {
  const [errMsg, setErrMsg] = useState("");

  const loginUser = async (e) => {
    setErrMsg("");

    e.preventDefault();
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    //axios post call to login and if successful, redirect to home
    axios
      .post("/login", body)
      .then((response) => {
        if (response.status === 200) setErrMsg(response.data);
      })
      .catch((error) => {
        console.error(error.response.data);
        setErrMsg("Invalid username or password");
      });
  };

  return (
    <form onSubmit={(e) => loginUser(e)} className="form-container">
      <label>
        <span className="form--span">Email</span>
        <input type="text" name="username" className="form--input" required />
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

      <div className="submit">
        <button type="submit" className="form--button">
          Log in
        </button>
      </div>
      {errMsg && <span className="error">{errMsg}</span>}
    </form>
  );
}

export default LoginForm;
