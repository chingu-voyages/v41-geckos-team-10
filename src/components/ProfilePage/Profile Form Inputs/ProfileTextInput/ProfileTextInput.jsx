import { useState } from "react";
import "./ProfileTextInput.css";

const ProfileTextInput = ({ name, value = "", type = "text"}) => {
 const [inputValue, setInputValue] = useState(value);

  const labelText = (label) => {
    const parsedText = label.split("-").join(" ");
    return parsedText.charAt(0).toUpperCase() + parsedText.slice(1);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="profile-text-input">
      <label htmlFor={name}>{labelText(name)}</label>
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
