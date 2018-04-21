/**
 * @module events
 * @description Hosts all event-related code and the EventsManager class.
 */

/**
 * @constant
 * @type {array}
 * @description The official list of valid video player events.
 */
const validEvents = [
	'load',
	'play',
	'pause',
	'error'
];

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
 * @description Coordinates internal video player events.
 */
class EventsManager {
	/**
	 * @memberof EventsManager
	 * @constructor
	 * @description Creates a "registry" property for storing events
	 * and event handler functions.
	 */
	constructor() {
		this.registry = {};
	}

	/**
	 * @memberof EventsManager
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
	 * @memberof EventsManager
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

export default EventsManager;
