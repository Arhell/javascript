import React from 'react';
import './App.css';
import Car from './Car/Car'

const divStyle = {
  textAlign: 'center'
};

function App() {
  return (
    <div style={divStyle}>
      <h1>H1</h1>

      <Car name={'Car'} year={2022}>
        <p style={{color: 'green'}}>color</p>
      </Car>
      <Car name={'Car2'} year={2023}>
        <p style={{color: 'red'}}>color</p>
      </Car>
      <Car name='Car3' year={2033}/>
    </div>
  );
}

export default App;
