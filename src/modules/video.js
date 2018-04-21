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

		this.element = document.createElement('video');
		this.element.setAttribute('src', this.source);
	}

	/**
	 * @memberof Video
	 * @method initEvents
	 * @description Add event listeners to the video element.
	 */
	initEvents() {
		var dispatcher = this.dispatcher;

		this.element.addEventListener('ended', () => {
			dispatcher.publish('videoEnd', {
				timestamp: Date.now()
			});
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
	 * @method resize
	 * @description Adjust the video element dimensions to
	 * match the container element.
	 */
	resize() {
		this.element.style.width = this.element.parentNode.style.width;
		this.element.style.height = this.element.parentNode.style.height;
	}
}

export default Video;
