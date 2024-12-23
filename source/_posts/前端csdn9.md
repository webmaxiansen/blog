---
title: vue页面刷新
abbrlink: 33942
date: 2022-03-24 18:19:04
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm/dm9.jpg
---

# vue页面刷新

### 首先我们都知道vue属于单页面应用，默认境况下是不会触发刷新页面操作的，所以这个时候就需要我们通过事件来触发reload()来达到刷新操作

### 接下来我就为大家介绍三种刷新页面的方法

## 1.

```js
wiindow.location.reload([bForceGet])
```

###### 该方法强迫浏览器刷新当前页面

bForceGet 可选参数，默认为false,从客户端缓存里取当前

true,则以get方式，从服务器端获取最新的页面，相当于页面f5刷新

```js
wiindow.location.replace(URL)
```

该URL参数未你所要跳转的地址，如果想实现当前页面刷新，你可以这样做

```js
wiindow.location.replace(location.href)
```

## 2.

```js
this.$router.go(0)
```

经常使用vue的小伙伴看到这个应该很熟悉吧，我们经常用它来实现前进后退，但别忘了它还可以实现自身页面刷新

## 3.

## 对于以上两种方法，虽然都可以实现页面刷新，但页面会刷的白一下，给用户的体验非常不好



## 3.

利用provide/inject组合方式是我目前觉得最好用的方法，下面我们就来详细介绍其用法

首先在我们的app.vue页面中设置

```vue
<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>    
  </div>
</template>

<script>

export default {
  provide(){
    return{
      reload:this.reload //提供数据
    }
  },
  data() {
    return {
      isRouterAlive:true,
    }
  },
  methods: {
    reload(){
      this.isRouterAlive=false
      this.$nextTick(()=>{
        this.isRouterAlive=true
        console.log("确实刷新了")
      })
    }
  },
};

</script>

```

这里我来说明一下，我们的主体思路，我想可以通过视图的显隐来达到我们想要的刷新，所以我们就在这里声明了一个方法，先让视图消失随后又出现，这种方法有什么好处呢，你可以刷新局部页面，也可以刷新全部页面，这完全由你自己来控制

接下来，找到我们想要刷新的页面

```vue
<template>
  <div>
      <el-button @click="click_close">刷新</el-button>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
      methods: {
       click_close(){       
        this.reload()
      }
      
    },
    mounted () {
       
    },
  }
</script>

```

如果我们这样来写的话确实通过点击按钮可以触发刷新操作 
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/b5a0a98f5c76da97b7c06c5782568e95.png)

可以看到，当我们点击刷新的时候我们的页面就会触发一次事件，刷新一次，可这并不是我们想要的，我们想要的是当一进入页面，就要触发一次刷新，那干脆我们执行这个事件的函数放在mounted里面好了，话不多说直接开始

```vue
<template>
  <div>
      <el-button @click="click_close">刷新</el-button>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
      methods: {
       click_close(){             
      }
      
    },
    mounted () {
       this.reload()
    },
  }
</script>
```

如果你这么写，你打开页面后你会惊奇的发现，刷新次数无限飙升，还没有两秒，刷新次数已经达到了上万次，你试的想一下，如果你有后台，不断地刷新，向后台发送请求，就这每秒请求的频率，不把你服务器搞崩才怪，那为什么会陷入死循环呢，很简单，你刚加载页面的时候他触发一次刷新，刷新之后是不是又会重新加载一下页面呢，然后再触发，在加载...无穷无尽 那就没有办法解决嘛，有，既然我们找到了原因，那解决的办法也是有的
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/cf1829401de928257777c4d2a7e54603.png)

解决思路：通过判断来处理第一次刷新后，后续将不再执行，也就是我们第一次执行的时候为true，其余的全为false

在vue-router里找到我们当前页的路由信息，加入meta元标签

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/table',
      // name: 'routeName',
      component: () => import('../views/Table.vue'),
      meta:{
        reload:''
      }
    },
   
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

```

然后在我们需要刷新的页面这样来写

```vue
<template>
  <div>
      <el-button @click="click_close">刷新</el-button>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
      methods: {
       click_close(){    
         if(this.$route.meta.reload.indexOf('one')==-1){
          this.$route.meta.reload='one'
          this.reload()
      }      
      }     
    },
    mounted () {
       this.click_close()
    }
  }
</script>
```
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/dba7daa5abbbb9bea11e745e805c7df9.png)

ok 这样我们就完美解决了当已进入该页面就会默认刷新一次的需求
