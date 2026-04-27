/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('time_slots', (table) => {
    table.uuid('id').primary();

    table.date('date').notNullable();          // schedule day
    table.time('start_time').notNullable();    // start time
    table.time('end_time').notNullable();      // end time

    table.boolean('is_active').defaultTo(true);

    table.timestamps(true, true); // created_at + updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('time_slots');
};
