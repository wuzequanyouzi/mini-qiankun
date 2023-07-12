import { listenRouter } from './listen-router';

export { registerMicroApps } from './register-micro-apps';
export const start = () => {
  window.__MINI_QIANKUN_LOADED__ = true;
  console.log('mini qiankun start')
  // 监听路由
  listenRouter();
  // 加载子应用

}
