import { useReducer } from 'react'
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false
  })

  const onLogin = () => {
    dispatch({
      type: 'IS_AUTH',
      payload: true
    })
  }

  return (
   <div className="wrapper">
     {!state.isAuth && <JoinBlock onLogin={onLogin}/>}
   </div>
  );
}

export default App;
