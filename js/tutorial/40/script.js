var createCounter = function (counterName) {
  var counter = 0

  return {
    increment: function () {
      counter++
    },
    decrement: function () {
      counter--
    },
    getCounter: function () {
      return counter
    }
  }
}

var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()