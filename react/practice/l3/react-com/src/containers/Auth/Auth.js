import React, {Component} from "react";
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"

export default class Auth extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Add correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Add correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  onChangeHandler = (event, controlName) => {

  }

  renderInputs() {
    return  Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Auth</h1>

          <form onSubmit={this.submitHandler} className='AuthForm'>

            { this.renderInputs() }

            <Button
              type="success"
              onClisk={this.loginHandler}
            >
              Login
            </Button>
            <Button
              type="primary"
              onClisk={this.registerHandler}
            >
              Registration
            </Button>

          </form>
        </div>
      </div>
    )
  }
}
