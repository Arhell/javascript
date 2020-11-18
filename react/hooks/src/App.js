import {useState, useMemo,} from 'react'
import './App.css';

function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'black'
  }

  return (
    <div>
      <h1 style={styles}>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>add</button>
      <button onClick={() => setColored(prev => !prev)}>change</button>
    </div>
  );
}

export default App;
