var str = '1,2,3,4,5,6,7,8'
var arr = str.split(',')
// console.log(arr.join(';'))
// console.log(arr.reverse())

arr.splice(1,0, '11', '12')

var newArr = arr.concat()

// console.log(newArr)

var objArr = [
  {name: "some", age: 20},
  {name: "text", age: 22},
  {name: "sdfasd", age: 23}
]

var findPerson = objArr.find(function (person) {
  return person.age === 20
})

// console.log(findPerson)

var codeArr = [1,2,3,4,5,6,7,8].filter(function (i) {
  return i % 2 !== 0
})

// console.log(codeArr)

var numArr = arr.map(function (i) {
  return i * 2
})

console.log(numArr)

