var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
a.setAttribute('href', 'https://www.google.com')
a.textContent = 'google'
a.setAttribute('title', 'go to github')
console.log(a.attributes)