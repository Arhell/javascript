const num = [
  {name: '1', age: 1, budget: 1},
  {name: '2', age: 2, budget: 2},
  {name: '3', age: 3, budget: 3},
  {name: '4', age: 4, budget: 4},
  {name: '5', age: 5, budget: 5},
  {name: '6', age: 6, budget: 6},
]

for (let i = 0; i < num.length; i++) {
  console.log(num[i])
}

for ( let number of num) {
  console.log(num)
}

num.forEach(function (num, index, array) {
  console.log(num)
  console.log(index)
  console.log(array)
})

num.forEach(num => console.log(num))

const newNum = num.map(num => {
  return `${num.name} (${num.age})`
})

console.log(newNum)

const add = []
for (let i = 0; i < num.length; i++) {
  if (num[i].age >= 2) {
    add.push(num[i])
  }
}

console.log(add)

const add2 = num.filter(person => person.age >= 1)

console.log(add2)

let amount = 0
for (let i = 0; i < num.length; i++) {
  amount += num[i].budget
}

console.log(amount)


const amount2 = num.reduce((total, num) => total + num.budget, 0)

console.log(amount2)

const num3 = num.find(num => num.name === '3')

console.log(num3)


const num4 = num.findIndex(num => num.name === '3')

console.log(num4)


const newNum2 = num
  .filter(num => num.budget > 2)
  .map(num => {
    return {
      info: `${num.name} (${num.age})`,
      budget: Math.sqrt(num.budget)
    }
  })
  .reduce((total, num) => {
    total + num.budget
  }, 0)

console.log(newNum2)