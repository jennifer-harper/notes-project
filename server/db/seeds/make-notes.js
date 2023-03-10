/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('table_name').del()
  await knex('note-pad').insert([
    {id: 1, name: 'general note one', details: 'This is just a nice space where i can write notes'},
    {id: 2, name: 'general note two', details: 'This one might be for recipe ideas or copy pasting from existing ideas'},
    {id: 3, name: 'general note three', details: 'Maybe a reminder to do something for myself'}
  ]);
};
