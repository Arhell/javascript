import addIcon from '../../assets/img/add.svg'

const AddTaskForm = () => {

  return (
    <div className="tasks__form">
      <div className="tasks__form-new">
        <img src={addIcon} alt="icon"/>
        <span>New task</span>
      </div>
    </div>
  )
}

export default AddTaskForm