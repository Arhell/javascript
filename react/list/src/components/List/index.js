import classNames from 'classnames';
import './List.scss';
import axios from "axios";

import removeIcon from '../../assets/img/remove.svg'

import Badge from "../Badge";

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {

  const removeList = (item) => {
    if (window.confirm('Удалить')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  }

  return (
    <ul
      className="list"
      onClick={onClick}
    >
      {items.map((item, index) => (
        <li
          className={classNames(item.className, {
            'active': activeItem && activeItem.id === item.id
          })}
          onClick={onClickItem ? () => onClickItem(item) : null}
          key={index}>
          <i>
            {item.icon
              ? item.icon
              : <Badge color={item.color.name}/>
            }
          </i>
          <span>
            {item.name}
            {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
          </span>
          {isRemovable &&
          <img
            className="list__remove-icon"
            src={removeIcon}
            alt="icon"
            onClick={() => removeList(item)}
          />}
        </li>
      ))}
    </ul>
  );
};

export default List;
