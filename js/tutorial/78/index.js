const arr1 = ['1', '2', '3', '4']
const arr2 = ['1', '2', '3']

const obj1 = {
  1: '1',
  2: '2',
  3: '3',
  4: '4'
}

const obj2 = {
  5: '5',
  6: '6',
  7: '7',
  1: '1'
}

const arr3 = [...arr1, ...arr2]
const arr4 = arr2.concat(arr1)

// console.log({...obj1})
// console.log({...obj1, ...obj2})
// console.log({...obj2, ...obj1})

const num = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17));
// console.log(Math.max(...num));
// console.log(Math.max.apply(null, num))

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))


function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i ,0)
}

const numbers = [1, 2, 3, 4, 5]

console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

const [a, b, ...other] = numbers

console.log(a, b, other)

const person = {
  name: 'Name',
  age: 30,
  city: 'City',
  country: 'Country'
}

const {name, age, ...address} = person

console.log(name, age, address)