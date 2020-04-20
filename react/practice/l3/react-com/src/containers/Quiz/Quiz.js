import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
  state = {
    activeQuestion: 0,
    quiz: [
      {
        rightAnswerId: 1,
        quastion: 'Some text',
        id: 1,
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
      },
      {
        rightAnswerId: 2,
        quastion: 'Some text',
        id: 2,
        answers: [
          {
            text: 'Some text 11',
            id: 1,
          },
          {
            text: 'Some text 22',
            id: 2,
          },
          {
            text: 'Some text 33',
            id: 3,
          },
          {
            text: 'Some text 44',
            id: 4,
          },
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    console.log('1', answerId)
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  render() {
    return (
      <div className="Quiz">

        <div className="QuizWrapper">
          <h1>Some text</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            quastion={this.state.quiz[this.state.activeQuestion].quastion}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuastion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz