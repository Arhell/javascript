var carColor = 'red'

// if (carColor === 'green') {
//   console.log('some text')
// } else if (carColor === 'yellow') {
//   console.log('some text 2')
// } else if (carColor === 'red') {
//   console.log('some text 3')
// } else {
//   console.log('some text 4')
// }

switch (carColor) {
  case 'green':
    console.log('some text')
    break
  case 'yellow':
    console.log('some text 2')
    break
  case "red":
    console.log('some text 3')
    break
  default:
    console.log('some text 4')
}