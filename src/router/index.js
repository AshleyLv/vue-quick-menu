import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../doc/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    }
  ]
})
