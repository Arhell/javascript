import React from "react";
import './Car.css'

export default props => {
  const inputCalsses = ['input']

  if(props.name !== '') {
    inputCalsses.push('green')
  } else {
    inputCalsses.push('red')
  }

  if(props.name.length > 4) {
    inputCalsses.push('bold')
  }

  return(
    <div className='Car'>
      <h3>Car name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputCalsses.join(' ')}
        />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}


