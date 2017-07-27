<template>
  <div>
    <section class="page-header">
      <h1 class="project-name">vue-quick-menu</h1>
      <h2 class="project-tagline"></h2>
      
        <a href="https://github.com/AshleyLv/color-sticker" class="btn">View on GitHub</a>
      
      
    </section>
    <section class="main-content">
      <h1 id="color-sticker">Description</h1>

      <p>This is a jQuery plugin, which allows you to adding stickers on your webpage.</p>

      <h1 id="color-sticker">Demo</h1>
   
      
      <table>
      <tr>
          <td>Count</td>
          <td>
            <select v-model="count">
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Postion</td>
          <td>
            <select v-model="position">
              <option>top-left</option>
              <option>top-right</option>
              <option>bottom-left</option>
              <option>bottom-right</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Url List</td>
          <td>
            <textarea type="text" v-model="list"></textarea>
          </td>
        </tr>
        <tr>
          <td>Icon Class</td>
          <td>
            <textarea type="text" v-model="icons"></textarea>
          </td>
        </tr>
        <tr>
          <td>Background Color</td>
          <td>
           <input type="color" v-model="backgroundColor">
          </td>
        </tr>
        <tr>
          <td>Color</td>
          <td>
           <input type="color" v-model="color">
          </td>
        </tr>
         <tr>
          <td>Will open a new Tab</td>
          <td>
           
          </td>
        </tr>

      </table>
     
        

    </section>
    <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=isOpenNewTab></quick-menu>

  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import quickMenu from './quickMenu.vue'
export default {
  name: 'demo',
  data () {
    return {
      count:4,
      icons:["fa fa-search","fa fa-etsy","fa fa-user-o","fa fa-automobile"],
      list:["http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/"],
      backgroundColor:'#ffc3c5',
      color:'#ffffff',
      position:'top-left',
      isOpenNewTab:false
      
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
