exports.seed = function (knex) {
  return knex('transaction_items').del()
    .then(function () {
      return knex('transaction_items').insert([
        {
          transaction_item_id: 'transaction-item-uuid-1', 
          transaction_id: 'transaction-uuid-1', 
          product_id: 'product-uuid-1', 
          quantity: 2, 
          total_price: 39.98
        },
        {
          transaction_item_id: 'transaction-item-uuid-2', 
          transaction_id: 'transaction-uuid-2', 
          product_id: 'product-uuid-2', 
          quantity: 1, 
          total_price: 39.99
        }
      ]);
    });
};
