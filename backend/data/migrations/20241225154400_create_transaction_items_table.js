exports.up = function(knex) {
  return knex.schema.createTable('transaction_items', function(table) {
    table.uuid('transaction_item_id').primary();
    
    table.uuid('transaction_id').notNullable()
      .references('transaction_id').inTable('transactions')
      .onDelete('CASCADE'); // Delete related items when a transaction is deleted

    table.uuid('product_id').notNullable()
      .references('product_id').inTable('products')
      .onDelete('CASCADE'); // Delete related items when a product is deleted

    table.integer('quantity').notNullable();
    table.decimal('total_price', 8, 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('transaction_items');
};
