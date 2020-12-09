const myNum = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNum.toString())
// console.log(localStorage.getItem('number'))

const obj = {
  name: 'name',
  age: 30
}

localStorage.setItem('person', JSON.stringify(obj))

const raw = localStorage.getItem('person')
raw.name = 'Name'

console.log(raw)