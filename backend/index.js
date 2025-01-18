const express = require('express');
const cors = require('cors');
const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for cross-origin requests
app.use(cors());
app.use(express.json());


// Route to get product data
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
