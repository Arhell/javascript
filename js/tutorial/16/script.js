var cars = [
  'ford',
  'toyota',
  'bmw',
  'kia'
]
var any = [42, 'apple', {a:1}]

console.log(cars)
console.log(any)
console.log(cars[1])

console.log(cars.length)

cars.push('audi')
console.log(cars)

var audi = cars.pop()
console.log(cars, audi)

var ford = cars.shift()
console.log(cars, ford)

cars.unshift(audi)
console.log(cars)

var index = cars.indexOf('kia')
var kia = cars[index]
console.log(kia)