import {useState, useMemo, useEffect} from 'react'
import './App.css';

function complexCompute(num) {
  let i = 0
  while (i < 10000000) i++
  return num * 2
}

function App() {

  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => {
    return {
      color: colored ? 'red' : 'black'
    }
  }, [colored])

  const styles2 = {
    color: colored ? 'red' : 'black'
  }

  console.log(styles === styles2)

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>{computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>remove</button>
      <button onClick={() => setColored(prev => !prev)}>change</button>

    </div>
  );
}

export default App;
