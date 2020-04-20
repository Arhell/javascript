import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
  state = {
    activeQuestion: 0,
    answerState: null,
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
    const quastion = this.state.quiz[this.state.activeQuestion]

    if(quastion.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished) {
          console.log('text')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else  {
      this.setState({
        answerId: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
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
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz