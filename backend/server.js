const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Import routes
const productRoutes = require('./routes/products'); // Create this file in next steps
app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
