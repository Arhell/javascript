import React from "react";
import AnswersList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>
            {props.answerNumber}.
          </strong>
          {props.quastion}
        </span>
        <small>
          {props.answerNumber} - {props.quizLength}
        </small>
      </p>

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
};

export default ActiveQuiz