import { useState } from "react";
import ProfileImageUpload from "./Profile Form Inputs/ProfileImageUpload/ProfileImageUpload";
import ProfileLocationSelect from "./Profile Form Inputs/ProfileLocationSelect/ProfileLocationSelect";
import ProfileResumeUpload from "./Profile Form Inputs/ProfileResumeUpload/ProfileResumeUpload";
import ProfileTextInput from "./Profile Form Inputs/ProfileTextInput/ProfileTextInput";
import ProfilePageButton from "./ProfilePageButton";
import "./ProfilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { storeProfile, updateFirstName } from "../../redux/Slices/profileSlice";
import axios from "axios";
import IsLoggedIn from "../IsLoggedIn";

//https://www.freecodecamp.org/news/pass-data-between-components-in-react/
const ProfilePage = () => {
  const user = useSelector((state) => state.user.value);
  const wAG = useSelector((state) => state.profile.value.weeklyAppGoal);
  const userFirstName = useSelector((state) => state.profile.value.firstName);
  const userLastName = useSelector((state) => state.profile.value.lastName);

  const [firstName, setFirstName] = useState("Pat");
  const [lastName, setLastName] = useState("d'User");
  const [email, setEmail] = useState("pat@gmail.com");
  const [weeklyAppGoal, setWeeklyAppGoal] = useState(wAG);
  const [updateProfile, setUpdateProfile ] = useState({});


 
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")
    setFirstName(updateProfile.firstName)
  }
  const handleFirstName = (val, e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateFirstName(val))
    setUpdateProfile((values) => ({...values, [name]: value}))
    console.log("val", val)
  }

  console.log("updateProfile", updateProfile)

  return (
    <div className='profile-page'>
      <div className='profile-page_div'>
        <div className='profile-page_profile'>
          <div className='profile-page_name'>
            <p>{`Name: ${firstName} ${lastName}`}</p>
          </div>
          <div className='profile-page_email'>
            <p>{`Email Address: ${email}`}</p>
          </div>
          <div className='profile-page_email'>
            <p>{`Current Weekly Application Goal: ${weeklyAppGoal}`}</p>
          </div>
        </div>
        <form className='profile-page_form' onSubmit={handleSubmit}>
          <div className='profile-page_name-inputs'>
            <ProfileTextInput 
              name='firstName'
              label='First Name'
              value={updateProfile.firstName || ""}
              handleUpdateProfile={handleFirstName}
              />
              {/* <label >Test Name</label>
              <input
                type="text"
               
              /> */}
          
            <ProfileTextInput 
              name='lastName' 
              label='Last Name' 
              value={updateProfile.lastName || ""}
              handleUpdateProfile=""
              />
          </div>
          <ProfileTextInput 
            name='email'
            label='Email' 
            type='email' 
            value={updateProfile.email || ""}
            handleUpdateProfile=""
            />
          <ProfileTextInput 
            name='weeklyGoal' 
            label='Weekly Goal' 
            value={updateProfile.weeklyGoal || ""}
            handleUpdateProfile=""
            />
          <ProfileLocationSelect />
          <ProfileImageUpload />
          <ProfileTextInput name='changePassword' label='Change Password' type='password' />
          <ProfileResumeUpload />
          <div className='profile-page_button-group'>
            <ProfilePageButton buttonText='Cancel' />
            <ProfilePageButton buttonText='Save' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
