import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { NavBar } from "./components/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Tracker from "./components/Tracker/Tracker";
import Landing from "./components/Landing";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<NavBar />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
