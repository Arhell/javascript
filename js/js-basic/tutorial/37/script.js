function Car(name, year) {
  this.name = name
  this.year = year
}

Car.prototype.getAge = function () {
  return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'

var ford = new Car('Ford', 2015)
var bmw = new Car('bmw', 2017)

ford.color = 'red'
console.log(ford)
console.log(bmw)