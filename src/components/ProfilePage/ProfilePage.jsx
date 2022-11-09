import ProfileImageUpload from "./Profile Form Inputs/ProfileImageUpload/ProfileImageUpload";
import ProfileLocationSelect from "./Profile Form Inputs/ProfileLocationSelect/ProfileLocationSelect";
import ProfileResumeUpload from "./Profile Form Inputs/ProfileResumeUpload/ProfileResumeUpload";
import ProfileTextInput from "./Profile Form Inputs/ProfileTextInput/ProfileTextInput";
import ProfilePageButton from "./ProfilePageButton";
import "./ProfilePage.css";
import { useSelector } from "react-redux";
import IsLoggedIn from "../IsLoggedIn";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.value);

  if (user.isLoggedIn) {
    return (
      <div className='profile-page'>
        <div className='profile-page_div'>
          <form className='profile-page_form'>
            <div className='profile-page_name-inputs'>
              <ProfileTextInput name='first-name' />
              <ProfileTextInput name='last-name' />
            </div>
            <ProfileTextInput name='email' type='email' />
            <ProfileTextInput name='weekly-goal' />
            <ProfileLocationSelect />
            <ProfileImageUpload />
            <ProfileTextInput name='change-password' type='password' />
            <ProfileResumeUpload />
            <div className='profile-page_button-group'>
              <ProfilePageButton buttonText='Cancel' />
              <ProfilePageButton buttonText='Save' />
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <IsLoggedIn />;
  }
};

export default ProfilePage;
