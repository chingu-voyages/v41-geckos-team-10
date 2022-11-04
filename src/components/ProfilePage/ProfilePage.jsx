import ProfileImageUpload from "./Profile Form Inputs/ProfileImageUpload/ProfileImageUpload";
import ProfileLocationSelect from "./Profile Form Inputs/ProfileLocationSelect/ProfileLocationSelect";
import ProfileResumeUpload from "./Profile Form Inputs/ProfileResumeUpload/ProfileResumeUpload";
import ProfileTextInput from "./Profile Form Inputs/ProfileTextInput/ProfileTextInput";
import ProfilePageButton from "./ProfilePageButton";
import "./ProfilePage.css";
import { NavBar } from "../NavBar";

//https://www.freecodecamp.org/news/pass-data-between-components-in-react/
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <NavBar />
      <div className='profile-page--div'>
      <form className="profile-page__form">
        <div className="profile-page__name-inputs">
          <ProfileTextInput name="first-name" />
          <ProfileTextInput name="last-name" />
        </div>
        <ProfileTextInput name="email" type="email" />
        <ProfileTextInput name="weekly-goal" />
        <ProfileLocationSelect />
        <ProfileImageUpload />
        <ProfileTextInput name="change-password" type="password" />
        <ProfileResumeUpload />
        <div className="profile-page__button-group">
          <ProfilePageButton buttonText="Cancel" />
          <ProfilePageButton buttonText="Save" />
        </div>
      </form>
      </div>
    </div>
  );
};

export default ProfilePage;
