Fork for [Vue-code](https://github.com/HcySunYang/vue-design)

Fork for [Self-code](https://github.com/canfoo/self-vue)

Fork for [observer-ruanyif](http://es6.ruanyifeng.com/#docs/reflect#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E4%BD%BF%E7%94%A8-Proxy-%E5%AE%9E%E7%8E%B0%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F)

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

---

And array observer just simple writhing.

It call self for codes:

```js
// Store array prototype... 
const ArrayPrototype = Array.prototype;
const MethodsArrayPrototype = Object.create(ArrayPrototype);
const ArrayOperate = ['push','shift','unshift','pop','splice','sort','reverse'];

ArrayOpreate.forEach((keyword)=>{
    
    Object.defineProperty(MethodsArrayPrototype,keyword,{
        value() {
            // reserve
        const result = ArrayArrayPrototype.apply(this,arguments);           
        }
        // observer
        return result;
    })
})
const array_ = [];
array_.__proto__ = arrayMethods;
///array operate.
```