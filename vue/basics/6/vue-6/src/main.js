import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'

Vue.filter('upperCase', (value) => value.toUpperCase())

Vue.component('app-list', List)

Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
