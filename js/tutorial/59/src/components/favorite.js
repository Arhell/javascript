import {Component} from "../main/component";
import {api} from '../services/api'
import {renderPost} from '../templates/post'

export class Favorite extends Component{
  constructor(id, options) {
    super(id);

    this.loader = options.loader
  }

  init() {
    this.$el.addEventListener('click', linkClickHandler.bind(this))
  }

  onShow() {
    const favorite = JSON.parse(localStorage.getItem('favorite'))
    const html = redderList(favorite)
    this.$el.insertAdjacentHTML('afterbegin', html)
  }

  onHide() {
    this.$el.innerHTML = ''
  }
}

async function linkClickHandler(event) {
  event.preventDefault()

  if(event.target.classList.contains('js-link')) {
    const postId = event.target.textContent
    this.$el.innerHTML = ''
    this.loader.show()
    const post = await api.fetchPostById(postId)
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {withButton:false}))
  }
}

function renderList(list = []) {
  if(list.length) {
    return `
      <ul>
        ${list.map(i => `<li><a href="#" class="js-link">${i}</a></li>`).join(' ')}
      </ul>
    `
  }

  return `<p class="center">Error</p>`
}
