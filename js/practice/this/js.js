function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Name',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const name = {
  name: 'Name',
  age: 25
}

const fnNameInfoLog = person.logInfo.bind(name, 'Frontend', '123456')
fnNameInfoLog()

// fnNameInfoLog2 = person.logInfo.bind(name, 'Frontend', '123456')()
// person.logInfo.call(name, 'Frontend', '123456')

person.logInfo.apply(name, ['Frontend', '123456'])

const arr = [1, 2, 3, 4, 5]
function myBy(arr, n) {
  return arr.map(function (i) {
    return i * n
  })
}

console.log(myBy(arr, 3))

Array.prototype.myBy2 = function(n) {
  return this.map(function (i) {
    return i * n
  })
}

console.log(arr.myBy2(2))