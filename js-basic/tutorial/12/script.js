var carName = "some text"
var carYear = 2010
var personYear = 1990

function calAge(year) {
  var curYear = 2018
  var result = curYear - year
  return result
}

function check(year, name, compareTo) {
  if ((calAge(year)) < compareTo) {
    console.log("some "+ name +" text2" + compareTo)
  } else {
    console.log("some " + name + " text3" + compareTo)
  }
}
check(carYear, '1', 12)
check(personYear, '2', 30)


