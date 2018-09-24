// Fork for Vue 

const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
const methodsToPaths = ['push', 'pop', 'shift',
	'unshift', 'splice',
	'sort', 'reverse'
];
methodsToPaths.forEach((keyword) => {
	const original = arrayProto[keyword];
	Object.defineProperty(arrayMethods, keyword, {
		value() {
			const result = original.apply(this, arguments);
			console.log('Hello');
			return result;
		}
	});
});

const array_ = [];
array_.__proto__ = arrayMethods;
array_.push(1);