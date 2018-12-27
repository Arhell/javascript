var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i + 1)
}

arr.reverse();

console.log(arr)


function arrRevers(a,b) {
  return b - a;
}

arr.sort(arrRevers)

console.log(arr)


