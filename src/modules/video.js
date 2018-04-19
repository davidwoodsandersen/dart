/**
 * @module video
 * @description Hosts the Video class.
 */

import EventsManager from './events.js';

/**
 * @class
 * @description The interface for a video player instance.
 */
class Video {
	/**
	 * @memberof Video
	 * @constructor
	 * @param {object} props - Configuration options for the player.
	 */
	constructor(props) {
		this.id = props.id;
		this.parent = props.parent;
		this.source = props.source;
		this.attributes = props.attributes;

		this.element = document.createElement('video');

		if (typeof this.attributes === 'object') {
			for (var attr in props.attributes) {
				this.element.setAttribute(attr, props.attributes[attr]);
			}
		}

		this.element.setAttribute('id', this.id);
		this.element.setAttribute('src', this.source);

		this.eventsManager = new EventsManager();
	}

	/**
	 * @memberof Video
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
	 * @memberof Video
	 * @method destroy
	 * @description Removes the video element from the DOM.
	 */
	destroy() {
		this.parent.removeChild(this.element);
	}

	/**
	 * @memberof Video
	 * @method on
	 * @description Bind an event listener to the video player.
	 */
	on(event, handler) {
		this.eventsManager.subscribe(event, handler);
	}

	/**
	 * @memberof Video
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
	 * @memberof Video
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

export default Video;
