/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema  .createTable('transactions', function(table) {
    table.uuid('transaction_id').primary();
    table.timestamp('date').defaultTo(knex.fn.now());
    table.uuid('customer_id').references('customer_id').inTable('customers');
    table.uuid('employee_id').references('employee_id').inTable('employees');
    table.string('store_location').notNullable();
    table.string('payment_method').notNullable();
    table.decimal('sales_tax', 8, 2).notNullable();
    table.decimal('total_price', 8, 2).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transactions')
};
