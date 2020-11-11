import {useState} from 'react'
import './App.css';

function computeInitCounter() {
  console.log('Some text')
  return Math.trunc(Math.random() * 20)
}

function App() {

  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(computeInitCounter())
  const [counter, setCounter] = useState(() => {
    return computeInitCounter()
  })

  const [state, setState] = useState({
    title: 'Text',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
    // setCounter((prev) => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New text'
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
      <button onClick={updateTitle}>Change</button>

      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default App;
