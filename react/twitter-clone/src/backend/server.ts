// @ts-ignore
const express = require('express');

const app = express()

app.get('/users')

app.listen(8888, (): void => {
  console.log("SERVER ON")
})

