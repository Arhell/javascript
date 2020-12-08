function calcValues(a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b
  ]
}

// const result = calcValues(42, 10)
const [sum, sub = 'None', mult, ...other] = calcValues(42, 10)
// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result

console.log(sum, sub, mult, other)

const person = {
  name: 'Name',
  age: 30,
  adress: {
    country: 'Country',
    city: 'City'
  }
}

// const name = person.name
// const {
//   name: firstName = "No name",
//   age,
//   car = 'None',
//   adress: {city: homeTown, country}
// } = person
// console.log(firstName, age, car, homeTown, country)

// const {name, ...info} = person
// console.log(name, info)

function logPerson({name: firstName = 'Name', age}) {
  console.log(firstName + " " + age)
}

console.log(logPerson(person))