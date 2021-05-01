import { useState } from 'react'
import socket from '../socket'
import axios from 'axios'

function JoinBlock() {
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const onEnter = () => {
    if(!roomId || !userName) {
      return alert("Error")
    }
    axios.post('/rooms', {
      roomId,
      userName
    })
  }

  return (
    <div className="join-block">
      <input type="text" placeholder="Room ID" value={roomId} onChange={event => setRoomId(event.target.value)} />
      <input type="text" placeholder="Name" value={userName} onChange={event => setUserName(event.target.value)} />
      <button className="btn btn-success" onClick={onEnter}>Enter</button>
    </div>
  );
}

export default JoinBlock;
