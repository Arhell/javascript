import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from "./Counter";

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>+ 1</button>
          <button onClick={this.props.onSub}>- 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>+</button>
          <button onClick={() => this.props.onAddNumber(-18)}>-</button>
        </div>
        <Counter />
      </div>
    )
  }
}

function mapStateProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onAddNumber: number => dispatch({type: 'ADD_NUMBER', payload: number})
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
