// Fork for Vue 

const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
const methodsToPaths = ['push', 'pop', 'shift',
	'unshift', 'splice',
	'sort', 'reverse'
];

export function observer_array(array_, fn) {
	methodsToPaths.forEach((keyword) => {
		const original = arrayProto[keyword];
		Object.defineProperty(arrayMethods, keyword, {
			value() {
				const result = original.apply(this, arguments);
				fn.call(array_);
				return result;
			}
		});
	});
	array_.__proto__ = arrayMethods;
	return array_;
}
