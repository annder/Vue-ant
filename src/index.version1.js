const object_prototype = Object.prototype;
const isObject = type => object_prototype.toString.call(type) == "[object Object]";
const isArray = type => object_prototype.toLocaleString.call(type) == "[object Array]";
export class Ant {
    constructor(obj, callback) {
        if (!isObject(obj)) {
            throw new TypeError("Please call an object type");
        }
        this.$callback = callback;
        // this.observer = this.observer.bind(this);
        this.observer(obj);
        
    }
    observer(obj, path) {
        Object.keys(obj).forEach(function (key) {
            //object value.
            var oldValue = obj[key];
            //copy called callback function.
            var pathArray = path && path.slice(0);
            if (pathArray) {
                // Object push to patArry, this step is store called Ant class object.
                pathArray.push(obj);
            }
            else {
                // init
                pathArray = [key];
            }
            Object.defineProperty(obj, key, {
                get() {
                    return oldValue;
                },
                set: (function (newVal) {
                    if (oldValue !== newVal) {
                        if (isObject(newVal) || isArray(newVal)) {
                            this.observer(obj, pathArray);
                        }
                        this.$callback(newVal, oldValue, pathArray);
                        oldValue = newVal;
                    }
                    return oldValue;
                }).bind(this)
            });
            if (isObject(obj[key] || isArray(obj[key]))) {
                this.observer(obj[key], pathArray);
            }
        }, this);
    }
}
