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
          Some text
        </span>
        <small>
          Text
        </small>
      </p>

      <AnswersList
        answers={props.answers}
      />
    </div>
  )
};

export default ActiveQuiz