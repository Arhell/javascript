import addIcon from '../../assets/img/add.svg'

const AddTaskForm = () => {

  return (
    <div className="tasks__form">
      <div className="tasks__form-new">
        <img src={addIcon} alt="icon"/>
        <span>New task</span>
      </div>
      <div className="tasks__form-block">
        <input
          className="field"
          type="text"
          placeholder="Текст задачи"
        />
        <button className="button">Добавить задачу</button>
        <button className="button button--grey">Отмена</button>
      </div>
    </div>
  )
}

export default AddTaskForm