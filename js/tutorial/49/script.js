const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`

const bing = `<li>${createLink({path: 'https://bing.com', name: 'Bing'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', bing)


const strToLog = `
  Some
  text
    Some
      text
`
console.log(strToLog)