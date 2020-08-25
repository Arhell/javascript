import {Component} from "../main/component";
import {Form} from '../main/form'

export class Create extends Component{
  constructor(id) {
    super(id);
  }

  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))

    this.form = new Form(this.$el, {
      title: [],
      fulltext: []
    })
  }
}

function submitHandler(event) {
  event.preventDefault()

  const formData = {
    type: this.$el.type.value,
    ...this.form.value()
  }
}