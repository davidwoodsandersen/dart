/**
 * @module interval
 * @description Hosts the MasterInterval class.
 */

/**
 * @class
 * @description Handles all interval-based checks.
 */
class MasterInterval {
	/**
	 * @memberof MasterInterval
	 * @constructor
	 * @param {array} actions - An array of functions to call.
	 */
	constructor(actions) {
		this.interval;
		this.actions = actions;
		this.isRunning = false;
	}

	/**
	 * @memberof MasterInterval
	 * @method run
	 * @description Initialize the interval.
	 */
	run() {
		this.interval = setInterval(() => {
			for (var action in this.actions) {
				this.actions[action]();
			}
		}, 1000);
		this.isRunning = true;
	}

	/**
	 * @memberof MasterInterval
	 * @method destroy
	 * @description Clear the interval if it is running.
	 */
	destroy() {
		clearInterval(this.interval);
		this.isRunning = false;
	}
}

export default MasterInterval;
