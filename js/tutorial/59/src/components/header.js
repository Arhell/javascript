import {Component} from '../main/component'

export class Header extends Component{
  constructor(id) {
    super(id);
  }

  init() {
    if(localStorage.getItem('visited')) {
      this.hide()
    }
    const btn = this.$el.querySelector('.js-header')
    btn.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler() {
  localStorage.setItem('visited', JSON.stringify(true))
  this.hide()
}