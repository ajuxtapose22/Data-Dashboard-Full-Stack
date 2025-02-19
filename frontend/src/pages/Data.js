
// src/pages/Data.js
import React from 'react';
import "../styles/Data.css";


function Data() {
  return (
    <div className="dashboard-container">
 

      <div className="main-content">
        <header className="header">
          <h1>Data</h1>
          <div>
       
          </div>
        </header>

        <section className="cards">
          <div className="card">
            <h3>ROI</h3>
            <p>%82</p>
          </div>
          <div className="card">
            <h3>User ID</h3>
            <p>326-054</p>
          </div>
          <div className="card">
            <h3>Active Sessions</h3>
            <p>45</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Data;