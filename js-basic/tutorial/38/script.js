var ford = Object.create({
  calculateDistancePerYear: function () {
    console.log('Calculate')
  }
}, {
  name: {
    value: 'Ford',
    enumerable: true,
    writable: false,
    configurable: false
  },
  model: {
    value: 'Focus',
    enumerable: true,
    writable: false,
    configurable: false

  },
  year: {
    value: 2015,
    enumerable: true,
    writable: false,
    configurable: false
  },
  distance: {
    value: 120500,
    enumerable: true,
    writable: true,
    configurable: false
  },
  age: {
    enumerable: true,
    get: function () {
      console.log('Get age')
      return new Date().getFullYear() - this.year
    },
    set: function () {
      console.log('set value')
    }
  }
})

console.log(ford)