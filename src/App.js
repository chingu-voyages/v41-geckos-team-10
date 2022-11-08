import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import Tracker from "./components/Tracker/Tracker";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar";

export default function App() {
  const location = useLocation();
  const [addTaskOpen, setAddTaskOpen ] = useState("hidden")

  const handleAddTaskOpen = () => {
    addTaskOpen === "hidden"
      ? setAddTaskOpen("visible")
      : setAddTaskOpen("hidden");
  }

  return (
    <div className="App">
      {location.pathname === "/" ? null : <NavBar handleAddTaskOpen={handleAddTaskOpen}/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route 
          path="/tracker" 
          element={
            <Tracker addTaskOpen={addTaskOpen} handleAddTaskOpen={handleAddTaskOpen}/>
            } 
          />
        <Route path="profile-page" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}
