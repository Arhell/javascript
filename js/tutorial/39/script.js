var person = {
  name: 'Text',
  age: 20,
  job: 'Some'
}

// for (var key in person) {
//   if(person.hasOwnProperty(key)) {
//     console.log(person[key])
//   }
// }

Object.keys(person).forEach(function (key) {
  console.log(person.key)
})
