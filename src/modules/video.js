/**
 * @module video
 * @description Hosts the Video class.
 */

/**
 * @class
 * @description Video instances within the player.
 */
class Video {
	/**
	 * @memberof Video
	 * @constructor
	 * @param {object} props - Configuration for the video.
	 * @param {object} dispatcher - The Dispatcher instance of the video player.
	 */
	constructor(props, dispatcher) {
		this.source = props.source;
		this.title = props.title;

		this.dispatcher = dispatcher;
		this.hasBeenStarted = false;

		this.element = document.createElement('video');
		this.element.setAttribute('src', this.source);

		this.initEvents();
	}

	/**
	 * @memberof Video
	 * @method initEvents
	 * @description Add event listeners to the video element.
	 */
	initEvents() {
		var dispatcher = this.dispatcher;

		this.element.addEventListener('ended', () => {
			let eventData = {};

			eventData.source = this.source;
			eventData.title = this.title;
			eventData.timestamp = Date.now();

			dispatcher.publish('videoEnd', eventData);
		}, true);

		this.element.addEventListener('playing', () => {
			dispatcher.publish('play', {
				timestamp: Date.now()
			});
		}, true);

		this.element.addEventListener('pause', () => {
			dispatcher.publish('pause', {
				timestamp: Date.now()
			});
		}, true);
	}

	/**
	 * @memberof Video
	 * @method play
	 * @description Play the video.
	 */
	play() {
		this.element.play();

		if (!this.hasBeenStarted) {
			this.hasBeenStarted = true;

			let eventData = {};

			eventData.source = this.source;
			eventData.title = this.title;
			eventData.timestamp = Date.now();

			this.dispatcher.publish('videoStart', eventData);
		}
	}

	/**
	 * @memberof Video
	 * @method pause
	 * @description Pause the video.
	 */
	pause() {
		this.element.pause();
	}

	/**
	 * @memberof Video
	 * @method reset
	 * @description Reset the video to its initial state.
	 */
	reset() {
		this.element.currentTime = 0;
		this.hasBeenStarted = false;
	}

	/**
	 * @memberof Video
	 * @method resize
	 * @description Adjust the video element dimensions to
	 * match the container element.
	 */
	resize() {
		this.element.style.width = this.element.parentNode.parentNode.style.width;
		this.element.style.height = this.element.parentNode.parentNode.style.height;
	}

	/**
	 * @memberof Video
	 * @method getReadyState
	 * @description Get the current ready state of the video.
	 */
	getReadyState() {
		return this.element.readyState;
	}
}

export default Video;
