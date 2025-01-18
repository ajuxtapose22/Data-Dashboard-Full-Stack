exports.seed = function (knex) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert([
        {
          product_id: 'product-uuid-1', 
          product_name: 'Premium Cannabis', 
          price_per_unit: 19.99, 
          category: 'Flower', 
          strain: 'Sativa', 
          brand: 'Green Horizon', 
          weight: '1g', 
          thc: 18.5, 
          cbd: 0.2
        },
        {
          product_id: 'product-uuid-2', 
          product_name: 'CBD Oil', 
          price_per_unit: 39.99, 
          category: 'Oil', 
          strain: 'Hybrid', 
          brand: 'Lush Grove', 
          weight: '30ml', 
          thc: 0.5, 
          cbd: 15.0
        }
      ]);
    });
};
