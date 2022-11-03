import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import dashboard_icon from "../assets/dashboardicon.svg";
import tracker_icon from "../assets/trackericon.svg";
import profile_icon from "../assets/profileicon.svg";
import profile_picture_holder from "../assets/dwight.jpg";
import logout_icon from "../assets/logouticon.svg"

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/logout");
      if (res.status === 200) {
        alert(res.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

 return (
    <div className="navbar navbar--div">
        <nav className="navbar navbar--nav">
            <ul className="navbar navbar--list">
                <li className="navbar navbar--logo">
                    <img className="logo" alt="app logo"/>
                </li>
                <li className="navbar navbar--list_item">
                    <div className="profile--picture-div">
                        <img src={profile_picture_holder} className="navbar navbar--profile_picture" alt="profile"/>
                    </div>
                </li>
                <li className="navbar navbar--list_item">
                    <Link to={'/dashboard'}><img src={dashboard_icon} className="navbar navbar--icon" alt="dashboard page"/></Link>
                    <Link to={'/dashboard'} className="navbar navbar--text">Dashboard</Link>
                </li>
                <li className="navbar navbar--list_item">
                    <Link to={'/tracker'}><img src={tracker_icon} className="navbar navbar--icon" alt="tracker page"/></Link>
                    <Link to={'/tracker'} className="navbar navbar--text">Tracker</Link>
                </li>
                <li className="navbar navbar--list_item">
                    <Link to={'/profile-page'}><img src={profile_icon} className="navbar navbar--icon" alt="profile page"/></Link>
                    <Link to={'/profile-page'} className="navbar navbar--text">Profile</Link>
                </li>
                <li className="navbar">
                    <div className="navbar--button--div">
                        <button className="navbar navbar--button"
                            onClick={() => navigate('/tracker')}
                        >
                            <p>Add Task +</p>
                        </button>
                    </div>
                </li>
                <li className="navbar navbar--logout">
                    <div className={"div--logout"}>
                        <button className="navbar--text_logout" onClick={handleLogout}>Logout</button>
                        <Link className="navbar--text_logout" to=''>Logout</Link>
                        
                    </div>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export { NavBar };
