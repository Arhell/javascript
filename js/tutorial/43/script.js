var a = [1, 2, 3]
var b = [5, 'text', 6]

Array.prototype.double = function () {
  var newArr = this.map(function (item) {
    if (typeof item === 'number') {
      return Math.pow(item, 2)
    }

    if (typeof item === 'string') {
      return item += item
    }
  })

  return newArr
}

var newA = a.double()
var newB = b.double()

console.log(newA)
console.log(newB)