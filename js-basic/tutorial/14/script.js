var str1 = "some text"
var str2 = 'some text2'
console.log(str1)
console.log(str2)

var personName = 'some text3'
var message = 'some text4 "' + personName +'"'
var message2 = "some text5 '" + personName +"'"
var message3 = 'some text6 \'' + personName +'\''

var newMessage = 'some text7!!!'
console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf('text'))
console.log(newMessage.indexOf('neko'))
console.log(newMessage.substr(1, 3))
console.log(newMessage.substr(newMessage.indexOf('text'), 4))
console.log(newMessage.substring(1, 3))