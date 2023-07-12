import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerMicroApps, start, events } from "../../mini-qiankun";

registerMicroApps([
    {
        name: 'vue2',
        entry: '//127.0.0.1:5500', // html应用入口
        container: '#container', // 渲染位置
        activeRule: '/subapp/vue2',
        events: events
    }
])

events.on('fire', function (...args:any[]){
    console.log('子应用发来消息啦', args);
})

start();

createApp(App).mount("#app");
