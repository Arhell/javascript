import { Header } from "./components";
import {Cart, Home} from "./pages"
import {Route} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import {setPizzas} from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch()
  const {items} = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  })

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas))
      })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() => <Home items={items} />} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App
