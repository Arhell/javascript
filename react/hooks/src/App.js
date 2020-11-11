import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [type, setType] = useState('users')

  const [data, setData] = useState([])

  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  return (
    <div>
      <h1>Text: {type}</h1>

      <button onClick={() => setType('users')}>Name</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
