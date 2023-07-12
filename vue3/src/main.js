import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let instance = null;
const render = (props = {}) => {
    const { container, events } = props;
    instance = createApp(App);
    instance.mount(container || '#app')

    events.emit('fire', '你好');
}

console.log(window.__MINI_QIANKUN_LOADED__, 'window.__MINI_QIANKUN_LOADED__')

if (!window.__MINI_QIANKUN_LOADED__) {
    render();
}

const mount = (props) => {
    console.log(props);
    render(props);
}

const unmount = () => {
    console.log(instance)
    instance.unmount();
    instance = null;
}

// TODO: 目前umd导出mount、unmount无法挂载在window上

window.__MOUNT__ = mount;
window.__UNMOUNT__ = unmount;
