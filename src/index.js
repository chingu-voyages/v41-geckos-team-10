import React from 'react';
import  ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing';
import ProfilePage from "./components/ProfilePage/ProfilePage";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
          <Route path='/' element={<Landing />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);