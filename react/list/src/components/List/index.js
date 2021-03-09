import classNames from 'classnames';
import './List.scss';

const List = ({ items, isRemovable }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li
          className={classNames(item.className, {'active': item.active})}
          key={index}>
          <i>
            {item.icon
              ? item.icon
              : <i className={`badge badge--${item.color}`} />
            }
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
