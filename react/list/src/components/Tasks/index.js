import EditIcon from '../../assets/img/edit.svg'

import './tasks.scss'
import axios from "axios";
import AddTaskForm from './AddTaskForm'
import Task from "./Task";

const Tasks = ({list, onEditTitle, onAddTask, withoutEmpty}) => {

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

  const onRemove = (taskId) => {
    if(window.confirm('Remove')) {
      axios.delete('http://localhost:3001/tasks/' + taskId)
        .catch(() => {
          alert('Error')
      })
    }
  }

  return (
    <div className="tasks">
        <h2 style={{ color: list.color.hex }} className="tasks-title">
          {list.name}
          <img onClick={editTitle} src={EditIcon} alt="edit icon"/>
        </h2>
        <div className="tasks__items">
          {!withoutEmpty && !list.tasks.length && <h2>No tasks</h2>}

          {
            list.tasks.map(task => (
              <Task key={task.id} {...task} />
            ))
          }

          <AddTaskForm list={list} onAddTask={onAddTask}/>
        </div>
      </div>
  )
}

export default Tasks