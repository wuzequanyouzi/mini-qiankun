const fetchAssets = (url) => {
    return fetch(url).then(res => res.text());
}

export const importHTML = async (url) => {
    // 获取html
    const html = await fetchAssets(url);
    const container = document.createElement('div')
    container.innerHTML = html;

    // 获取所有的script标签代码
    const scripts = Array.from(container.querySelectorAll('script'));
    console.log(scripts);
    function getExternalScripts() {
        return Promise.all(scripts.map(script => {
            const src = script.getAttribute('src');
            console.log(src)
            if (!src) {
                return Promise.resolve(src.innerHTML);
            }
            return fetchAssets(src.startsWith('http') ? src : `${url}${src}`);
        }))
    }
    
    // 执行所有的script代码
    function execScripts(proxyWindow) {
        return getExternalScripts().then(scripts => {
            scripts.forEach(script => {
                eval(`;(function(window, self, global) {;${script}}).bind(proxyWindow)(proxyWindow, proxyWindow, proxyWindow);`)
            })
        })
    }

    return {
        html,
        getExternalScripts,
        execScripts
    }
}