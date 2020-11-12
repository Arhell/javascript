import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useEffect({
    x: 0,
    y: 0
  })

  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clean type')
    }
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  },[])

  return (
    <div>
      <h1>Text: {type}</h1>

      <button onClick={() => setType('users')}>Name</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/*<pre>*/}
      {/*  {JSON.stringify(data, null, 2)}*/}
      {/*</pre>*/}
      <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>
    </div>
  );
}

export default App;
