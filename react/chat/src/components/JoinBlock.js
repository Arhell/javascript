import { useState } from 'react'
import axios from 'axios'

function JoinBlock({onLogin}) {
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')
  const [isLoading, setLoading] = useState(false)

  const onEnter = async () => {
    if(!roomId || !userName) {
      return alert("Error")
    }
    const obj = {
      roomId,
      userName
    }

    setLoading(true)

    await axios.post('/rooms', obj)
    onLogin(obj)
  }

  return (
    <div className="join-block">
      <input type="text" placeholder="Room ID" value={roomId} onChange={event => setRoomId(event.target.value)} />
      <input type="text" placeholder="Name" value={userName} onChange={event => setUserName(event.target.value)} />
      <button disabled={isLoading} className="btn btn-success" onClick={onEnter}>{isLoading ? 'Loading...' : "Enter"}</button>
    </div>
  );
}

export default JoinBlock;
