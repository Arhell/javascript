import { useState, useEffect } from 'react';
import List from "../List";
import Badge from "../Badge";

import closeIcon from '../../assets/img/close.svg'

import './AddList.scss'

const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if(Array.isArray(colors)) {
      setSelectedColor(colors[0].id)
    }
  }, [colors])

  const onClose = () => {
    setVisiblePopup(false)
    setInputValue('')
    setSelectedColor(colors[0].id)
  }

  const addList = () => {
    if(!inputValue) {
      alert("Error")
      return;
    }
    const color = colors.filter(current => current.id === selectedColor)[0].name
    onAdd({id: Math.random(), name: inputValue, color })
    onClose()
  }

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            name: 'Добавить список'
          }
        ]}
      />
      {
        visiblePopup && 
        <div className="add-list__popup">
          <img
            onClick={onClose}
            src={closeIcon}
            className="add-list__popup-close-btn" alt="icon"
          />

          <input
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            className="field"
            type="text"
            placeholder="название списка"
          />

          <div className="add-list__popup-colors">
            {
              colors.map(color => (
                <Badge
                  onClick={()=>setSelectedColor(color.id)}
                  key={color.id}
                  color={color.name}
                  className={selectedColor === color.id && 'active'}
                />
              ))
            }
          </div>
          <button
            onClick={addList}
            className="button"
          >
            Добавить
          </button>
        </div>
      }
    </div>
  )
};

export default AddList