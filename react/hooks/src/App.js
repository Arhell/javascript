import React, {useState, useEffect} from 'react'
import './App.css';

function useLogger(value) {
  useEffect(() => {
    console.log('Val', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {

  // const [name, setName] = useState('')
  //
  // const changeHandler = event => {
  //   setName(event.target.value)
  // }

  const input = useInput('')

  useLogger(input.value)

  return (
    <div>
      <input type="text" {...input.bind} />
      <button onClick={() => input.clear()}>Clear</button>
      <hr />
      <h1>{input.value}</h1>
    </div>
  );
}

export default App;
