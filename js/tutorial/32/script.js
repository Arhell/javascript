var obj = {
  name: 'text',
  age: 30,
  car: {
    model: 'some2'
  },
  job: 'front',
  friends: ['text1', 'text2']
}

var str = JSON.stringify(obj)
console.log(str)
console.log(JSON.parse(str))