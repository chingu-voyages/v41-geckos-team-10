import React from "react";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";

export default function App() {
  return (
    <div>
      <Landing />
      <Outlet />
    </div>
  );
}
