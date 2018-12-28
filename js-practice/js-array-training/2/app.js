var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i + 1)
}

// 1
for (let i = arr.length; i > 0; i--) {
  arr.shift(arr.length)
  arr.push(i)
}

console.log(arr)

// 2
// arr.reverse();
//
// console.log(arr)
//
// 3
// function arrRevers(a,b) {
//   return b - a;
// }
//
// arr.sort(arrRevers)
//
// console.log(arr)


