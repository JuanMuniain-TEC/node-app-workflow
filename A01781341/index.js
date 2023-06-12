const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('This is my express app')
})

app.get('/hello', (req, res) => {
  res.send('Hello munij')
})

app.listen(3000, () => {
  console.log('listening')
})

module.exports = app
