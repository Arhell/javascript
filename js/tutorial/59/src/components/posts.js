import {Component} from "../main/component";
import {api} from '../services/api'
import {Transform} from '../services/transform'

export class Posts extends Component{
  constructor(id) {
    super(id);
  }

  async onShow() {
    const fbData = await api.fetchPosts()
    const posts = Transform.fbObjectToArray(fbData)
    const html = posts.map(post => renderPost(post))

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

  const button = '<button class="button-round button-small button-primary">Save</button>'

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