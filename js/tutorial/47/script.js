const createCar = (name, model) => ({name, model})

const car = createCar('Car', 'Model')

console.log(car)

const yearField = 'year'

const car2 = {
  name: 'Car',
  ['model']: 'Text',
  [yearField]: 2010,

  logFields() {
    const {name, year, model} = this
    console.log(name, model, year)
  }
}

console.log(car2)
car2.logFields()

// const year = car2.year
const {year} = car2
console.log(year)