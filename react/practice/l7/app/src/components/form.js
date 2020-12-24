import {useState, useContext} from 'react'
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = event => {
    event.preventDefault()

    alert.show(value, 'success')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
            type="text"
            className="form-control"
            placeholder="Text"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}