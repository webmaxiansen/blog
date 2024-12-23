---
title: vue点击导航 页面自动滚动到特定位置
abbrlink: 47619
date: 2022-02-10 23:27:30
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm/dm10.jpg
---

## vue点击导航 页面自动滚动到特定位置
效果预览：
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/a1b7e74e77e2c58ba664cc7a9b4fcdaa.gif#pic_center)


```js
1.npm i element-ui -S
```

下载安装element组件库，导航我们使用element组件库中的样式，type="primary"刚好作为我们导航激活后的样式，省去了我们写样式的时间

```js
2.到 main.js 文件中全局引入element组件
```

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```



```js
3.代码实现：
```



```vue
<!-- 为每一个按钮 添加点击事件 用来作为按钮的切换 我们将所有的按钮导航装到
    一个div中，给这个div添加点击事件就可以了(不知道为什么的小伙伴可以去看一下事件冒泡)
    由于进入页面要有默认激活项,我们将data属性中的active赋值为1,就可以了，每次点击，只需要通过
    访问dataset中的属性动态的赋值给active就可以实现切换啦
    -->
     <div @click="dbclick">
        <el-button   :type="active=='1'?'primary':''" data-index="1">新建</el-button>
        <el-button   :type="active=='2'?'primary':''" data-index="2">销毁</el-button>
        <el-button   :type="active=='3'?'primary':''" data-index="3">转办</el-button>
        <el-button   :type="active=='4'?'primary':''" data-index="4">发送</el-button>
     </div>
<script>
    export default{
         data() {
      		return {    
        		active: "1"
     		}
   	 	},
    }
	
</script>
```

```vue
 <!-- 接下来我们定义内容展示部分,用一个大的盒子将其包裹,然后给与每一个子div不同的id,到后期我们会
     使用到,本人比较懒散，内容呢直接在这里循环了50次，以此来撑开盒子高度 -->
     <div class="height">
       <div id="newview" ref="newview">
          <span v-for="(item,index) in 50" :key="index" style="background:whitesmoke;">这是新建内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="distory">
          <span v-for="(item,index) in 50" :key="index" style="background:yellowgreen;">这是销毁内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="turn">
          <span v-for="(item,index) in 50" :key="index" style="background:pink;">这是转办内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="contantsend">
          <span v-for="(item,index) in 50" :key="index" style="background:yellow;">这是发送内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     </div>
<script>
  export default {
    methods: {
        
      dbclick(e) {
        this.active=e.target.dataset.index
           // scrollIntoView 方法为滚动到指定元素位置 所以为了得到滚动元素的位置 
        	// 为每一个元素添加了id 当然初了id还可以使用ref为元素绑定值，通过this.$refs获取 
       		 // 看您的喜好,想用那种都行
        if(e.target.dataset.index==1){
         // document.getElementById("newview").scrollIntoView({
           //  block: 'start',
           //  behavior: 'smooth'
          //})
            this.$refs.newview.scrollIntoView({
             block: 'start',
             behavior: 'smooth'// 代表平滑滚动
          })
        }
         if(e.target.dataset.index==2){
          document.getElementById("distory").scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
         if(e.target.dataset.index==3){
          document.getElementById("turn").scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
         if(e.target.dataset.index==4){
          document.getElementById("contantsend").scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
        console.log("触发事件",e.target.dataset.index);
      }
    }
  }
</script>
```

```js
5.整体代码
```

```vue
<template>
  <div>
     <div @click="dbclick">
        <el-button   :type="active=='1'?'primary':''" data-index="1">新建</el-button>
        <el-button   :type="active=='2'?'primary':''" data-index="2">销毁</el-button>
        <el-button   :type="active=='3'?'primary':''" data-index="3">转办</el-button>
        <el-button   :type="active=='4'?'primary':''" data-index="4">发送</el-button>
     </div>
     <div class="height">
       <div id="newview" ref="newview">
          <span v-for="(item,index) in 50" :key="index" style="background:whitesmoke;">这是新建内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="distory">
          <span v-for="(item,index) in 50" :key="index" style="background:yellowgreen;">这是销毁内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="turn">
          <span v-for="(item,index) in 50" :key="index" style="background:pink;">这是转办内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="contantsend">
          <span v-for="(item,index) in 50" :key="index" style="background:yellow;">这是发送内容</span>
       </div>
       <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {    
        active: "1"
      }
    },
    methods: {
      dbclick(e) {
        this.active=e.target.dataset.index 
        if(e.target.dataset.index==1){   
           this.$refs.newview.scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
         if(e.target.dataset.index==2){
          document.getElementById("distory").scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
         if(e.target.dataset.index==3){
          document.getElementById("turn").scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
         if(e.target.dataset.index==4){
          document.getElementById("contantsend").scrollIntoView({
             block: 'start',
             behavior: 'smooth'
          })
        }
        console.log("触发事件",e.target.dataset.index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .height{
    width: 30%;
    height:500px;
    margin: auto;
    background-color: bisque;
    word-break: break-all;
    overflow-y: scroll;
    // 垂直方向滚动条
  }

</style>
```

##### 周周学习小技巧,一次不学就费料!