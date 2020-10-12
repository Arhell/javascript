const person = {
  name: 'Name',
  age: 25,
  job: 'Job'
}

const ObjectProxy = new Proxy(person, {
  get(target, propKey) {
    console.log(`Getting prop key ${propKey}`)
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