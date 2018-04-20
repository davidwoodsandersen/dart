/**
 * @module player
 * @description Hosts the Player class.
 */

import EventsManager from './events.js';
import DOMHelpers from './helpers.js';

const { getWidth, getHeight } = DOMHelpers;

/**
 * @constant
 * @type {object}
 * @description The default player dimensions if neither
 * "fitContainer" nor "dimensions" are passed on instantiation.
 */
const defaultDimensions = {
	width: 900,
	height: 500
};

/**
 * @class
 * @description The interface for a video player instance.
 */
class Player {
	/**
	 * @memberof Player
	 * @constructor
	 * @param {object} props - Configuration options for the player.
	 */
	constructor(props) {
		this.id = props.id;
		this.parent = props.parent;
		this.source = props.source;
		this.attributes = props.attributes;
		this.fitContainer = props.fitContainer || false;
		this.dimensions = props.dimensions || defaultDimensions;

		this.element = document.createElement('video');

		if (typeof this.attributes === 'object') {
			for (var attr in props.attributes) {
				this.element.setAttribute(attr, props.attributes[attr]);
			}
		}

		this.element.setAttribute('id', this.id);
		this.element.setAttribute('src', this.source);

		this.setDimensions();

		this.eventsManager = new EventsManager();
	}

	/**
	 * @memberof Player
	 * @method init
	 * @description Adds the video player element to the DOM.
	 */
	init() {
		try {
			this.parent.appendChild(this.element);
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
	 * @memberof Player
	 * @method destroy
	 * @description Removes the video element from the DOM.
	 */
	destroy() {
		this.parent.removeChild(this.element);
	}

	/**
	 * @memberof Player
	 * @method setDimensions
	 * @description Set the width and height of the video player.
	 */
	setDimensions() {
		var width, height;

		if (this.fitContainer) {
			let container = this.parent;

			width = getWidth(container);
			height = getHeight(container);
		}
		else {
			width = this.dimensions.width;
			height = this.dimensions.height;
		}

		this.element.setAttribute('width', `${width}px`);
		this.element.setAttribute('height', `${height}px`);
	}

	/**
	 * @memberof Player
	 * @method on
	 * @description Bind an event listener to the video player.
	 */
	on(event, handler) {
		this.eventsManager.subscribe(event, handler);
	}

	/**
	 * @memberof Player
	 * @method play
	 * @description Plays the video.
	 */
	play() {
		this.element.play();
		this.eventsManager.publish('play', {
			time: Date.now()
		});
	}

	/**
	 * @memberof Player
	 * @method pause
	 * @description Pauses the video.
	 */
	pause() {
		this.element.pause();
		this.eventsManager.publish('pause', {
			time: Date.now()
		});
	}
}

export default Player;
