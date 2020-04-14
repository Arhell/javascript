import React from "react";

const AnswerItem = props => {
  return (
    <li className="AnswerItem">
      { props.answer.text }
    </li>
  )
};

export default AnswerItem
