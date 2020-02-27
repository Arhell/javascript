import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Text1', year: 2010},
      {name: 'Text2', year: 2011},
      {name: 'Text3', year: 2012}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHendler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = pageTitle => {
    this.setState({pageTitle})
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => {
              this.changeTitleHandler(car.name)
            }}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHendler}
        >Toggle</button>

        { cars }
      </div>
    );
  }
}

export default App;
