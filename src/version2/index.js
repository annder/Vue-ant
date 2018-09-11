export class SelfVue {
    constructor({ data, methods }) {
        this.data = data;
        this.methods = methods;
        this.proxyKeys = this.proxyKeys.bind(this);
        Object.keys(this.data).forEach(key => {
            this.proxyKeys(key);
        })
    }
    proxyKeys(key) {
        Object.defineProperty(this, key, {
            get() {
                return this.data[key];
            },
            set(newValue) {
                this.data[key] = newValue;
            }
        })
    }
}