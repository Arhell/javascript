import {Component} from '../main/component'

export class Header extends Component{
  constructor(id) {
    super(id);
  }

  init() {
    const btn = this.$el.querySelector('.js-header')
    btn.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler() {
  this.hide()
}