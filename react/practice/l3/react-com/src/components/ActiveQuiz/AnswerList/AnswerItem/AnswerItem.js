import React from "react";

const AnswerItem = props => {

  const cls = ['AnswerItem'];

  if (props.state) {
    cls.push(props.state)
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
};

export default AnswerItem
