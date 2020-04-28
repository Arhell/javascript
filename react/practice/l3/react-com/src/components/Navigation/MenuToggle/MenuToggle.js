import React from "react";

const NewToggle = props => {
  const cls = [
    'MenuToggle',
    'fa',
  ]

  if(props.isOpen) {
    cls.push('fa-times')
    cls.push('open')
  } else {
    cls.push('fa-bars')
  }

  return(
    <i
      className={cls.join(" ")}
      onClick={props.onToggle}
    />
  )
}

export default NewToggle