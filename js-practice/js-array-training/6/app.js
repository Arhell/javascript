var arr = [11,21,11,19,11,17,11,15,11,13];
var result =[]


for(i = 0; i < arr.length; i++){
  if(arr[i] === 11) {
    arr.splice(arr[i])
  } else {
    result.push(arr[i])
  }
}

var Arr = arr.filter(function(number) {
  return number !== 11;
})



console.log(result)

console.log(Arr)



