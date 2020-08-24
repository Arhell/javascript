import {Header} from './components/header'
import {Navigation} from './components/navigation'
import {Create} from './components/create'
import {Posts} from './components/posts'
import {Favorite} from './components/favorite'

new Header('header')

const navigation = new Navigation('navigation')

const posts = new Posts('posts')
const create = new Create('create')
const favorite = new Favorite('favorite')

navigation.registerTabs([
  {name: 'create', component: create},
  {name: 'posts', component: posts},
  {name: 'favorite', component: favorite},
])

