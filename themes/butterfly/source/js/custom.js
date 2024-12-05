// custom.js
console.log("1111111111");
document.addEventListener('DOMContentLoaded', function () {
    // 动态加载 Vue
    var vueScript = document.createElement('script');
    vueScript.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js';
    vueScript.onload = function() {
        // Vue 加载完成后，动态加载 Element UI
        var elementScript = document.createElement('script');
        elementScript.src = 'https://unpkg.com/element-ui/lib/index.js';
        elementScript.onload = function() {
            // 等待 Element UI 加载完成后，执行 Vue.use() 注册 Element UI 插件
            if (window.Vue && window.ElementUI) {
                Vue.use(ElementUI);  // 使用 Vue.use() 注册 Element UI 插件
                initializeVue();      // 初始化 Vue 实例
            }
        };
        document.head.appendChild(elementScript);
    };
    document.head.appendChild(vueScript);
});

function initializeVue() {
    new Vue({
        el: '#vue-app',
        data() {
            return {
                dialogVisible: false
            };
        },
        methods: {
            openDialog() {
                this.dialogVisible = true;
            }
        }
    });
}


console.log("44444444444");