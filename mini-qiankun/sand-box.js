/**
 * 利用proxy代理window
 * 在执行子应用JS的时候，会将window作用域改为proxyWindow
 */

export default class SandBox {
  constructor(app) {
    this.fakeWindow = {};
    this.realWindow = window;
    this.__init__(app);
  }

  __init__(app) {
    const { global = [] } = app;
    this.proxyWindow = new Proxy(this.fakeWindow, {
      get(target, key) {
        let value = null;
        if (!Reflect.has(target, key)) {
          // TODO: Reflect.get this.realWindow 报错？?
          value = window[key];
          if (typeof value === 'function') {
            value = value.bind(this.realWindow);
          }
        } else {
          value = Reflect.get(target, key);
        }
        return value;
      },
      set(target, key, value) {
        Reflect.set(global.includes(key) ? this.realWindow : target, key, value);
        return true;
      }
    })
  }
}
