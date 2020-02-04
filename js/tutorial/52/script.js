// setTimeout(function () {
//   alert('hello timeout')
// }, 2000)

var counter = 0

var interval = setInterval(function () {
  console.log(++counter)
}, 2000)

setTimeout(function () {
  clearInterval(interval)
}, 5000)