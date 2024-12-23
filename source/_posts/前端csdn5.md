---
title: 防抖与节流运用（封装）
abbrlink: 33174
date: 2022-08-20 18:47:45
tags:
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm5.webp
---

## 防抖与节流运用（封装）

#### 防抖：

```typescript
  	 // 防抖,当用户操作较为频繁时,只发送最后一次结果作为请求
      // 在这里我用的时ts写的,对于传入的值有严格的效验
     let Trembling=(fn:Function,deplay:number)=>{
      let timer:any = null
      return ()=>{
        if(timer!==null) {clearTimeout(timer)}
        timer=setTimeout(()=>{fn()},deplay);
      }
     }
    //  运用 当用户在输入框时(间隔1.5s内)频繁输入,取最后一次结果为准
    // 调用时应遵循Trembling函数参数里面的type
     let changes=Trembling(()=>{
      // 所有的业务逻辑代码放置在这里
      console.log("前端深造中")
     },1500)
```
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/1255a7431f69c72f59b49a89d4e418e7.png#pic_center)

节流：在这里节流我并没有封装，有兴趣的小伙伴可以自行封装试试看，和防抖的函数相同（如若不想封装的请参考下方）

```typescript
// 节流,控制用户在特定的事件的内发送请求，减少用户发送请求的频次
      let flag =true
      const throttle=()=>{ 
        if(flag){
          setTimeout(()=>{
            console.log("hello")
            // 在倒计时结束时，在发送请求，会重新走流程
            flag = true
          },1000)
          flag =false 
          // 在倒计时尚未结束之前若在发送请求，请求无效
        }      
      }
```

节流（封装）

```typescript
let throttle=(fn:Function,deplay:number)=>{
        let flag = true
        return ()=>{
          flag && setTimeout(()=>{fn(),flag=true},deplay)
          flag=false
        }
      }
//这里我就不过多讲了，意思不懂的可以参考上方的注释
//运用 例如当页面出现滚动条时 减缓次数
window.addEventListener('scroll',throttle(()=>{
        console.log("hello")
      },1000))
```
![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/6a88f0e47236491ed3bb88d735de18d0.png#pic_center)
注：这里的8次代表我一直在滚动界面，由于我间隔时间为1s,故只发送8次

```typescript
window.addEventListener('scroll',()=>{
        console.log("前端深造中")
      })
```
如果我这样来写，一旦我轻轻的滚动页面，你就会发现请求了次数高达近200，要明白节流的作用就是减缓请求次数

![在这里插入图片描述](https://images.maxiansen.top/blog/public/csdn/e2f2c5ecc050cad99b8f5e38779735fb.png)
如有issure还望指出,正在成长中......
