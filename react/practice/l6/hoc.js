const numbers = [1,2,3,4,5]
// const newNumbers = []
//
// for (let i = 0; i < numbers.length; i++) {
//   newNumbers.push(numbers[i] + 1)
// }
//
// console.log(newNumbers)

function createAddNum(number) {
  return function (arr) {
    return arr.map(item => item += number)
  }
}

const addOne = createAddNum(1)

const addFive = createAddNum(5)

console.log(addOne(numbers))
console.log(addFive(numbers))