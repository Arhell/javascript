const person = {
  name: 'Name',
  age: 25,
  job: 'Job'
}

const ObjectProxy = new Proxy(person, {
  get(target, propKey) {
    console.log(`Getting prop key ${propKey}`)
    if(!(propKey in target)) {
      return propKey
        .split('_')
        .map(p => target[p])
        .join(' ')
    }
    return target[propKey]
  },
  set(target, prop, value) {
    if(prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop}`)
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Del', prop)
    delete target[prop]
    return true
  }
})

const log = text => `Log ${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, argArray) {
    console.log('Calling fn')
    return target.apply(thisArg, argArray).toUpperCase()
  }
})

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, argArray) {
    console.log('Construct')
    return new Proxy(new target(...argArray), {
      get(t, prop) {
        console.log(`Get prop ${prop}`)
        return t[prop]
      }
    })
  }
})

const p = new PersonProxy('Name', 30)