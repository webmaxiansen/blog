---
title: photo
date: 2024-11-15 05:42:24
type: photo
top_img: "url(https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png)"
aside: false
comments: false
---

<style>
  #article-container .gallery-group-main {
    overflow: auto;
    padding: 0 0 16px;
    display: grid;
    grid-template-columns: (2);
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  #article-container figure.gallery-group {
    position: relative;
    float: left;
    overflow: hidden;
    margin: 6px 4px;
    width: unset;
    height: 250px;
    border-radius: 8px;
    background: #000;
    -webkit-transform: translate3d(0, 0, 0);
}
</style>

<div class="gallery-group-main">
{% galleryGroup '封面专区' '本站用做文章封面图片' '/photo/fm' https://images.maxiansen.top/blog/public/img/fm/default_cover_1.webp %}
{% galleryGroup '动漫二次元' '收藏的关于一些背景' '/photo/dm' https://images.maxiansen.top/blog/public/img/dm/dark_mode.webp %}
{% galleryGroup '搜图神器' '使你快速找到自己所有的图片 加速效率' 'https://www.soutushenqi.com/' https://images.maxiansen.top/blog/public/img/fm/default_cover_26.webp %}
{% galleryGroup '我的生活' '记录自己生活中的一些点滴' '/photo/sh' https://images.maxiansen.top/blog/public/img/sh/sh1.jpg %}
</div>
