// src/components/MainContent.js
import React from 'react';
import '../styles/MainContent.css';
import Grid from './Grid';
import ProductChart from './ProductChart';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CannabisData from '../pages/Data';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cannabis-data" element={<CannabisData />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <ProductChart />
      <Grid />
    </div>
  );
}

export default MainContent;