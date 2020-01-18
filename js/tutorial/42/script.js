function printObject(objName) {
  console.log('texttext', objName)
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      console.log('[' + key + ']', this[key])
    }
  }
}

var person = {
  firstName: 'text',
  job: 'text2',
  age: 28,
  friends: ['some', 'some2']
};

var car = {
  name: 'text3',
  model: 'text4',
  year: 2018
};

var printPerson = printObject.bind(person);
printPerson('Text')

printObject.call(car, 'text')

printObject.apply(person, ['some text'])