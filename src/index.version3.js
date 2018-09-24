/// Fork for ruanyif

const queryObservers = new Set();
export const observer = fn => queryObservers.add(fn);
export const observable = data => new Proxy(data, {
	set
});

function set(target, key, value, receiver) {
	const result = Reflect.set(target, key, value, receiver);
	observable.forEach(fn => fn());
	return result;
}