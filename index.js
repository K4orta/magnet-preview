require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const magnetController = require('./src/controllers/magnet')

app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false })

app.post('/add', magnetController.add)
app.post('/done', magnetController.callback)

app.listen(6969, () => {
  console.log('App started')
})