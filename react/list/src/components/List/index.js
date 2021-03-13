import classNames from 'classnames';
import './List.scss';

import Badge from "../Badge";

const List = ({ items, isRemovable, onClick }) => {
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
        </li>
      ))}
    </ul>
  );
};

export default List;
