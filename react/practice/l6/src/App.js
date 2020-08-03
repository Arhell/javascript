import React from 'react';
import './App.css';

function App() {
  state = {
    chars: [
      {name: '1', side: '1'},
      {name: '2', side: '2'},
      {name: '3', side: '1'},
      {name: '4', side: '2'}
    ]
  }

  return (
    <ul>
      { this.state.chars.map((char, index) => {
        return (
          <li> key={char.name + index}
            <strong>
              {char.name} - &nbsp;
            </strong>

            {char.side}
          </li>
        )
      })}
    </ul>
  );
}

export default App;
