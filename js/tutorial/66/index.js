function fun(n) {
  return function () {
    console.log(10 * n)
  }
}

const calc = fun(5)
calc()

function createIn(n) {
  return function (num) {
    return n + num
  }
}

const addOne = createIn(1)
const addTen = createIn(10)

console.log(addOne(10))
console.log(addTen(10))

function urlGen(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGen('com')

console.log(comUrl('github'))

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}