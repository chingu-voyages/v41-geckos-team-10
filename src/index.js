import React from 'react';
import  ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/Dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
