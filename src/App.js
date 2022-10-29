import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import { useState } from 'react';

export default function App() {

  return (
    <div >
      <NavBar /> 
      <Landing />
      <Outlet />
    </div>
  );
}
