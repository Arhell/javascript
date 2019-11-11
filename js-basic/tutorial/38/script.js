var ford = Object.create({
  calculateDistancePerYear: function () {
    console.log('Calculate')
  }
}, {
  name: {value: 'Ford'},
  model: {value: 'Focus'},
  year: {value: 2015},
  distance: {value: 120500}
})

console.log(ford)