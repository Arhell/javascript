import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
  state = {
    quiz: [
      {
        answers: [
          {
            text: 'Some text 1',
          },
          {
            text: 'Some text 2',
          },
          {
            text: 'Some text 3',
          },
          {
            text: 'Some text 4',
          },
        ]
      }
    ]
  };

  render() {
    return (
      <div className="Quiz">

        <div className="QuizWrapper">
          <h1>Some text</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz