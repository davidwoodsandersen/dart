/**
 * @module helpers
 * @description Hosts all helper functions.
 */

/**
 * @namespace DOMHelpers
 * @description DOM-related helper functions.
 */
var DOMHelpers = {
	/**
	 * @memberof DOMHelpers
	 * @method getWidth
	 * @param {object} element - A DOM element.
	 * @description Get the computed width of an element.
	 */
	getWidth(element) {
		return parseFloat(window.getComputedStyle(element).width);
	},

	/**
	 * @memberof DOMHelpers
	 * @method getHeight
	 * @param {object} element - A DOM element.
	 * @description Get the computed height of an element.
	 */
	getHeight(element) {
		return parseFloat(window.getComputedStyle(element).height);
	}
}

export default DOMHelpers;

