import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";

//https://stackoverflow.com/questions/64627649/express-session-is-not-setting-cookies-in-browser
// help with setting cookies

function LoginForm() {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    setErrMsg("");

    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await axios.post("http://localhost:4000/login", body, {
      withCredentials: true, //with credentials is set to true to allow cookies to be set in the browser client side
    });
    if (response.status === 200) {
      setSuccessMsg(response.data);
      navigate("/Dashboard");
    } else {
      setErrMsg(response.data);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => loginUser(e)} className="form-container">
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

      <div className="submit">
        <button  type="submit" className="form--button">
          Log in
        </button>
      </div>
      {errMsg && <span className="error">{errMsg}</span>}
      {successMsg && <span className="success">{successMsg}</span>}
    </form>
  );
}

export default LoginForm;
