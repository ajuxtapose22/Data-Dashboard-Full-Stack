exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.uuid('product_id').primary();
        table.string('product_name').notNullable();
        table.decimal('price_per_unit', 8, 2).notNullable();
        table.string('category').notNullable();
        table.string('strain').notNullable();
        table.string('brand').notNullable();
        table.string('weight');
        table.decimal('thc');
        table.decimal('cbd');

        // Foreign Keys
        
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products');
  };
  