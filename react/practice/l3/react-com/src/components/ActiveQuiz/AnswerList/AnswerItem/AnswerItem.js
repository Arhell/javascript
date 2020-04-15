import React from "react";

const AnswerItem = props => {
  return (
    <li
      className="AnswerItem"
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      { props.answer.text }
    </li>
  )
};

export default AnswerItem
