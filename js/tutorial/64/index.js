const now = new Date().toLocaleString()

console.log(now)

const fs = require('fs')
const data = `text`

fs.writeFileSync('node.txt', data)

const result = fs.readFileSync('node.txt', {encoding: 'utf-8'})
console.log(result)

console.log(__dirname)
console.log(__filename)