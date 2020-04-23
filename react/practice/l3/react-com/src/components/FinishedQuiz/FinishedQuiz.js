import React from "react";

const FinishedQuiz = props => {
  return (
    <div className="FinishedQuiz">
      <ul>
        <li>
          <strong>1. </strong>
          some text
          <i className="fa fa-times error" />
        </li>
        <li>
          <strong>1. </strong>
          some text
          <i className="fa fa-check success" />
        </li>
      </ul>

      <p>
        right 3 10
      </p>

      <div>
        <button>Text</button>
      </div>
    </div>
  )
}

export default FinishedQuiz