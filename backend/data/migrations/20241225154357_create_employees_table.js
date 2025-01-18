exports.up = function(knex) {
    return knex.schema.createTable('employees', function(table) {
      table.uuid('employee_id').primary();
      table.string('name').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('employees');
  };
  