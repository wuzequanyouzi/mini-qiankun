import { importHTML } from "./fetch-assets";
import SandBox from "./sand-box";

// 抽离domAPI
export const setElement = (entry, html) => {
  const container = document.querySelector(entry);
  const rootDom = document.createElement("div");
  rootDom.innerHTML = html;
  container.appendChild(rootDom);
};

// 加载子应用
export const loadApp = async (app, { setElement }) => {
  const entryHost = app.entry;
  const { html, execScripts } = await importHTML(entryHost);

  // 挂载root
  setElement(app.container, html);

  // 沙箱
  app.__proxyWindow__ = app.__proxyWindow__ || new SandBox(app).proxyWindow;

  // 执行子应用的js
  execScripts(app.__proxyWindow__).then(() => {
    // TODO: 要将沙箱的beforeMount mount unmount执行
    app.__proxyWindow__.__MOUNT__(app)
  });
};
