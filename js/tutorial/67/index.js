console.log('start')

function timeOut() {
  console.log('TimeOut2')
}

window.setTimeout(function (){
  console.log('TimeOut')
},1000)

setTimeout(timeOut,2000)

console.log('end')