var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')
function btnHan() {
  console.log('Click')
  h1.textContent = input.value
}

h1.addEventListener('mouseenter', function () {
  this.style.color = 'red'
  this.style.backgroundColor = 'blue'
})

h1.addEventListener('mouseleave', function () {
  this.style.color = 'green'
  this.style.backgroundColor = 'transparent'
})

btn.addEventListener('click', btnHan)