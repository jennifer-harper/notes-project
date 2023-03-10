const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getNotes:getNotes,
  getNote:getNote,
  editNote
}


function getNotes (db = connection){
  return db('note-pad').select()
}

function getNote(id, db = connection) {
  return db('note-pad').where('id', id).first()
}


function editNote(updateNote, db = connection) {
  return db('note-pad')
  .update(updateNote)
  .where({id: updateNote.id})
}
