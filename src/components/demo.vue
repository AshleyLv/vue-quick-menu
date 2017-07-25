<template>
  <div>
    <section class="page-header">
      <h1 class="project-name">vue-quick-menu</h1>
      <h2 class="project-tagline"></h2>
      
        <a href="https://github.com/AshleyLv/color-sticker" class="btn">View on GitHub</a>
      
      
    </section>

    <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :background-color=color></quick-menu>
  </div>
</template>

<script>
import quickMenu from './quickMenu.vue'
export default {
  name: 'demo',
  data () {
    return {
      count:4,
      msg: 'Welcome to Your Vue.js App',
      icons:["fa fa-search","fa fa-etsy","fa fa-user-o","fa fa-automobile"],
      list:["http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/"],
      color:'#ffc3c5'
      
    }
  },
  components:{
    quickMenu
  }
}
</script>

<style type="text/css">
  @import '../assets/demo.css'

</style>
