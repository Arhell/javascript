const obj = {
  name: 'Name',
  age: 27,
  job: 'Job'
}

const entries = [
  ['name', 'Name'],
  ['age', 27],
  ['job', 'Job']
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

const map = new Map(entries)

console.log(map.get('job'))

map
  .set('newField', 50)
  .set(obj, 'Value')
  .set(NaN, 'NaN')

console.log(map.get(NaN))

map.delete('job')

console.log(map.has('job'))
console.log(map.size)
map.clear()
console.log(map.size)

for (let entry of map.entries()) {
  console.log(entry)
}

for (let [key, value] of map.entries()) {
  console.log(key, value)
}

for (let val of map.values()) {
  console.log(val)
}

for (let key of map.keys()) {
  console.log(key)
}

map.forEach((val, key, map) => {
  console.log(val, key)
})

const array = [...map]
console.log(array)

const array2 = Array.from(map)

console.log(array2)

const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

const users = [
  {name: '1'},
  {name: '2'},
  {name: '3'},
]

const visit = new Map()
visit
  .set(users[0], new Date())
  .set(users[1], new Date().getTime() + 1000 * 60)
  .set(users[2], new Date().getTime() + 5000 * 60)

function lastVisit(user) {
  return visit.get(user)
}

console.log(lastVisit(users[1]))


const set = new Set([1,2,3,3,3,4,5,5,6])
set.add(10).add(20).add(30).add(20)
console.log(set)
console.log(set.has(30))
console.log(set.size)
console.log(set.delete(1))
console.log(set.values())
console.log(set.keys())
console.log(set.entries())

for(let key of set) {
  console.log(key)
}

function uniqValues(array) {
  return [...new Set(array)]
  // return Array.from(new Set(array))
}

console.log(uniqValues([1,1,2,2,4,4,4,4,4,5,6,6,6]))

let obj = {
  name: 'weakmap'
}

const arr = [obj]

console.log(obj)

const map = new WeakMap([
  [obj, 'obj data']
])

obj = null

console.log(map.has(obj))

const cache = new WeakMap()

function cacheUser(user) {
  if(cache.has(user)) {
    cache.set(user, Date.now())
  }

  return cache.get(user)
}

let name = {
  name: 'Name'
}

let name2 = {
  name: 'Name2'
}

cacheUser(name)
cacheUser(name2)

name = null

console.log(cache.get(name))
console.log(cache.has(name2))

