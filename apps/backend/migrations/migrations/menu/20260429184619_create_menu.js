/**
 * @param { import("knex").Knex } knex
 */

exports.up = function (knex) {
  return knex.schema.createTable('menu', (table) => {
    table.increments('id').primary();
    table.string('category').notNullable();
    table.string('dish').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.boolean('stock').defaultTo(true);
    table.text('description');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 */
exports.down = function (knex) {
  return knex.schema.dropTable('menu');
};
