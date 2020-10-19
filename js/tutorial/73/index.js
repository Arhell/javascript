const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultValue({
  x: 24,
  y: 42
}, 0)

console.log(position)

const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj)
      .filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver)
      ? obj[prop]
      : void 0
  })
}

const data = withHiddenProps({
  name: "name",
  age: 25,
  _uid: '123'
})

console.log(data)

const userData = [
    {id: 1, name: '1', job: '1', age: 25},
    {id: 2, name: '2', job: '2', age: 24},
    {id: 3, name: '3', job: '3', age: 23},
    {id: 4, name: '4', job: '4', age: 22},
]

const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach(item => index[item.id] = item)

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return item => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'dindById':
            return id => index[id]

          default: return arr[prop]
        }
      }
    })
  }
})

const users = new IndexArray([
  {id: 1, name: '1', job: '1', age: 25},
  {id: 2, name: '2', job: '2', age: 24},
  {id: 3, name: '3', job: '3', age: 23},
  {id: 4, name: '4', job: '4', age: 22},
])