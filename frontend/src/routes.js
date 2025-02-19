import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";


import RandomCircleColors from "./pages/RandomCircleColors";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/data" element={<Data />} />
      <Route path="/RandomCircleColors" element={<RandomCircleColors />} />
    </Routes>
  );
};

export default AppRoutes;
