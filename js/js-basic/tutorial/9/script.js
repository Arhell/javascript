if (1) {
  console.log('true')
} else {
  console.log('false')
}

4 ? console.log('true') : console.log('false')

!((true || false) || !false) ? console.log('true') : console.log('false')

var age = 20

// if (age < 18) {
//   message = 'some text'
// } else {
//   message = 'some text 2'
// }

var message = age < 18 ? 'some text' : 'some text 2'

console.log(message)