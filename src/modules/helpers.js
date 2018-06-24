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

/**
 * @namespace mathHelpers
 * @description Math-related helper functions.
 */
const mathHelpers = {
	/**
	 * @memberof mathHelpers
	 * @method getPercentage
	 * @param {number} numerator - The numerator, representing a fraction of the whole.
	 * @param {number} denominator - The denominator, representing the whole.
	 * @description Compute a percentage to two decimal points.
	 */
	getPercentage(numerator, denominator) {
		return ((numerator / denominator) * 100).toFixed(2);
	},

	/**
	 * @memberof mathHelpers
	 * @method getPercentageOf
	 * @param {number} whole - The number to get a percentage of.
	 * @param {number} percentage - The percentage of the number to get.
	 * @description Get a percentage of a number as an integer.
	 */
	getPercentageOf(whole, percentage) {
		return (whole * (percentage / 100)).toFixed(0);
	}
};

export { DOMHelpers, mathHelpers };
