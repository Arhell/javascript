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
  }
}