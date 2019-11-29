var currentYear = 2019
var carName = 'car1'
var carYear = 2013
var carAge = currentYear - carYear

if (carAge < 5) {
  console.log(carName + ' some text1')
} else if (carAge >= 5 && carAge <= 10) {
  console.log(carName + ' some text2')
} else {
  console.log(carName + ' some text3' + carAge)
}

// false => 0

if (0) {
  console.log('true')
} else {
  console.log('false')
}

// false => null

if (null) {
  console.log('true')
} else {
  console.log('false')
}

// false => undefined

if (undefined) {
  console.log('true')
} else {
  console.log('false')
}

// false => ''

var empty = ''
if (empty) {
  console.log('true')
} else {
  console.log('false')
}

// false => Nan (not a number)

if (Nan) {
  console.log('true')
} else {
  console.log('false')
}

