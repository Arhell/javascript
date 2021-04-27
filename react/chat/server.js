const express = require('express')

const app = express()

const rooms = new Map()

app.get('/rooms', (req, res) => {
  rooms.set('hello', '')
  res.json(rooms)
})

app.listen(9000, (err) => {
  if(err) {
    throw Error(err)
  }
  console.log('server')
})