import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={'is-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{
                  color: green,
                }}
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          <Route path="/about" component={About} />
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          {/*<Redirect to={'/'} />*/}
          <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404</h1>}/>
        </Switch>


      </div>
    );
  }
}

export default App
