// components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/dashboard" onClick={() => setIsOpen(false)}><FaChartBar /> Dashboard</Link></li>
          <li><Link to="/data" onClick={() => setIsOpen(false)}><FaLeaf /> Data </Link></li>
          <li><Link to="/profile" onClick={() => setIsOpen(false)}><FaUser /> Profile</Link></li>
          <li><Link to="/settings" onClick={() => setIsOpen(false)}><FaCog /> Settings</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
