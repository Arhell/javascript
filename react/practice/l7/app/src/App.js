import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Navbar} from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} component={About}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
