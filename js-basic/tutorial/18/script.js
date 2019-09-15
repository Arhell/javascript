var num = [1,2,3,4,5,6,7,8,9]

// num.push('NaN')
// num.push('some')

// for (var i = 0; i < num.length; i++) {
//   if(num[i] % 2 === 0) {
//     console.log(num[i])
//   }
// }

for (var i = 0; i < num.length; i++) {
  if(num[i] % 2 !== 0) {
    continue
  }
  console.log(num[i])
}

for (var i = 0; i < num.length; i++) {
  if(num[i] % 2 === 0) {
    continue
  }
  console.log(num[i])
}

num.push('str')

for (var i = 0; i < num.length; i++) {
  if(typeof num[i] === 'str') {
    break
  }
  console.log(num[i])
}
