document.querySelector('#load').addEventListener('click', load)

function load() {
  var url = 'https://jsonplaceholder.typicode.com/users'
  console.log('Load')
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      var ul = document.querySelector('#list')
      var html = data.map(function (item) {
        return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
      })
      ul.insertAdjacentHTML('afterbegin', html.join(' '))
    })
}