import { Header } from "./components";
import {Cart, Home} from "./pages"
import {Route} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";

import {setPizzas} from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        dispatch(setPizzas(data))
      })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App
