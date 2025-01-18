// components/Sidebar.js
import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { FaChartBar, FaLeaf, FaUser, FaCog, FaBars } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`menu-icon ${isOpen ? 'icon-open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </div>

      {/* Sidebar overlay */}
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

      {/* Sidebar content */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><FaChartBar /> Dashboard</li>
          <li><FaLeaf /> Cannabis Data</li>
          <li><FaUser /> Profile</li>
          <li><FaCog /> Settings</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
