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
function observer ({data}){
    let ref = data;
    Object.keys(ref.data).forEach(key => {
        Object.defineProperty(ref.data,key, { 
            get(){
                return ref.data[data];  
            },
            set(newValue){
                if (newValue !== ref) {
                    observer(ref);
                }
            ref[data] = newValue;
            }
    });
    })
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

But, how to write life cycle in the programer?

The solvation is create a complier then call this arguments to life cycle.

For instance:

```js
new Complier(data,express);
this.mount.call(this);
```
