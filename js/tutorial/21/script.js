// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)

// class -> .class
// id -< #id

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')
// var ul = document.querySelector('div#playground > div > ul')
div.innerHTML = '<h2 style="color:red;">Some text</h2>'
h2.textContent = 'Some text2'
console.log(div.innerHTML)
console.log(p)
console.log(h1.textContent)
console.log(ul)
console.log(input.value)