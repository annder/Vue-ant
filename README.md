Fork for [Vue-code](https://github.com/HcySunYang/vue-design)

Fork for [Self-code](https://github.com/canfoo/self-vue)

Simple to say, Just to-way automatic binding is compare old object with new object, and their if equal, use function performance it.

if unequal, just recurrent object.defineProperty function.

---

The version what watcher object change just need tips, it can't  change called constructor object.

And he use change self method to merger a new object;

For Javascript

```js
function SelfVue({data}){
    Object.keys(data).forEach (key => {
        this.proxKeys(key);
    })
    observer(data);
    return this;
}
this.SelfVue.proxykeys = function(key){
    //This object is collect all object to render!
Object.defineProperty(this,key, {
        get(){
            return this.data.key;        
        },
        set(newValue){
            this.data[key] = newValue;
        }
    })
}
```
