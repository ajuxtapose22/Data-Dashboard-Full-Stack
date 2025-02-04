const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development); // Adjust path as needed


// Get all products
router.get('/products', async (req, res) => {
    try {
      const products = await knex('products').select('*');
      res.status(200).json(products); // 200 (OK) for successful retrieval
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });  // 500 Server/database error
    }
  });
  
// Get a specific product by its product_id
router.get('/products/:id', async (req, res) => {
    const { id } = req.params; // Extract product_id from URL
  
    try {
      const product = await knex('products')
        .where({ product_id: id }) // Find the product by its ID
        .first(); // Get the first match (since product_id is unique)
  
      if (product) {
        res.status(200).json(product); // 200 (OK) for successful retrieval
      } else {
        res.status(404).json({ message: 'Product not found' }); // 404 (Not Found) if product is not found
      }
      }
     catch (error) {
      res.status(500).json({ message: 'Error fetching product', error }); // 500 Server/database error
    }
  });
  



// POST route to insert a new product
router.post('/products', async (req, res) => {
  const { product_id, product_name, price_per_unit, category, strain, brand, weight, thc, cbd } = req.body;

  try {
    // Insert the product into the database
    await knex('products').insert({
      product_id,
      product_name,
      price_per_unit,
      category,
      strain,
      brand,
      weight,
      thc,
      cbd
    });

    // Respond with success message
    res.status(201).json({ message: 'Product inserted successfully' });
  } catch (error) {
    // Handle errors, such as foreign key constraint issues
    res.status(500).json({ message: 'Error inserting product', error });
  }
});

module.exports = router;
