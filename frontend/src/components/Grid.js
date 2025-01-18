// components/Grid.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api'; // Import the API service

function Grid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="product-grid">
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Strain</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>{product.price_per_unit}</td>
              <td>{product.category}</td>
              <td>{product.strain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
