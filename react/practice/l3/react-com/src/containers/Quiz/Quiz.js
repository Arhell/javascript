import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
  state = {
    quiz: [
      {
        rightAnswerId: 2,
        quastion: 'Some text',
        answers: [
          {
            text: 'Some text 1',
            id: 1,
          },
          {
            text: 'Some text 2',
            id: 2,
          },
          {
            text: 'Some text 3',
            id: 3,
          },
          {
            text: 'Some text 4',
            id: 4,
          },
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    console.log('1', answerId)
  }

  render() {
    return (
      <div className="Quiz">

        <div className="QuizWrapper">
          <h1>Some text</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            quastion={this.state.quiz[0].quastion}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz