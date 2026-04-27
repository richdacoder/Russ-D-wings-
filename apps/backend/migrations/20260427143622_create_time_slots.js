/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('time_slots', (table) => {
    table.uuid('id').primary();

    table.date('date').notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();

    table.boolean('is_active').defaultTo(true);

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('time_slots');
};
