import React from "react";
import { Link } from "react-router-dom";

function IsLoggedIn() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h1>
        You are not logged in.{" "}
        <Link to='/' className='text-blue-400'>
          Log In
        </Link>{" "}
        to continue.
      </h1>
    </div>
  );
}

export default IsLoggedIn;
