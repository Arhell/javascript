const express = require('express')

const app = express()

const rooms = {
  'rooms': [],
  'messages': ['hello'],
}

app.get('/rooms', function (req, res) {
  res.json()
})

app.listen(9000)