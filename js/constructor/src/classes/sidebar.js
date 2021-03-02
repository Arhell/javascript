export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector)

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
  }

  get template() {
    return '<h1>text</h1>'
  }
}