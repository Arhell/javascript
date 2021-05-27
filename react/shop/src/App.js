import { Header } from "./components";
import {Cart, Home} from "./pages"
import {Route} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then(json => {
        setPizzas(json.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() => <Home items={pizzas} />} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
