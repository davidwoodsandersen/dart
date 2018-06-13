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
	 * @param {object} config - Configuration for the DOM element.
	 * @description Create an HTML element with custom properties and attributes.
	 */
	createElement(config) {
		var { type, properties, attributes } = config;
		var element = document.createElement(type);

		if (properties) {
			for (var prop in properties) element[prop] = properties[prop];
		}

		if (attributes) {
			for (var attr in attributes) element.setAttribute(attr, attributes[attr]);
		}

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
