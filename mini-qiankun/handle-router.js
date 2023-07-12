import { getApps } from "./register-micro-apps";
import { loadApp, setElement } from "./load-app";
let currentApp = null;
export const handleRouter = () => {
  // 获取所有注册的应用
  const apps = getApps();

  const pathname = location.pathname;
  // 匹配当前路由对应的应用
  const app = apps.find((app) => pathname.startsWith(app.activeRule));
  console.log(app);

  // TODO： 子应用中的路由问题？
  if (!app || currentApp?.activeRule === app.activeRule) {
    if (currentApp) {
      currentApp.__proxyWindow__.__UNMOUNT__?.();
      currentApp = null;
    }
    return;
  } 
  window.currentApp = currentApp = app;
  // 加载子应用
  loadApp(app, {
    setElement,
  });
};
