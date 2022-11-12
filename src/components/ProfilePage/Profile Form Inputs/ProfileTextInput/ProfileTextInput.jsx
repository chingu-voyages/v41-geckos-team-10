import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeProfile } from "../../../../redux/Slices/profileSlice";
import "./ProfileTextInput.css";

const ProfileTextInput = ({ name, value, type = "text", label, handleUpdateProfile}) => {
 const [inputValue, setInputValue] = useState(value);

  const dispatch = useDispatch();

  // const labelText = (label) => {
  //   const parsedText = label.split("-").join(" ");
  //   return parsedText.charAt(0).toUpperCase() + parsedText.slice(1);
  // };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    dispatch(storeProfile(inputValue))
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
