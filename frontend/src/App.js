// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Dashboard from './pages/Dashboard';
import CannabisData from './pages/Data';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content-wrapper">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cannabis-data" element={<CannabisData />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;