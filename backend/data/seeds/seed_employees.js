exports.seed = function (knex) {
  return knex('employees').del()
    .then(function () {
      return knex('employees').insert([
        {
          employee_id: 'employee-uuid-1', 
          name: 'Alice Johnson', 
       
        },
        {
          employee_id: 'employee-uuid-2', 
          name: 'Bob Levy', 
        }
      ]);
    });
};
