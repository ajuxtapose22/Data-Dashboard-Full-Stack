exports.seed = function (knex) {
  return knex('customers').del()
    .then(function () {
      return knex('customers').insert([
        {
          customer_id: 'customer-uuid-1', 
          name: 'John Doe',  
          email: 'john.doe@example.com',
          phone: '480-365-8744'
        },
        {
          customer_id: 'customer-uuid-2', 
          name: 'Jane Doe',  
          email: 'jane.doe@example.com',
          phone: '313-220-1284'
        }
      ]);
    });
};
