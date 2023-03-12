const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getNotes:getNotes,
  getNote:getNote,
  editNote,
  addNote,
  deleteNote 
}

function getNotes (db = connection){
  return db('note-pad').select()
}

function getNote(id, db = connection) {
  return db('note-pad').where('id', id).first()
}

function editNote(updateNote, db = connection) {
  return db('note-pad')  
  .where({id: updateNote.id})
  .update(updateNote)
}


function deleteNote(id, db = connection){
  console.log('deleting note:', id);
  return db('note-pad').where({ id: id }).del()
}

function addNote(values, db = connection){
  // console.log('Inserting new note:', values);
  return db('note-pad')
  .insert({
      name: values.name,
      details: values.details
    })
}