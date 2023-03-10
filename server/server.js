const { join } = require('node:path')
const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/notes')


const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/', userRoutes)
module.exports = server


const publicFolder = join(__dirname, 'public')
server.use(express.static(publicFolder))