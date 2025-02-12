// src/services/api.js
import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/products'; // Adjust URL as needed

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
