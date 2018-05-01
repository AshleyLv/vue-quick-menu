# vue-quick-menu [![NPM version](https://img.shields.io/npm/v/vue-quick-menu.svg)](https://www.npmjs.com/package/vue-quick-menu)

> This is web navigation component base on vue2.0+. It can be used in both PC and mobile.
[demo](https://ashleylv.github.io/vue-quick-menu/index.html)

## Installation

``` bash
 npm install vue-quick-menu --save
```

## Usage
``` xml
<quick-menu :menu-count=count :icon-class=icons :menu-url-list=list></quick-menu>
```

``` javascript
import Vue from 'vue'
import quickMenu from 'vue-quick-menu'

export default {
  ...
  components: {
    quickMenu
  },
  ...
}
```
## Props

Property|Type|Default|Description
---|---|---|---
menuCount|Number|4|The number of menu item，option(2,3,4)
menuUrlList|Array|-|An array of Object of link of each menu item, like {`isLink`:true,`url`:`\foo`}
iconClass|Array|-|An array of icon class of each menu item
position|top-left,top-right,bottom-left or bottom-right|top-left|The position of quick menu
backgroundColor|String|#009dc7|The background color of quick menu
color|String|#ffffff|The color of quick menu icon
isOpenNewTab|Boolean|false|If the menu will open a new tab after click


## Event

### process
Emitted when click a submenu which is not a link, the param is the index of the submenu.
