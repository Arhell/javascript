import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {
  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    return (
      <div className={'App'}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.updateCounter(1)}>+ 1</button>
          <button onClick={() => this.updateCounter(-1)}>- 1</button>
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

export default connect(mapStateProps)(App)
