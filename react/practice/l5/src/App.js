import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

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
      </div>
    )
  }
}

function mapStateProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
