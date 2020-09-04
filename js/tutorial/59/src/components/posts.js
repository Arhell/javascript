import {Component} from "../main/component";
import {api} from '../services/api'
import {Transform} from '../services/transform'

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
    const html = posts.map(post => renderPost(post))
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
  }

  onHide() {
    this.$el.innerText = ''
  }
}

function renderPost(post) {
  const tag = post.type === 'news'
    ? '<li class="tag tag-blue tag-rounded">News</li>'
    : '<li class="tag tag-rounded">None</li>'

  const button = (JSON.parse(localStorage.getItem('favorite')) || []).includes(post.id)
    ? `<button class="button-round button-small button-danger" data-id="${post.id}">Delete</button>`
    : `<button class="button-round button-small button-primary" data-id="${post.id}">Save</button>`

  return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${button}
      </div>
    </div>
  `
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