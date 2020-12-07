function calcValues(a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b
  ]
}

// const result = calcValues(42, 10)
const [sum,, mult, ...other] = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result

console.log(sum, mult, other)