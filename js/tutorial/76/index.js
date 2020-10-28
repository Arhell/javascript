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