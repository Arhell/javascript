import {useState} from 'react'

import addIcon from '../../assets/img/add.svg'

const AddTaskForm = () => {
  const [visibleForm, setVisibleForm] = useState(false)

  const toggleFormVisible = () => {
    setVisibleForm(!visibleForm)
  }

  return (
    <div className="tasks__form">

      {!visibleForm
        ? (
          <div className="tasks__form-new" onClick={toggleFormVisible}>
            <img src={addIcon} alt="icon"/>
            <span>New task</span>
          </div>
        )

        : (
          <div className="tasks__form-block">
            <input
              className="field"
              type="text"
              placeholder="Текст задачи"
            />
            <button className="button">Добавить задачу</button>
            <button className="button button--grey" onClick={toggleFormVisible}>Отмена</button>
          </div>
        )
      }
    </div>
  )
}

export default AddTaskForm