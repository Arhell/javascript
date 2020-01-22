function getAge(year) {
  const current = new Date().getFullYear()
  return current - year
}

console.log(getAge(1990))

const calculateAge = (year) => {
  const current = new Date().getFullYear()
  return current - year
}

console.log(calculateAge(1990))

const getAge2 = year => {
  const current = new Date().getFullYear()
  return current - year
}

console.log(getAge2(1990))

const getAge3 = year => {
  return new Date().getFullYear() - year
}

console.log(getAge3(1990))

const getAge4 = year => new Date().getFullYear() - year

const logAge = year = console.log(new Date().getFullYear() - year)

console.log(logAge)

console.log(getAge4(1990))

const person = {
  age: 25,
  firstName: 'Text',
  logNameWithTimeout() {
    setTimeout(() => {
      console.log(this.firstName)
    }, 1000)
  }
}

console.log(person.logNameWithTimeout())