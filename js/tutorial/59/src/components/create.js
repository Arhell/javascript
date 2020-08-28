import {Component} from "../main/component";
import {Form} from '../main/form'
import {Validation} from "../main/validation";

export class Create extends Component{
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))

    this.form = new Form(this.$el, {
      title: [Validation.required],
      fulltext: [Validation.required, Validation.minLength(10)]
    })
  }
}

function submitHandler(event) {
  event.preventDefault()

  if(this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      ...this.form.value()
    }

    this.form.clear()

  } else {
    console.warn('invalid')
  }

}