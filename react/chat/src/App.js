import { useReducer, useEffect } from 'react'
import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import reducer from "./reducer";
import socket from './socket'


function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: []
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    })
    socket.emit('ROOM:JOIN', obj)
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users
    })
  }

  useEffect(() => {
    socket.on('ROOM:JOINED', setUsers)

    socket.on('ROOM:SET_USERS', setUsers)
  }, [])


  window.socket = socket

  return (
   <div className="wrapper">
     {!state.isAuth ? <JoinBlock onLogin={onLogin}/> : <Chat {...state} />}
   </div>
  );
}

export default App;
