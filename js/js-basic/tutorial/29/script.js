document.querySelector('alert').addEventListener('click', function () {
  alert('some text')
})

document.querySelector('confirm').addEventListener('click', function () {
  var decision = confirm('some text2')
  if(decision) {
    alert('some text')
  }
})

document.querySelector('prompt').addEventListener('click', function () {
  var age = prompt('some text3', 18)
  if (age >= 18) {
    alert("some text4")
  } else {
    alert('some text5')
  }
})

console.log('console log')
console.wart('console warn')
console.info('console info')
console.error('console error')

throw new Error('error')