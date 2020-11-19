import {useState, useCallback,} from 'react'
import ItemsList from './itemsList'
import './App.css';

function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'black'
  }

  const generateItemsFromApi = useCallback(() => {
    return new Array(count).fill('').map(i => `Elem ${i + 1}`)
  }, [count])

  return (
    <div>
      <h1 style={styles}>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>add</button>
      <button onClick={() => setColored(prev => !prev)}>change</button>


      <ItemsList getItems={generateItemsFromApi} />
    </div>
  );
}

export default App;
