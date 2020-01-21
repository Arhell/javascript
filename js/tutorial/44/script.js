let color = 'red'

color = {color: 'blue'}

console.log(color)

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 2000)
}

const HEX = '#ff0000'

const arr = [1, 2]

const obj = {a:1}

arr.unshift(4)

obj.b = 2

console.log(arr)
console.log(obj)

document.querySelector('h1').style.color = HEX