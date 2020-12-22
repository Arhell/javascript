import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from './context/alert/AlertState'

function App() {
  return (
    <AlertState>
      <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} component={About}/>
            </Switch>
          </div>
      </Router>
    </AlertState>
  );
}

export default App;
