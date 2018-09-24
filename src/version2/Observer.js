export class Observer {
	constructor(data) {
		this.data = data;
		this.walk = this.walk.bind(this);
		this.walk(data);
	}
	defineReactive(data, key, val) {
		let dep = new Dep();
		observer(data);
		Object.defineProperty(data, key, {
			get() {
				if (Dep.target) {
					dep.addSub(Dep.target);
				}
				return val;
			},
			set(newValue) {
				if (newValue == val) {
					return;
				}
				val = newValue;
				dep.notify();
			}
		});
	}
}

function observer(value) {
	if (!value || typeof value !== 'object') {
		return;
	}
	new Observer(value);
}
export class Dep {
	constructor() {
		this.subs = [];
	}
	addSub(sub) {
		this.subs.push(sub);
	}
	notify() {
		this.subs.forEach(sub => {
			sub.update();
		});
	}
}
Dep.target = null;