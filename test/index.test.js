import {
	Ant
} from './../src/index.version1';
import {
	expect
} from 'chai';

describe('Test object is observable', function () {
	it('should change?', function () {
		let Object_ = {
			val: 1
		};
		const Ant_Vue = new Ant(Object_, function (obj) {
			console.log('change Observer--->', obj);
		});
		Object_.val = 2;
		expect(Object_.val).equal(2);
	});
});