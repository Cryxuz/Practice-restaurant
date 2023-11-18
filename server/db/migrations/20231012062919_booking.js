/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.createTable('bookings', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('seats')
    table.date('date')
    table.time('time')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  return knex.schema.dropTable('bookings')
}

// 
// maximum occupancy 50
// date = new date now
// add & get
// email.js
// popup booking msg