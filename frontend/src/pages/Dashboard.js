import React from "react";
import "../styles/Dasboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="header">
          <h1>Welcome Back!</h1>
          <p>User: John Doe</p>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Total Sales</h3>
            <p>$5,230</p>
          </div>
          <div className="card">
            <h3>New Users</h3>
            <p>320</p>
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

export default Dashboard;
