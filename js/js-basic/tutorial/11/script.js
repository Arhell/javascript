var carName = "some text"
var carYear = 2010
var personYear = 1990

function calAge(year) {
  var curYear = 2018
  var result = curYear - year
  return result
}

function check(year) {
  if ((calAge(year)) < 10) {
    console.log("some text2")
  } else {
    console.log("some text3")
  }
}
check(carYear)
check(personYear)


// if ((calAge(carYear)) < 10) {
//   console.log("some text2")
// } else {
//   console.log("some text3")
// }
//
// if ((calAge(personYear)) < 10) {
//   console.log("some text4")
// } else {
//   console.log("some text5")
// }