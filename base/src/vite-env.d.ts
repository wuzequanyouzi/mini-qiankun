/// <reference types="vite/client" />

declare module "*./mini-qiankun" {
    // import { registerMicroApps, start } from '../../mini-qiankun';
    export const registerMicroApps: (apps: Array<object>) => {};
    export const start: () => {};
    export const events: any;
}