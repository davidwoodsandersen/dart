/**
 * @module video
 * @description Hosts the Video class.
 */

class Video {
	/**
	 * @memberof Video
	 * @constructor
	 * @param {object} props - Configuration for the video.
	 * @param {function} dispatcher - The EventsManager instance of the video player.
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
	 * @method play
	 * @description Play the video.
	 */
	play() {
		this.element.play();
		this.dispatcher.publish('play', {
			time: Date.now()
		});
	}

	/**
	 * @memberof Video
	 * @method pause
	 * @description Pause the video.
	 */
	pause() {
		this.element.pause();
		this.dispatcher.publish('pause', {
			time: Date.now()
		});
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
