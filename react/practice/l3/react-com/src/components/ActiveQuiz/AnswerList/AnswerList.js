import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
  return (
    <ul className="AnswersList">
      { props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
          />
        )
      }) }
    </ul>
  )
};

export default AnswersList