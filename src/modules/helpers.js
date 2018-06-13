/**
 * @module helpers
 * @description Hosts all helper functions.
 */

/**
 * @namespace DOMHelpers
 * @description DOM-related helper functions.
 */
const DOMHelpers = {
	/**
	 * @memberof DOMHelpers
	 * @method createElement
	 * @param {string} type - The DOM element type (e.g. 'div', 'ul', etc.).
	 * @param {object} properties - The object properties for the element.
	 * @description Create an HTML element with custom properties.
	 */
	createElement(type, properties) {
		var element = document.createElement(type);

		for (var prop in properties) element[prop] = properties[prop];

		return element;
	},

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
};

export { DOMHelpers };
