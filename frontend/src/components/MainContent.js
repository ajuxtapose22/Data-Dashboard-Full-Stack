// components/MainContent.js
import React from 'react';
import '../styles/MainContent.css';
import Grid from './Grid';
import ProductChart from './ProductChart';  // Import the ProductChart component

function MainContent() {
  return (
    <div className="main-content">
      <h2>Dashboard</h2>
      {/* Add your dashboard components or analytics visualizations here */}
      <ProductChart /> {/* Include the ProductChart component */}
      <Grid />
    </div>
  );
}

export default MainContent;
