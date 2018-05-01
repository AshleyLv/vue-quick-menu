import Vue from 'vue';
import VueRouter from 'vue-router'
import Demo from './demo.vue'
import doo from './components/doo.vue'
import foo from './components/foo.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/foo', component: foo },
  { path: '/doo', component: doo }
]
const router = new VueRouter({
  routes
})
new Vue({
    el: '#demo',
    router,
    render: h => h(Demo)
});
