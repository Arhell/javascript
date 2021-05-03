import { useReducer } from 'react'
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
import socket from './socket'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    })
    socket.emit('ROOM:JOIN', obj)
  }

  window.socket = socket

  return (
   <div className="wrapper">
     {!state.isAuth && <JoinBlock onLogin={onLogin}/>}
   </div>
  );
}

export default App;
