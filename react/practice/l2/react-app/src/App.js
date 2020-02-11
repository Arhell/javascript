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

      <Car />
    </div>
  );
}

export default App;
