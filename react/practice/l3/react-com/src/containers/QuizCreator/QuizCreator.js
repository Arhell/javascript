import React, {Component} from "react";
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import {createControl} from '../../form/formFramework'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function createOptionControl(number) {
  return createControl({
    label: `v ${number}`,
    errorMessage: 'no question',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'add question',
      errorMessage: 'no question'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    formControls: createFormControls()
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (value, controlName) => {

  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr /> : null}
        </Auxiliary>
      )
    })
  }

  render() {
    return (
      <div className="QuizCreator">
        <div>
          <h1>Create test</h1>

          <form onSubmit={this.submitHandler}>

            { this.renderControls() }

            <select></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Add question
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Add test
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
