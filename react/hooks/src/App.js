import {useState} from 'react'
import './App.css';

function App() {

  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
    </div>
  );
}

export default App;
