class MiniEvent {
    constructor() {
        this.eventMap = new Map();
    }

    on(name, cb) {
        if (typeof cb === 'function') {
            const cbs = this.eventMap.get(name) || [];
            cbs.push(cb);
            this.eventMap.set(name, cbs);
        } else {
            console.warn('cb 非 function');
        }
    }

    emit(name, ...args) {
        const cbs = this.eventMap.get(name);
        cbs.forEach((cb) => {
            cb(...args);
        })
    }
}

export default new MiniEvent();