// test suite to test out utility function

import { describe, it } from 'node:test';
import assert from 'node:assert';
import add from './index.js';

// tests begin
describe('Utils Test Suite', function () {
	it('Should add 2 integers', function () {
		assert.strictEqual(add(2, 3), 5);
	});
});
