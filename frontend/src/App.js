// App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
// import Profile from './components/Profile';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app-container">
  
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
