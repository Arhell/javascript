document.querySelector('#load').addEventListener('click', load)

async function load() {
  var url = 'https://jsonplaceholder.typicode.com/users'

  var response = await fetch(url)
  var data = await response.json()

  var html = data.map(function (item) {
    return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
  }).join(' ')

  document.querySelector('#list').insertAdjacentHTML('afterbegin', html)
}