import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import ProfilePage from "./components/ProfilePage/ProfilePage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <ProfilePage />
      <Outlet />
    </div>
  );
}
