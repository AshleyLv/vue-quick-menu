<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <circle-menu :menu-count=4 :icon-class=icons :menu-url-list=list></circle-menu>
  </div>
</template>

<script>
import circleMenu from './circleMenu.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      icons:["fa fa-search","fa fa-etsy","fa fa-user-o","fa fa-automobile"],
      list:["http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/"]
      
    }
  },
  components:{
    circleMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
