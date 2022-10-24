import React from "react";
import axios from "axios";
import "./Form.css";

function RegisterForm() {
  const registerUser = async (e) => {
    e.preventDefault();
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    console.log(e);

    //axios post call to register and if successful, redirect to login
    axios
      .post("http://localhost:4000/register", body)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("User registered");
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  return (
    <form onSubmit={(e) => registerUser(e)} className="form-container">
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
      <label>
        <span className="form--span">Repeat password</span>
        <input
          type="password"
          name="rpassword"
          className="form--input"
          required
        />
      </label>

      <div className="submit">
        <button type="submit" className="form--button">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
