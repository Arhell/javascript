export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    model.forEach(block => {
      site.insertAdjacentHTML('beforeend', block.toHtml())
    })
  }
}