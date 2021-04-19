import EditIcon from '../../assets/img/edit.svg'

import './tasks.scss'
import axios from "axios";
import AddTaskForm from './AddTaskForm'
import Task from "./Task";
import { Link } from 'react-router-dom'

const Tasks = ({list, onEditTitle, onAddTask, onRemoveTask, onEditTask, onCompleteTask, withoutEmpty}) => {

  const editTitle = () => {
    const newTitle = window.prompt('Название списка', list.name)
    if (newTitle) {
      onEditTitle(list.id, newTitle)
      axios.patch('http://localhost:3001/lists/' + list.id, {
        name: newTitle
      }).catch(() => {
        alert('Error')
      })
    }
  }

  return (
    <div className="tasks">
      <Link to={`/lists/${list.id}`}>
        <h2 style={{ color: list.color.hex }} className="tasks-title">
          {list.name}
          <img onClick={editTitle} src={EditIcon} alt="edit icon"/>
        </h2>
      </Link>

      <div className="tasks__items">
        {!withoutEmpty && list.tasks && !list.tasks.length && <h2>No tasks</h2>}

        {
          list.tasks && list.tasks.map(task => (
            <Task
              key={task.id}
              list={list}
              onEdit={onEditTask}
              onComplete={onCompleteTask}
              onRemove={onRemoveTask} {...task} />
          ))
        }

        <AddTaskForm key={list.id} list={list} onAddTask={onAddTask}/>
      </div>
    </div>
  )
}

export default Tasks