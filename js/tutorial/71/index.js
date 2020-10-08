const delay = ms => {
  return new Promise(resolve => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.log('text'))

const url = "https://jsonplaceholder.typicode.com/todos/1"

function fetchTodo() {
  console.log('Fetch start')
  return delay(2000)
    .then(() => fetch(url))
    .then(response => response.json())
}

fetchTodo().then(data => console.log('Data', data)).catch(e => console.error(e))

async function fetchAsyncTodo() {
  console.log('Fetch data start')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data', data)
  } catch (e) {
    console.error(e)
  } finally {
    
  }

}

fetchAsyncTodo()