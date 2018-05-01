<template>
	<div class="quick-menu" ref="quickMenu" :style="quickMenuStyle">
    <div v-for="(n,key) in menuCount" class="sub-menu" :style="getSubMenu(n-1)">
        <router-link v-if="menuUrlList[n-1].isLink" :to="menuUrlList[n-1].url" :target="openNewTab" :style="subMenuStyle" @mouseover.stop="mouseEnterSubMenu" @mouseout.stop="mouseOutSubMenu">
          <i :class="iconClass[n-1]" ref="icon"></i>
        </router-link>
        <a v-else :style="subMenuStyle" @mouseover.stop="mouseEnterSubMenu" @mouseout.stop="mouseOutSubMenu" @click="processCallback(key)">
          <i :class="iconClass[n-1]" ref="icon"></i>
        </a>

      </div>

      <div class='menu' :style="menuStyle">
        <div class='core-menu' @click="toggleMenu">
          <div class='bar'></div>
        </div>
      </div>
    </div>
</template>
<script>
	export default{
name:'quickMenu',
  props:{
    menuCount:{
      type: Number,
      required: true,
      default:4
    },
    iconClass:{
      type:Array,
      required: true
    },
    menuUrlList:{
      type:Array,
      required: true
    },
    backgroundColor:{
      type:String,
      default:'#20babb'
    },
    color:{
      type:String,
      default:'#fff'
    },
    isOpenNewTab:{
      type:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'top-left'
    }
  },
  computed:{
    openNewTab(){
      return this.isOpenNewTab?'_blank':'_self'
    },
    quickMenuStyle(){
      const topPosition = {top:'30px'}, 
      bottomPosition={bottom:'30px'},
      leftPosition = {left:'30px'},
      rightPosition = {right:'30px'}

      let style = this.isTop?topPosition:bottomPosition
      Object.assign(style, this.isLeft?leftPosition:rightPosition)
      Object.assign(style,{transform: this.isLeft?"rotate(-180deg)":"rotate(180deg)"})
      return style
    },
    menuStyle(){
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      }
    },
    subMenuStyle(){
      const style = {
        backgroundColor: this.backgroundColor,
        color: this.color
      }
      return style
    },
   
    isTop(){
      return !!~this.position.toLowerCase().indexOf('top')
    },
    isLeft(){
      return !!~this.position.toLowerCase().indexOf('left')
    }
  },
  data(){
    return{
      menuSize:60,
      subMenu4:[[["0","-160"],["-80","-138.6"],["-138.6","-80"],["-160","0"]],[["0","-160"],["80", "-138.6"],["138.6","-80"],["160","0"]],[["0","160"],["138.6","80"],["80","138.6"],["160","0"]],[["-160","0"],["-138.6","80"],["-80","138.6"],["0","160"]]],
      subMenu3:[[["-160","0"],["-113","-113"],["0","-160"]],[["0","-160"],["113","-113"],["160","0"]],[["0","160"],["113","113"],["160","0"]],[["-160","0"],["-113","113"],["0","160"]]],
      subMenu2:[[["-160","0"],["0","-160"]],[["0","-160"],["160","0"]],[["0","160"],["160","0"]],[["-160","0"],["0","160"]]]
    }
  },
  methods:{
    getSubMenu(n){
      let menuPosition = this.menuCount===4?this.subMenu4:this.menuCount===3?this.subMenu3:this.subMenu2
      menuPosition = this.isTop&&this.isLeft?menuPosition[2]:this.isTop&&!this.isLeft?menuPosition[1]:!this.isTop&&this.isLeft?menuPosition[3]:menuPosition[0]
      return {top:menuPosition[n][0]+'px',left:menuPosition[n][1]+'px'}
    },
    toggleMenu(e){
      let menuEl = this.$refs.quickMenu
      let menuIconEl = this.$refs.icon
      if(!~menuEl.className.indexOf(' active')){
         menuEl.className += ' active';
        menuIconEl.forEach( function(element, index) {
          element.className += ' menu-animate';
        });
      } else {
        menuEl.className = menuEl.className.replace(' active','')
        menuIconEl.forEach( function(element, index) {
        element.className = element.className.replace(' menu-animate','')
        });
      }
      
    },
    processCallback(key){
      console.log(key)
      this.$emit('process',key)
    },
    mouseEnterSubMenu(e){
      if(e.target.tagName==='A'){
        e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
        // e.target.firstElementChild.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
      } else if(e.target.tagName==='I'){
        e.target.parentElement.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
        // e.target.style.backgroundColor = this.lightenColor(this.backgroundColor, 20)
      }
      
    },
    mouseOutSubMenu(e){
      if(e.target.tagName==='A'){
        e.target.style.backgroundColor = this.backgroundColor
        // e.target.firstElementChild.style.backgroundColor = this.backgroundColor
      }else if(e.target.tagName==='I'){
        e.target.parentElement.style.backgroundColor = this.backgroundColor
        // e.target.style.backgroundColor = this.backgroundColor
      }
      
    },
    lightenColor (hex, amt) {

      var usePound = false

      if (hex[0] === '#') {
        hex = hex.slice(1)
        usePound = true
      }

      var num = parseInt(hex, 16)
      var r = (num >> 16) + amt

      if (r > 255) r = 255
      else if (r < 0) r = 0

          var b = ((num >> 8) & 0x00FF) + amt

      if (b > 255) b = 255
      else if (b < 0) b = 0

      var g = (num & 0x0000FF) + amt

      if (g > 255) g = 255
      else if (g < 0) g = 0
      return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
    }
  }
	}
