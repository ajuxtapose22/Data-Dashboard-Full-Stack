// src/components/ProductChart.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';  // Import the API service
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductChart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);  // Store the fetched data
    };
    
    fetchData();
  }, []);

  // Format data for chart (you can adjust this based on what you want to visualize)
  const chartData = products.map(product => ({
    name: product.product_name,
    price: product.price_per_unit,
  }));

  return (
    <div className="product-chart">
      <h3>Product Price Overview</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductChart;
