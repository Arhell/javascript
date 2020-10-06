const person = Object.create(
  {
    calculateAge() {
      console.log('Age', new Date().getFullYear() - this.year)
    }
  }, {
  name: {
    value: 'Text',
    enumerable: true,
    writable: true,
    configurable: true
  },
  year: {
    value: 2000,
    enumerable: false,
    writable: false,
    configurable: false
  },
  age: {
    get() {
      return new Date().getFullYear() - this.year
    },
    set(val) {
      document.body.style.background = 'red'
      console.log('Age', val)
    }
  }
})

person.name = 'Name'

for(let key in person) {
  if(person.hasOwnProperty(key)){
    console.log('Key', key, person[key])
  }
}

console.log(person)