import {useState, useEffect, useRef} from 'react'
import './App.css';

// let renderCount = 1

function App() {

  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  },[value])

  const focus = () => inputRef.current.focus()

  return (
    <div>

      <h1>Render: {renderCount.current}</h1>
      <h2>Before: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button onClick={focus}></button>
    </div>
  );
}

export default App;
