import React, {Component} from "react";
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Auth</h1>

          <form onSubmit={this.submitHandler} className='AuthForm'>

            <Input
              label="Email"
            />

            <Input
              label="Password"
              errorMessage={'test'}
            />

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
