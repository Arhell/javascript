import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
