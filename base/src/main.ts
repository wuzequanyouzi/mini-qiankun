import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerMicroApps, start } from "../../mini-qiankun";

registerMicroApps([
    {
        name: 'vue2',
        entry: '//127.0.0.1:5500', // html应用入口
        container: '#container', // 渲染位置
        activeRule: '/subapp/vue2'
    }
])

start();

createApp(App).mount("#app");
