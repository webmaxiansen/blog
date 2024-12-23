---
title: js中判断是否对象的方法
abbrlink: 16727
date: 2022-10-17 14:44:26
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm4.webp
---

## vuex的五大辅助函数使用技巧

vuex时vue的一个全局状态管理文件，又称全局数据共享，在这里定义的数据，我们在任何文件中都可以访问的到，为我们的项目带来极大的好处，以下是我定义在全局状态文件数据，所有示例均已这个为基础访问

```js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:{
      numbervalue:5,
      action_data:''
    }
  },
  getters:{
    dbclick(state){
      console.log(state,"state")
      return state.data.numbervalue*2
    },
  },
  mutations: {
    // 接收两个参数 一个参数为state , 另一个为载荷 且大部分为对象 因为对象可以传任何数据
    montify(state,payload){
      state.data.numbervalue=payload.val
      console.log("载荷",payload)
    },
    action(state,payload){
      console.log("打印",state)
      state.data.action_data=payload
    }
  },
// Action 类似于 mutation，不同在于：
// - Action 提交的是 mutation，而不是直接变更状态。
// - Action 可以包含任意异步操作
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用，实践中，我们会经常用到 ES2015 的[参数解构](https://github.com/lukehoban/es6features#destructuring)来简化代码
  actions: {
    prodect({commit},payload){
      // let url = 'https://api.apiopen.top/getWangYiNews' 
      console.log("payload",payload)
      let url ='http://httpbin.org/get'
      return new Promise((resolve,reject)=>{
        axios.get(url).then((res)=>{
          resolve(res.data)
          console.log(res)
          commit('action',res.data)
        }).catch((err)=>{
          console.log("报错")
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
```

```js
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
```

1.mapState

`mapState` 函数返回的是一个对象。通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 `computed` 属性。自从有了[对象展开运算符](https://github.com/tc39/proposal-object-rest-spread)，我们可以极大地简化写法：

```js
 computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState(['data']),
    },
```

这样一来，我们便可以轻松的访问state中的数据 ：例如我们可以这样

```html
 <div>
      <h2>{{data.numbervalue}}</h2>
  </div>
```

但在以前我们通常是这样访问的

```html
<div>
      <h2>{{$store.state.data.numbervalue}}</h2>
  </div>
```

一个两个还好，看不出什么问题，但如果属性或者数据过多时，我们还要一边一边的写重复的代码，降低工作效率，但辅助函数的出现，大大的节约了我们的开发效率

2.mapGetters

`mapGetters` 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性，因此你可以这样来使用他

```js
 computed: {
      ...mapGetters(['dbclick'])
    },
```

是不是很简单，我们再来看看以往的写法,它需要我们自己手动添加计算属性

```js
computed: {
  donedbclick () {
    return this.$store.getters.dbclick
  }
}
```

```html
<h2>
    {{dbclick}}  或者  {{donedbclick}}
</h2>
```

3.mapMutations

使用 `mapMutations` 辅助函数将组件中的 methods 映射为 `store.commit`，其原理就是将this.montify 映射为this.$store.commit('montify')

```js
 methods: {
      ...mapMutations(['montify']),
    },
```

也可以这样写

```js
methods:{
    example(){
    	this.$store.commit('montify',payload)
	}
}
```

```html
<h2 @click="montify(payload)">
    点击触发
</h2>
或者
<h2 @click="example">
    点击触发
</h2>
```

4.mapActions

在组件中使用 `this.$store.dispatch('prodect')` 分发 action，或者使用 `mapActions` 辅助函数将组件的 methods 映射为 `store.dispatch` 调用

```js
methods: {
      ...mapActions(['prodect']),
      request(){
        this.prodect({name:'张三'}).then((result) => {
            //请求发送成功后的回调数据
          console.log("result",result)
        }).catch((err) => {
          
        })
      }
      request2(){
        this.$store.dispatch('prodect',{name:'张三'}).then((res)=>{
          console.log("res",res)
        })
      }
    //以上方法都是可以的，看自己的喜好
    },
```

```html
<h2 @click="prodect(payload)">
    发送请求
</h2>
或者
<h2 @click="request">
    发送请求
</h2>
又或者
<h2 @click="request2">
    发送请求
</h2>
```
