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