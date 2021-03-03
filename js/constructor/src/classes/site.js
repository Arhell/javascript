export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innerHTML = ''
    model.forEach(block => {
      site.insertAdjacentHTML('beforeend', block.toHtml())
    })
  }
}