/* global describe, it, assert, DocumentHeight */
'use strict';

/**
 * documentHeight mocha test spec - https://mochajs.org/
 * @param {Object} DocumentHeight - DocumentHeight unit tests
 */
describe('docHeight', function () {
	it('should be a function', function () {
		assert.equal(typeof docHeight, 'function');
	});

	it('should return explicit document height', function () {
		assert.equal(docHeight(), 1200);
	});

	it('should cache document height automatically', function () {
		document.getElementById('block').style.display = 'block';
		assert.equal(docHeight(), 1200);
	});

	it('should return rendered document height when cache cleared', function () {
		assert.equal(docHeight(true), 2500);
	});
});
