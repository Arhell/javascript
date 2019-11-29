import Vue from 'vue'
import App from './App.vue'
import colorDirective from './color'

Vue.directive('colored', colorDirective)

new Vue({
  el: '#app',
  render: h => h(App)
})
