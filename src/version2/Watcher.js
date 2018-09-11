import {Dep} from "./Observer"
export class Watcher {
    constructor(vm, exp, cb) {
        this.cb = cb;
        this.vm = vm;
        this.exp = exp;
        this.get = this.get.bind(this);
        this.run = this.run.bind(this);
        this.value = this.get();
    }
    update() {
        this.run();
    }
    run() {
        let value = this.vm.data[this.exp];
        let oldValue = this.value;
       // Recover value, and execution it.
        if (value !== oldValue) {
            this.value = value;
            // Observer
            this.cb.call(this.vm, value, oldValue);
        }
    }
    get(){
        Dep.target = this;
        // Get express function for Javascript Language.
        let value = this.vm.data[this.exp];
        Dep.target = null;
        return value;
    }
}