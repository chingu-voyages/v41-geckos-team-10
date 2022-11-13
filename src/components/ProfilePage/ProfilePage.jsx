import { useState } from "react";
import ProfileImageUpload from "./Profile Form Inputs/ProfileImageUpload/ProfileImageUpload";
import ProfileLocationSelect from "./Profile Form Inputs/ProfileLocationSelect/ProfileLocationSelect";
import ProfileResumeUpload from "./Profile Form Inputs/ProfileResumeUpload/ProfileResumeUpload";
import ProfileTextInput from "./Profile Form Inputs/ProfileTextInput/ProfileTextInput";
import ProfilePageButton from "./ProfilePageButton";
import "./ProfilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { storeProfile, updateFirstName, updateLastName, updateWeeklyAppGoal, updateEmail } from "../../redux/Slices/profileSlice";
import axios from "axios";
import IsLoggedIn from "../IsLoggedIn";

//https://www.freecodecamp.org/news/pass-data-between-components-in-react/
const ProfilePage = () => {


  const [firstName, setFirstName] = useState("Pat");
  const [lastName, setLastName] = useState("d'User");
  const [email, setEmail] = useState("pat@gmail.com");
  const [weeklyAppGoal, setWeeklyAppGoal] = useState("20");
  const [updateProfile, setUpdateProfile ] = useState({});


 
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")
    setFirstName(updateProfile.firstName)
    setLastName(updateProfile.lastName)
    setWeeklyAppGoal(updateProfile.weeklyAppGoal)
    setEmail(updateProfile.email)
    }
      
  const handleFirstName = (val, e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateFirstName(val))
    setUpdateProfile((values) => ({...values, [name]: value}))
  }
  const handleLastName = (val, e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateLastName(val))
    setUpdateProfile((values) => ({...values, [name]: value}))
  }
  const handleWeeklyAppGoal = (val, e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateWeeklyAppGoal(val))
    setUpdateProfile((values) => ({...values, [name]: value}))
  }
  const handleEmail = (val, e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateEmail(val))
    setUpdateProfile((values) => ({...values, [name]: value}))
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
            <ProfileTextInput 
              name='lastName' 
              label='Last Name' 
              value={updateProfile.lastName || ""}
              handleUpdateProfile={handleLastName}
              />
          </div>
          <ProfileTextInput 
            name='email'
            label='Email' 
            type='email' 
            value={updateProfile.email || ""}
            handleUpdateProfile={handleEmail}
            />
          <ProfileTextInput 
            name='weeklyAppGoal' 
            label='Weekly Goal' 
            value={updateProfile.weeklyAppGoal || ""}
            handleUpdateProfile={handleWeeklyAppGoal}
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
