/**
 * @module events
 * @description Hosts all error-related code and the PlayerError class.
 */

/**
 * @class
 * @description Describes and reports internal player errors.
 */
class PlayerError {
	/**
	 * @memberof PlayerError
	 * @constructor
	 * @param {object} props - Error data.
	 * @param {object} dispatcher - The EventsManager instance of the video player.
	 */
	constructor(props, dispatcher) {
		this.dispatcher = dispatcher;

		this.message = props.message;
		this.timestamp = Date.now();
	}

	/**
	 * @memberof PlayerError
	 * @method report
	 * @description Emit the event through the EventsManager.
	 */
	report() {
		var eventData = {};

		eventData.message = this.message;
		eventData.time = this.timestamp;

		this.dispatcher.publish('error', eventData);
	}
}

export default PlayerError;
