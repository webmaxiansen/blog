---
title: css3 3d动画
abbrlink: 33558
date: 2022-10-29 21:03:34
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm5.webp
---

## css3  3d动画

在学习3d动画之前，我们要先了解一个概念，就是我们在网页上的所展示的内容，他是一个2d的平面，要想在2d空间内展示出3d的效果，仅凭x轴和y轴是无法做到的，因此我们需要在添加一个轴的方向，z轴，这条轴你可以看作是屏幕正对着我们的视线。

[transform-style](https://www.runoob.com/cssref/css3-pr-transform-style.html) 和 [perspective](https://www.runoob.com/cssref/css3-pr-perspective.html)这两个属性对与3d来说非常重要，他们都是需要添加在附件盒元素上面的，但他们又不能同时加在同一父级元素上面 详细具体区别请参考 👉 [详情](https://blog.csdn.net/gjwlyxs/article/details/105463519)

[backface-visibility](https://www.runoob.com/cssref/css3-pr-backface-visibility.html)另外这个属性也有必要了解一下，他是定义元素在不面对屏幕时是否可见。什么意思呢，就是说当一个元素沿Y轴旋转180deg之后，相对于屏幕而言他是否可见，利用这一属性，我们可以做个纸牌翻转的demo 例如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>翻转</title>
  <style>
    .background{
    width: 500px;
    height: 500px;
    border: 1px solid red;
    background: url(./images/1.jpg) no-repeat center;
    background-size: cover;
  }

  .front,.back{
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 300px;
    text-align: center;
  }
  .front{
    background-color: red; 
    z-index: 1;
    /* 隐藏背面旋转元素不可见 */
    backface-visibility: hidden;
  }
  .back{
    background-color: green;
    transform: rotateY(180deg);
  
  }
  .trans{
    position: relative;
    width: 300px;
    height: 300px;
    transition: all .6s;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    border: 1px solid black;
    /* perspective: 500px; */
  }
  .trans:hover{
    transform: rotateY(180deg);
  }
  </style>
</head>
<body>
  <div class="trans">
    <!-- <div class="background"></div> -->
    <div class="front">正面</div>
    <div class="back">反面</div>
  </div>
</body>
</html>
```



还有就是我们在做案例的时候，心中一定要有一个3d的网格图形界面，知道自己所写属性代表的每一个含义，css说实话这些东西只要你想学，就没有你学不会的。

一下还做了两个案例，一个是旋转木马，另一个是正方体盒面，你们可以先动手自己去做一下，尝试以自己的思想去把他给做出来，然后再对比我的，你可以把你的想法发出来，我们一起努力进步哦，前端道路深远且到长，让我们共同求进退。

魔方体demo:

![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/37e887570cde3667355e49c330f67658.gif#pic_center)

旋转木马demo:
<!-- ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/cb7045ce4bd2d6e4e5b9b605cea49f7e.png#pic_center) -->

案例下载：
[3d动画demo下载](https://gitee.com/ma_xian_sen/3d-animation-demo)