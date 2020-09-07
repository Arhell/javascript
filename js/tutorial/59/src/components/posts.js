import {Component} from "../main/component";
import {api} from '../services/api'
import {Transform} from '../services/transform'
import {renderPost} from '../templates/post'

export class Posts extends Component{
  constructor(id, {loader}) {
    super(id);
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }

  async onShow() {
    this.loader.show()
    const fbData = await api.fetchPosts()
    const posts = Transform.fbObjectToArray(fbData)
    const html = posts.map(post => renderPost(post, {withButton: true}))
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
  }

  onHide() {
    this.$el.innerText = ''
  }
}



function buttonHandler(event) {
  const $el = event.target
  const id = $el.dataset.id

  if(id) {
    let favorite = JSON.parse(localStorage.getItem('favorite')) || []

    if(favorite.includes(id)) {
      $el.textContent = 'Save'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
      favorite = favorite.filter(fId => fId !== id)
    } else {
      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
      $el.textContent = 'Delete'
      favorite.push(id)
    }

    localStorage.setItem('favorite', JSON.stringify(favorite))
  }
}