import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { loggedUser } from "../redux/Slices/userSlice";
import { useDispatch } from "react-redux";

//https://stackoverflow.com/questions/64627649/express-session-is-not-setting-cookies-in-browser
// help with setting cookies

function LoginForm() {
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

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
      dispatch(loggedUser(response.data));
      navigate("/dashboard");
    } else {
      setErrMsg(response.data);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => loginUser(e)} className='form-container'>
      <label>
        <span className='form_span'>Email</span>
        <input type='text' name='email' className='form_input' required />
      </label>
      <label>
        <span className='form_span'>Password</span>
        <input
          type='password'
          name='password'
          className='form_input'
          required
        />
      </label>

      <div className='submit'>
        <button type='submit' className='form_button'>
          Log in
        </button>
      </div>
      {errMsg && <span className='error'>{errMsg}</span>}
    </form>
  );
}

export default LoginForm;
