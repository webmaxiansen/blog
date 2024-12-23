---
title: js中判断是否对象的方法
abbrlink: 16407
date: 2022-05-17 09:20:49
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm/dm7.jpg
---

# 目前据我所知的方法共有三种
## 1. typeof

```javascript
let obj ={a:1,b=2,c:3}
console.log(typeof(obj)) //返回'object'
```
从判断结果上来看，似乎并没有太大的问题，但如果你把对象改为数组，他返回的也会是同样的结果，因此不推荐这种写法,
对于数组、函数、对象来说，其关系错综复杂，使用 typeof 都会统一返回 “object” 字符串,
null也会返回’object’
对NaN返回是’number’
感兴趣的小伙伴可以自己动手实现一下
## 2. instanceof Object
```javascript
let obj ={a:1,b=2,c:3}
let arr =[1,2,3]
console.log(obj instanceof Object) //返回'true'
console.log(arr instanceof Array) //返回'true'
```
这种方法返回的是boolean类型，基本可以实现我们想要的结果,不仅这样，它还可以判断是否为数组，讲到这里，还有种判断数组的方法，我也想分享给大家
Array.isArray(arr)  返回类型也是boolean类型
## 3. Object.prototype.toString.call()
```javascript
let obj ={a:1,b=2,c:3}
let arr =[1,2,3]
console.log(Object.prototype.toString.call(arr)) //返回'[object Array]'
console.log(Object.prototype.toString.call(obj)) //返回'[object Object]'
```
这种方法可以更为严格的判断对象是什么类型，我更比较喜欢这一种，当然，如果你还有其他的方法，欢迎在评论区指出哦