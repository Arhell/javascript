import React from 'react';
import './App.css';
import Car from './Car/Car'

const divStyle = {
  textAlign: 'center'
};

const state = {
  cars: [
    {
      name: 'Car',
      year: 2022
    },
    {
      name: 'Car2',
      year: 2023
    },
    {
      name: 'Car3',
      year: 2033
    },
  ],
  pageTitle: 'React components'
}

function App() {

  return (
    <div style={divStyle}>
      <h1>{state.pageTitle}</h1>

      <Car name={state.cars[0].name} year={state.cars[0].year} />
      <Car name={state.cars[1].name} year={state.cars[1].year} />
      <Car name={state.cars[2].name} year={state.cars[2].year} />

    </div>
  );
}

export default App;
