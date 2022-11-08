import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import Tracker from "./components/Tracker/Tracker";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import IsLoggedIn from "./components/IsLoggedIn";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "./redux/Slices/userSlice";

export default function App() {
  const location = useLocation();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/login-success", { withCredentials: true })
      .then((res) => {
        dispatch(loggedUser(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {location.pathname !== "/" && user.isLoggedIn ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="dashboard" element={user.isLoggedIn ? <Dashboard /> : <IsLoggedIn />} />
        <Route path="/tracker" element={user.isLoggedIn ? <Tracker /> : <IsLoggedIn />} />
        <Route path="profile-page" element={user.isLoggedIn ? <ProfilePage /> : <IsLoggedIn />} />
      </Routes>
    </div>
  );
}