</script>
<style lang="less">
.menu-animate {
  -webkit-animation: bounce 1s linear 1s;
  -moz-animation: bounce 1s linear 1s;
  animation: bounce 1s linear 1s;
}

.quick-menu {
  color: #fff;
  position: fixed;
  width: 60px;
  height: 60px;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
  right: 30px;
  > .menu {
    display: block;
    position: absolute;
    border-radius: 50% !important;
    width: 60px;
    height: 60px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #fff;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    .core-menu {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 60px;
      height: 60px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      .bar {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        width: 28px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 35%;
        margin-top: -1.5px;
        left: 16px;
        -webkit-transform-origin: 0% 50%;
        -moz-transform-origin: 0% 50%;
        -ms-transform-origin: 0% 50%;
        -o-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        &:before ,&:after{
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          transition: all 1s ease;
          content: '';
          width: 28px;
          height: 3px;
          background: #fff;
          position: absolute;
          left: 0px;
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }
        &:before{
          margin-top: 30%;
        }
        &:after {
          margin-top: 60%;
        }
      }
    }
  }
  .sub-menu{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 60px;
    font-size: 30px;
    text-align: center;
    border-radius: 50% !important;
    a{
      outline: none;
      text-decoration: none;
      display: inline-block;
      border-radius: 50% !important;
      width: 100%;
      height: 100%;
      i {
        outline: none;
        font-size:30px;
        margin-top:12px;
        background:transparent;
        &:before{
          vertical-align: middle;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  &.active{
    -webkit-transform: rotate(0deg)!important;
      -moz-transform: rotate(0deg)!important;
      -ms-transform: rotate(0deg)!important;
      -o-transform: rotate(0deg)!important;
      transform: rotate(0deg)!important;
      .menu{
        -webkit-transform: scale(0.7);
        -moz-transform: scale(0.7);
        -ms-transform: scale(0.7);
        -o-transform: scale(0.7);
        transform: scale(0.7);
        .bar {
          top: 50%;
          margin-top: -1.5px;
          left: 50%;
          margin-left: -12px;
          -webkit-transform-origin: 50% 50%;
          -moz-transform-origin: 50% 50%;
          -ms-transform-origin: 50% 50%;
          -o-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          -webkit-transform: rotate(405deg);
          -moz-transform: rotate(405deg);
          -ms-transform: rotate(405deg);
          -o-transform: rotate(405deg);
          transform: rotate(405deg);
              &:before {
                -webkit-transform-origin: 50% 50%;
                -moz-transform-origin: 50% 50%;
                -ms-transform-origin: 50% 50%;
                -o-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
                -webkit-transform: rotate(-450deg);
                -moz-transform: rotate(-450deg);
                -ms-transform: rotate(-450deg);
                -o-transform: rotate(-450deg);
                transform: rotate(-450deg);
                margin-top: 0px;
              }
          &:after{
            opacity: 0;
          }
        }
      }
    }
}
@-webkit-keyframes bounce {
  0%,100% {
    -webkit-transform: translateY(0px);
  }
  10% {
    -webkit-transform: translateY(6px);
  }
  30% {
    -webkit-transform: translateY(-4px);
  }
  70% {
    -webkit-transform: translateY(3px);
  }
  90% {
    -webkit-transform: translateY(-2px);
  }
}
@-moz-keyframes bounce {
  0%,100% {
    -moz-transform: translateY(0px);
  }
  10% {
    -moz-transform: translateY(6px);
  }
  30% {
    -moz-transform: translateY(-4px);
  }
  70% {
    -moz-transform: translateY(3px);
  }
  90% {
    -moz-transform: translateY(-2px);
  }
}
@keyframes bounce {
  0%,100% {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
  }
  10% {
    -webkit-transform: translateY(6px);
    -moz-transform: translateY(6px);
    -ms-transform: translateY(6px);
    -o-transform: translateY(6px);
    transform: translateY(6px);
  }
  30% {
    -webkit-transform: translateY(-4px);
    -moz-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    -o-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  70% {
    -webkit-transform: translateY(3px);
    -moz-transform: translateY(3px);
    -ms-transform: translateY(3px);
    -o-transform: translateY(3px);
    transform: translateY(3px);
  }
  90% {
    -webkit-transform: translateY(-2px);
    -moz-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    -o-transform: translateY(-2px);
    transform: translateY(-2px);
  }
}
</style>