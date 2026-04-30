/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('time_slots', (table) => {
    table.string('type').notNullable().defaultTo('availability');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return knex.schema.alterTable('time_slots', (table) => {
  table.dropColumn('type');
})
};
