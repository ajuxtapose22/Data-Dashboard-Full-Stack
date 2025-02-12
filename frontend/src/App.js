// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content-wrapper">
          <Sidebar />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
