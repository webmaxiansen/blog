---
title: pdf文件预览
abbrlink: 17495
date: 2022-02-23 23:47:04
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm/dm8.jpg
---

1.为了实现手机端pdf文件预览，花费了我整整一天，不，准确的说是一天多，不过现在回头想想，其实也没有那么的难，可能也是自己当初没有接触过吧，要怪只能怪自己还是一直小菜鸟，没啥见识，为自己的学习之路留下一片痕迹，做下总结：
2.[pdf包下载](https://download.csdn.net/download/weixin_52767262/82085217)这个包是我之前下好的，当然你也可以到官方中去下载，都是可以的 [官方链接地址](https://mozilla.github.io/pdf.js/)
3.下载好之后直接将包放进我们的项目中来，在此之前你要搞清楚pdf.js它主要原理是在一个页面中嵌套另一个页面，如果你使用是vue框架可以直接将他怼到public文件夹下，项目目录结构大致为下![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/34bd70581d4296106b33170f6e7ce386.png)
4.然后我们打开pdf/web/viewer.html,可以看到此文件打开之后
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/073369e2de6f0a01966f1cbd6be385af.png)
里面要放的就是我们文件
5.再然后打开同级目录下方的viewer.js文件，然后来看这句代码![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/7131c5ae80177ccbc00056568b817dc3.png)
很明显默认路径为一个变量，我们再来找一下这个默认变量是什么![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/5d5e47438ebbe9513e07ec57155774de.png)
默认路径为空，啥也没有，所以我们打开viewer.html为空，呐，接下来我们就在这里指定一下默认路径，看打开后是什么样子
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/f6c82450620f124c31d677e26e991b60.png)
当我们指定路径后在此打开viewer.html时，就为我们上方指定的默认路径
6.接下来再看一代码
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/63e568a6c64b52560b7befa2951afc9f.png)
很明显这是一则三目运算如果我们传参，将使用我们参数后面的文件路径，否则就使用我们的默认路径。好了，了解到这些，接下来我们开始正式使用
7.其实使用起来非常的简单，快捷，也就一行代码

```html
 <iframe src="/pdf/web/viewer.html?file=/aaa.pdf"></iframe>
```
记住，路径一定要写对，不然文件是出不来的其所有的路径都可以这样写：'http://xxx.com/pdf/web/viewer.html？file=http://xxx.com/aaa.pdf'前后域名要保持一致哦，不然会跨域的，如果您的文件地址上面还存在参数的话，可以先encodeURIComponent 编码一下再放上去 
对了结尾补充一句iframe标签可以自定义大小，想要什么尺寸可以调哦