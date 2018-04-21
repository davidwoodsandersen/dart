/**
 * @module dispatcher
 * @description Hosts all event-related code and the Dispatcher class.
 */

import validEvents from '../constants/events.js';

/**
 * @function isValidEvent
 * @param {string} event - The event being assessed.
 * @description - Determines if the submitted event is officially
 * recognized by the player.
 */
function isValidEvent(event) {
	return validEvents.includes(event);
}

/**
 * @class
 * @description Coordinates internal video player events. The Dispatcher
 * instance for the video player gets initialized as a property of the
 * Player instance, then passed to sub-components of the player on
 * their instantiation. This way, events emitted on sub-components can
 * bubble up to the player's interface.
 */
class Dispatcher {
	/**
	 * @memberof Dispatcher
	 * @constructor
	 * @description Creates a "registry" property for storing events
	 * and event handler functions.
	 */
	constructor() {
		this.registry = {};
	}

	/**
	 * @memberof Dispatcher
	 * @method subscribe
	 * @param {string} name - The name of the event.
	 * @param {function} handler - The function to call when the event fires.
	 * @description Adds an event listener to the registry.
	 */
	subscribe(name, handler) {
		if (!isValidEvent(name)) return false;

		if (!this.registry[name]) {
			this.registry[name] = [];
		}

		this.registry[name].push(handler);
	}

	/**
	 * @memberof Dispatcher
	 * @method publish
	 * @param {string} name - The name of the event.
	 * @param {object} metadata - Data to pass to each event handler.
	 * @description - Trigger an event and call the corresponding handlers.
	 */
	publish(name, metadata) {
		if (!isValidEvent(name)) return false;

		var entry = this.registry[name];

		if (entry && entry.length) {
			entry.forEach(handler => handler(metadata));
		}
	}
}

export default Dispatcher;
