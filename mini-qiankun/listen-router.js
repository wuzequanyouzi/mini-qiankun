import { handleRouter } from './handle-router';
export const listenRouter = () => {
  // 监听history路由变化
  // go、back、forword
  window.addEventListener("popstate", () => {
    console.log("监听history路由变化: go、back、forword");
    handleRouter();
  });
  // push
  const _pushState = window.history.pushState;
  window.history.pushState = function (...args) {
    _pushState.apply(window.history, args);
    console.log("监听history路由变化：push");
    handleRouter();
  };

  // replace
  const _replaceState = window.history.replaceState;
  window.history.replaceState = function (...args) {
    _replaceState.apply(window.history, args);
    console.log("监听history路由变化：replace");
    handleRouter();
  };
};
