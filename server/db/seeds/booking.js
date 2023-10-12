/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed (knex) {
 
  await knex('booking').del()
  await knex('booking').insert([
    {id: 1, date: '', time: ''},
  ]);
}
