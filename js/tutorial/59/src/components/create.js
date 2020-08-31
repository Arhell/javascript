import {Component} from "../main/component";
import {Form} from '../main/form'
import {Validation} from "../main/validation";
import {api} from '../services/api'

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

async function submitHandler(event) {
  event.preventDefault()

  if(this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value()
    }

    await api.createPost(formData)

    this.form.clear()
    alert('Done')
  }

}