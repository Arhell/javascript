const person = new Object({
  name: 'Github',
  age: '2000',
  greet: function () {
    console.log('Git')
  }
})

Object.prototype.sayHello = function () {
  console.log('Text')
}

const name = Object.create(person)
name.name = 'Name'

const str = new String('String')