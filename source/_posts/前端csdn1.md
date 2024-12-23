---
title: vue3配置基础模板及启用scss
abbrlink: 17047
date: 2023-04-24 18:34:55
tags: 
  - 前端
categories:
  - 前端
cover: https://images.maxiansen.top/blog/public/img/dm1.webp
---

一.配置代码片段

1.打开VScode 左下角齿轮 点击配置用户代码片段 新建代码全局文件  输入vue3
2.按照如下配置导入您的vscode

```json
{
	"Vue 3 Template": {
    "prefix": "vue3",
    "body": [
      "<template>",
      "  <div>",
      "    $1",
      "  </div>",
      "</template>",
      "",
      "<script setup lang=\"ts\">",
      "  $2",
      "</script>",
      "",
      "<style scoped lang=\"scss\">",
      "  $3",
      "</style>"
    ],
    "description": "Vue 3 Single File Component Template"
  }
}
```

3.这样你在.vue的文件下输入 vue3 就可以自动出现一下配置了

二 . 安装sass sass-loader ,使你的项目支持scss

1.安装依赖

```js
npm install sass sass-loader --save-dev
```

2.配置插件

在vite.config.ts中 配置如下

```ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/variables.scss";`,
      },
    },
  },
})
```

