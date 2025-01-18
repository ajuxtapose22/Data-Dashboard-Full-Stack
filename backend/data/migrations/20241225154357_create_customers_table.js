exports.up = function(knex) {
    return knex.schema.createTable('customers', function(table) {
      table.uuid('customer_id').primary();
      table.string('name').notNullable();
      table.string('email').unique();
      table.string('phone').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('customers');
  };
  