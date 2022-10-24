import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    setErrMsg("");

    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await axios.post("http://localhost:4000/login", body);
    if (response.status === 200) {
      console.log(response)
      navigate("/profile-page");
    } else {
      setErrMsg("User does not exist");
    }
  };

  //https://reactrouter.com/en/main/fetch/redirecting
  //Redirecting after login using react router v6
  //It's recommended to use redirect in loaders and actions rather than useNavigate
  //in your components when the redirect is in response to data.
  //https://www.makeuseof.com/redirect-user-after-login-react/

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
        <button type="submit" className="form--button">
          Log in
        </button>
      </div>
      {errMsg && <span className="error">{errMsg}</span>}
    </form>
  );
}

export default LoginForm;
