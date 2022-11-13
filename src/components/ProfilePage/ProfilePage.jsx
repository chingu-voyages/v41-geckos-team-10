import { useState, useEffect } from "react";
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

  const fname = useSelector((state) => state.profile.value.firstName);
  const lname = useSelector((state) => state.profile.value.lastName);
  const wAG = useSelector((state) => state.profile.value.weeklyAppGoal);
  const id = useSelector((state) => state.profile.value._id);
  const [firstName, setFirstName] = useState(fname);
  const [lastName, setLastName] = useState(lname);
  const [weeklyAppGoal, setWeeklyAppGoal] = useState(wAG);
  const [userID , setUserId] = useState(id); 
  const [updateProfile, setUpdateProfile ] = useState({});

  const dispatch = useDispatch();

 console.log("profile", id, "IFID", firstName === "New")

  useEffect(() => {
    axios
      .get("http://localhost:4000/profiles", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data); // array of jobs from db for seeing data while developing
          dispatch(storeProfile(res.data[0]));
          setFirstName(fname)
          setLastName(lname)
          setWeeklyAppGoal(wAG)
        } else {
          console.log("Error");
        }
      });
  });

 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")
    if(firstName === "New"){
    axios.post('http://localhost:4000/profiles', updateProfile, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } 
    // else {
    //   axios.put('http://localhost:4000/profiles', updateProfile, {
    //     withCredentials: true,
    //   })
    //     .then((res) => {
    //       console.log(res.data)
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    // }
  }

    const handleClear = (e) => {
    e.preventDefault();
    console.log("clear")
    setFirstName("")
    setLastName("")
    setWeeklyAppGoal("")

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
  console.log("updateProfile", updateProfile)

  return (
    <div className='profile-page'>
      <div className='profile-page_div'>
        <div className='profile-page_profile'>
          <div className='profile-page_name'>
            <p>{`Name: ${firstName} ${lastName}`}</p>
          </div>
          <div className='profile-page_email'>
            <p>{`Current Weekly Application Goal: ${weeklyAppGoal}`}</p>
          </div>
        </div>
        <form 
          className='profile-page_form' 
          onSubmit={handleSubmit}
          >
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
            <ProfilePageButton buttonText='Cancel' onClick={handleClear}/>
            <ProfilePageButton buttonText='Save' onClick={handleClear}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
