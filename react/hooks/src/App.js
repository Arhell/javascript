import {useState,} from 'react'
import './App.css';

function App() {

  const [number, setNumber] = useState(42)

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>remove</button>

    </div>
  );
}

export default App;
