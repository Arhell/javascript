class RootElement {
  constructor(tagName = 'div') {
    this.$el = document.createElement(tagName)
    this.$el.style.marginBlockStart = '20px'
  }

  hide() {
    this.$el.style.opacity = '0'
  }

  show() {
    this.$el.style.opacity = '1'
  }

  append() {
    document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
  }
}

class Box extends RootElement{
  constructor(color, size = 150, tagName) {
    super(tagName)
    this.color = color
    this.size = size
  }

  create() {
    this.$el.style.background = this.color
    this.$el.style.width = this.$el.style.height = `${this.size}px`

    this.append()

    return this
  }
}

class Circle extends RootElement{
  constructor(color) {
    super()
    this.color = color
  }

  create() {
    this.$el.style.borderRadius = '50%'
    this.$el.style.width = this.$el.style.height = `120px`
    this.$el.style.background = this.color
    this.append()

    return this
  }
}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue').create()

const circle = new Circle('green').create()

circle.$el.addEventListener('mouseenter', () => {
  circle.hide()
})

circle.$el.addEventListener('mouseleave', () => {
  circle.show()
})