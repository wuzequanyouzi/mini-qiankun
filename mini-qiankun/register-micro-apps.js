// 存放所有注册的微应用配置
let apps = [];

export function registerMicroApps(_apps) {
    apps = _apps;
}

export function getApps() {
    return apps;
}