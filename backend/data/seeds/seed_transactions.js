exports.seed = function (knex) {
  return knex('transactions').del()
    .then(function () {
      return knex('transactions').insert([
        {
          transaction_id: 'transaction-uuid-1', 
          date: knex.fn.now(), 
          customer_id: 'customer-uuid-1', 
          employee_id: 'employee-uuid-1', 
          store_location: 'Main Street', 
          payment_method: 'Credit Card', 
          sales_tax: 2.50, 
          total_price: 22.49
        },
        {
          transaction_id: 'transaction-uuid-2', 
          date: knex.fn.now(), 
          customer_id: 'customer-uuid-2', 
          employee_id: 'employee-uuid-2', 
          store_location: 'Downtown', 
          payment_method: 'Cash', 
          sales_tax: 1.20, 
          total_price: 40.99
        }
      ]);
    });
};
