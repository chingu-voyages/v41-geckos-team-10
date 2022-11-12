import { useState } from "react";
import "./ProfileTextInput.css";

const ProfileTextInput = ({ name, value, type = "text", label, handleUpdateProfile}) => {
 const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    handleUpdateProfile(inputValue, e)
   console.log("inputValue", inputValue)
  };

  return (
    <div className="profile-text-input">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
        className={`profile-text-input__textbox`}
      />
    </div>
  );
};

export default ProfileTextInput;
