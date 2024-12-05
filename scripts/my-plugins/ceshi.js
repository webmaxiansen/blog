// hexo.extend.filter.register('after_post_render', function (data) {
    
//     const magnetConfig = hexo.config.magnet; // 获取配置

//     if (magnetConfig.enable) {
//         // 启用推荐功能

//         console.log("插件生效：",magnetConfig);
        
//         const threshold = magnetConfig.threshold;
//         const limit = magnetConfig.limit;
//         const customMessage = magnetConfig.custom_message;

//         // 根据阈值和限制条件生成推荐内容
//         // data.content += `<div class="recommendations">推荐文章（阈值：${threshold}, 限制：${limit}）</div>`;
//         console.log("data.layout: ",data.layout);
        
//         // 插入自定义消息
//     }

//     return data;
// });
