import React from "react";
import AnswersList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>
            1.
          </strong>
          {props.quastion}
        </span>
        <small>
          Text
        </small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
};

export default ActiveQuiz