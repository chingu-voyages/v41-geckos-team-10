import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import dashboard_icon from "../assets/dashboardicon.svg";
import tracker_icon from "../assets/trackericon.svg";
import profile_icon from "../assets/profileicon.svg";
import profile_picture_holder from "../assets/dwight.jpg";
import logout_icon from "../assets/logouticon.svg";
import { loggedOutUser } from "../redux/Slices/userSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/logout");
      if (res.status === 200) {
        dispatch(loggedOutUser());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='navbar navbar_div'>
      <nav className='navbar navbar_nav'>
        <ul className='navbar navbar_list'>
          <li className='navbar navbar_logo'>
            <img className='logo' alt='app logo' />
          </li>
          <li className='navbar navbar_list_item'>
            <div className='profile_picture-div'>
              <img
                src={profile_picture_holder}
                className='navbar navbar_profile_picture'
                alt='profile'
              />
            </div>
          </li>
          <li className='navbar navbar_list_item'>
            <img
              src={dashboard_icon}
              className='navbar navbar_icon'
              alt='dashboard page'
            />
            <Link to={"/dashboard"} className='navbar navbar_text'>
              Dashboard
            </Link>
          </li>
          <li className='navbar navbar_list_item'>
            <img
              src={tracker_icon}
              className='navbar navbar_icon'
              alt='tracker page'
            />
            <Link to={"/tracker"} className='navbar navbar_text'>
              Tracker
            </Link>
          </li>
          <li className='navbar navbar_list_item'>
            <img
              src={profile_icon}
              className='navbar navbar_icon'
              alt='profile page'
            />
            <Link to={"/profile-page"} className='navbar navbar_text'>
              Profile
            </Link>
          </li>
          <li className='navbar'>
            <div className='navbar_button_div'>
              <button
                className='navbar navbar_button'
                onClick={() => navigate("/tracker")}
              >
                <p>Add Task +</p>
              </button>
            </div>
          </li>
          <li className='navbar navbar_logout'>
            <div className={"div_logout"}>
              <img
                src={logout_icon}
                className='navbar_icon_logout'
                alt='logout'
              />
              <button className='navbar_text_logout' onClick={handleLogout}>
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
