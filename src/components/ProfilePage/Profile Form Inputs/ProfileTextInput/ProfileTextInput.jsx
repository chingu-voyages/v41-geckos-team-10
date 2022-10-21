import "./ProfileTextInput.css";

const ProfileTextInput = ({ name, type = "text" }) => {
  const labelText = (label) => {
    const parsedText = label.split("-").join(" ");
    return parsedText.charAt(0).toUpperCase() + parsedText.slice(1);
  };

  return (
    <div className="profile-text-input">
      <label htmlFor={name}>{labelText(name)}</label>
      <input
        type={type}
        name={name}
        className={`profile-text-input__textbox`}
      />
    </div>
  );
};

export default ProfileTextInput;
