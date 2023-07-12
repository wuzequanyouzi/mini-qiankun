import { listenRouter } from './listen-router';
import _events from './events';

export { registerMicroApps } from './register-micro-apps';
export const events = _events;
export const start = () => {
  window.__MINI_QIANKUN_LOADED__ = true;
  console.log('mini qiankun start')
  // 监听路由
  listenRouter();
  // 加载子应用

}
