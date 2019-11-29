console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8/3)
console.log(0xAB) // 2.6666
console.log(2e3) // 2000
console.log(NaN) // Not a number
console.log(typeof NaN)
console.log(13/0) // infinity

var num = 42
var num2 = 8 / 3

console.log(num.toString())
console.log(+num2.toFixed(3) + 4) // + to number
console.log(parseFloat(num2.toFixed(2))) // 2.2324
console.log(parseInt(num2.toFixed(2))) // 2

console.log(isNaN(NaN)) // true
console.log(isNaN(3)) // false

console.log(isFinite(1/0)) // false
console.log(isFinite(333)) // true