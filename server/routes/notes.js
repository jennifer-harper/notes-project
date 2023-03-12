const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getNotes()
    .then((notes) => {

      const dataObj = {
        title: 'Your notes',
        notes: notes
      }
      res.render('index', dataObj)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


//get edit page
router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  db.getNote(id)  
    .then((note) => {
      
      const dataObj = {
        title: 'Individual Note',
        note: note
      }
      res.render('edit-note', dataObj)
      // console.log('hello',dataObj)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



//post form data
router.post('/edit', (req, res) => {
  const { id, name, details } = req.body;
  db.editNote(req.body)
    .then(() => {
      //res.redirect(`/${id}/edit`);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send('Something went wrong!');
    });
});


// POST delete
router.post('/delete', (req, res) => {
const id = Number(req.body.id)

console.log(id)
  db.deleteNote(id)
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err.message)
    res.status(500).send('Things gone bad!')
  })
})

router.get('/add-note', (req, res) => {
  res.render('add-note');
})

router.post('/add-note', (req, res) => {
  console.log(req.body)
  db.addNote(req.body)
    .then(() => {
      res.redirect(`/`)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong!')
    })
})






module.exports = router
