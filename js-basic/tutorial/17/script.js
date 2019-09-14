var person = {
  name: "some text",
  year: 1999,
  fam: ['some', 'text'],
  car: {
    year: 2020,
    model: 'mazda'
  },
  calAge: function () {
    this.age = 2018 - this.year // person.year

  }
}

console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'car'
console.log(person[field].year)

person.year = 2000
console.log(person.year)

person.calAge()
console.log(person)