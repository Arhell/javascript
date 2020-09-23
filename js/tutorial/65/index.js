function hello() {
  console.log('hello', this)
}

hello()

const person = {
  name: 'name',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} :info`)
    console.log(`name is ${this.name}`)
    console.log(`age is ${this.age}`)
    console.log(`job is ${job}`)
    console.log(`phone is ${phone}`)
    console.groupEnd()
  }
}

const name = {
  name: 'name',
  age: 25
}

// person.logInfo.bind(name, 'text', '123')()
// person.logInfo.call(name, 'text', '123')

person.logInfo.apply(name, ['text', '123'])

const arr = [1,2,3,4,5]

// function arrBy(arr, n) {
//   return arr.map(function (i) {
//     return i*n
//   })
// }

// console.log(arrBy(arr, 3))

Array.prototype.arrBy = function (n) {
  return this.map(function (i) {
    return i*n
  })
}

console.log(arr.arrBy(3))

