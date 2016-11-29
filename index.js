'use strict';

var html = document.documentElement;
var body = document.body;
var height = 0;

/**
 * Returns the height of the current document
 * @param {Boolean} reset - Force a re-measure if cached value is already set
 * @return {Number} - Document height in pixels
 */
module.exports = function (reset) {
	reset = Boolean(reset);

	if (height > 0 && !reset) {
		return height;
	}

	height = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
	);

	return height;
};
