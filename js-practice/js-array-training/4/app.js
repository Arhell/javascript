var arr = [10,9,8,7,6,5,4,3,2,1];
var arrTwo = [1,12,3,12,5,12,7,12,9,12];
var arrThree = []

// for (i=0; i<arr.length; i++){
//   arrThree.push(arr[i] + arrTwo[i])
// }

var arrThree = arr.map(function (value, index) {
  return value + arrTwo[index]
})

console.log(arrThree)



