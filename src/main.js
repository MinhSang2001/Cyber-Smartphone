import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import './css/main.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
