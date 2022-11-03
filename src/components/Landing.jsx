import { useState } from "react";
import "./Landing.css";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function Landing() {
  const [showModalSignup, setShowModalSignup] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleClickLogin = () => {
    setShowModalLogin(true);
  };

  const handleClickSignup = () => {
    setShowModalSignup(true);
  };

  return (
    <div className="landing landing--div">
      <div>
        <h1 className="landing landing--h1">Job Hunt Tracker</h1>

        <p className="landing landing--p">
          The rewarding way to track your job applications.
        </p>
      </div>

      <div>
        <button
          className="button button--landing"
          onClick={() => handleClickLogin()}
          data-modal-toggle="authentication-modal"
        >
          Log in
        </button>
        <button
          className="button button--landing"
          onClick={() => handleClickSignup()}
          data-modal-toggle="authentication-modal"
        >
          Sign up
        </button>
      </div>
      {showModalLogin && <LoginModal setShowModalLogin={setShowModalLogin} />}
      {showModalSignup && (
        <SignupModal setShowModalSignup={setShowModalSignup} />
      )}
      <div className="landing--footer">
        <p>Icons by <a href="https://www.flaticon.com/free-icons/journey" title="journey icons">max.icons</a>
        <br />
        Background by <a href="https://haikei.app/" title="haikei">haikei</a>
        </p>
      </div>
    </div>
  );
}

export default Landing;
