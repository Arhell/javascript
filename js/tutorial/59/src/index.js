import {Header} from './components/header'
import {Navigation} from './components/navigation'
import {Create} from './components/create'
import {Posts} from './components/posts'
import {Favorite} from './components/favorite'
import {Loader} from "./components/Loader";

new Header('header')

const navigation = new Navigation('navigation')
const loader = new Loader('loader')

const posts = new Posts('posts', {loader})
const create = new Create('create')
const favorite = new Favorite('favorite')

navigation.registerTabs([
  {name: 'create', component: create},
  {name: 'posts', component: posts},
  {name: 'favorite', component: favorite},
])

