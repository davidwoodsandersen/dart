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
	 */
	constructor() {
		this.interval;
		this.actions = {};
		this.isRunning = false;
	}

	/**
	 * @memberof MasterInterval
	 * @method register
	 * @param {string} name - The name of the action.
	 * @param {function} action - The action to be run on the interval.
	 * @description Register an action to be run on the interval.
	 */
	register(name, action) {
		this.actions[name] = action;
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
