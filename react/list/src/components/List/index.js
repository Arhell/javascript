import classNames from 'classnames';
import './List.scss';

import removeIcon from '../../assets/img/remove.svg'

import Badge from "../Badge";

const List = ({ items, isRemovable, onClick, onRemove }) => {

  const removeList = (item) => {
    if (window.confirm('Some text')) {
      onRemove(item)
    }
  }

  return (
    <ul
      className="list"
      onClick={onClick}
    >
      {items.map((item, index) => (
        <li
          className={classNames(item.className, {'active': item.active})}
          key={index}>
          <i>
            {item.icon
              ? item.icon
              : <Badge color={item.color}/>
            }
          </i>
          <span>{item.name}</span>
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
