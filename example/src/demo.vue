<template>
  <div>
    <section class="page-header">
      <h1 class="project-name">vue-quick-menu</h1>
      <h2 class="project-tagline"></h2>
      
        <a href="https://github.com/AshleyLv/vue-quick-menu" class="btn">View on GitHub</a>
      
      
    </section>
     <router-view></router-view>
    <section class="main-content">
      <h1 id="color-sticker">Description</h1>

      <p>This is web navigation component base on vue2.0+. It can be used in both PC and mobile.</p>

      <h1>Demo</h1>
   
      
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
           <select v-model="isOpenNewTab">
              <option>true</option>
              <option>false</option>
            </select>
          </td>
        </tr>

      </table>
     
     <h1>Install</h1>
     <pre><code>
$ npm install vue-quick-menu --save
     </code></pre>
     <h1>Usage</h1>
      <pre><code>
 &lt;quick-menu :menu-count=count :icon-class=icons :menu-url-list=list&gt;&lt;/quick-menu&gt;    
    </code></pre>
    <pre><code>
import Vue from 'vue'
import quickMenu from 'vue-quick-menu'

export default {
  ...
  components: {
    quickMenu
  },
  ...
}
    </code></pre>
   

     <h1>Props</h1>
     <table class="props">
     <thead>
       <tr>
         <th>Name</th>
         <th>Required</th>
         <th>Default</th>
         <th>Type</th>
         <th>Description</th>
       </tr>
     </thead>
       <tbody>
         <tr>
          <td>menuCount</td>
          <td>true</td>
          <td>4</td>
          <td>Number</td>
          <td>The number of menu item</td>
        </tr>
        <tr>
          <td>menuUrlList</td>
          <td>true</td>
          <td>-</td>
          <td>Array</td>
          <td>An array of link of each menu item</td>
        </tr>
        <tr>
          <td>iconClass</td>
          <td>true</td>
          <td>-</td>
          <td>Array</td>
          <td>An array of icon class of each menu item</td>
        </tr>
         <tr>
          <td>position</td>
          <td>false</td>
          <td>top-left</td>
          <td>top-left,top-right,bottom-left,bottom-right</td>
          <td>The position of quick menu</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td>false</td>
          <td>#009dc7</td>
          <td>String</td>
          <td>The background color of quick menu</td>
        </tr>
        <tr>
          <td>color</td>
          <td>false</td>
          <td>#ffffff</td>
          <td>String</td>
          <td>The color of quick menu icon</td>
        </tr>
        <tr>
          <td>isOpenNewTab</td>
          <td>false</td>
          <td>false</td>
          <td>Boolean</td>
          <td>If the menu will open a new tab after click</td>
        </tr>
        
      </tbody>

     </table>
        

    </section>
    <quick-menu :menu-count=getCount :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=getIsOpenNewTab @process=print></quick-menu>

  </div>
</template>

<script>
import Vue from 'vue'
import quickMenu from '../../src/quickMenu.vue'
export default {
  name: 'demo',
  data () {
    return {
      count:4,
      icons:["fa fa-github","fa fa-comment","fa fa-code","fa fa-envelope"],
      list:[{'isLink':false},{'isLink':true,url:"/doo"},{'isLink':true,url:"/foo"},{'isLink':false}],
      backgroundColor:'#17c4c5',
      color:'#ffffff',
      position:'top-left',
      isOpenNewTab:false
      
    }
  },
  components:{
  'quickMenu':quickMenu
},
  computed:{
    getCount(){
      return Number(this.count)
    },
    getIsOpenNewTab(){
      return Boolean(this.isOpenNewTab)
    }
  },
  methods:{
      print(key){
      if(key===3){
        console.log('please send me an email')
      }
      if(key===0){
          window.open('https://github.com/AshleyLv/vue-quick-menu')
        
        }
      }
  }
}
</script>

<style type="text/css">
  @import './style/demo.css'

</style>
