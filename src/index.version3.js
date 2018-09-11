/// Fork for ruanyif

const queryObservers = new Set();
const observer = fn => queryObservers.add(fn);
const observable = data => new Proxy(data, { set });
function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);;
    observable.forEach(fn => fn());
    return result;
}

