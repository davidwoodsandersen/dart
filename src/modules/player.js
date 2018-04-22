/**
 * @module player
 * @description Hosts the Player class.
 */

import Dispatcher from './dispatcher.js';
import Container from './container.js';
import Video from './video.js';

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
		this.devMode = props.devMode;
		this.videos = props.videos;
		this.playlist = props.playlist;
		this.containerSettings = props.container;

		this.queue = [];
		this.index = 0;
		this.currentVideo;

		this.dispatcher = new Dispatcher(this.devMode);

		this.createQueue();
	}

	/**
	 * @memberof Player
	 * @method init
	 * @description Initializes the video player.
	 */
	init() {
		this.container = new Container(this.containerSettings, this.dispatcher);
		this.container.anchor();

		if (this.playlist) {
			this.on('videoEnd', () => {
				this.next();
			});
		}
	}

	/**
	 * @memberof Player
	 * @method start
	 * @description Plays the first video for the first time.
	 */
	start() {
		this.next();
	}

	/**
	 * @memberof Player
	 * @method destroy
	 * @description Destroys the video player.
	 */
	destroy() {
		this.container.remove();
	}

	/**
	 * @memberof Player
	 * @method createQueue
	 * @description Initialize video queue.
	 */
	createQueue() {
		for (var i = 0; i < this.videos.length; i++) {
			let settings = this.videos[i];

			settings.index = i;
			this.queue.push(
				new Video(settings, this.dispatcher)
			);
		}
	}

	/**
	 * @memberof Player
	 * @method next
	 * @description Load the next video in the queue.
	 */
	next() {
		if (this.index < this.queue.length) {
			this.currentVideo = this.queue[this.index];
			this.container.loadVideo(this.currentVideo);
			this.index++;
			this.play();
		}
	}

	/**
	 * @memberof Player
	 * @method previous
	 * @description Load the previous video in the queue.
	 */
	previous() {
		if (this.index > 1) {
			this.index--;
			this.currentVideo = this.queue[this.index];
			this.container.loadVideo(this.currentVideo);
			this.play();
		}
	}

	/**
	 * @memberof Player
	 * @method on
	 * @description Bind an event listener to the video player.
	 */
	on(event, handler) {
		this.dispatcher.subscribe(event, handler);
	}

	/**
	 * @memberof Player
	 * @method play
	 * @description Plays the current video.
	 */
	play() {
		this.currentVideo.play();
	}

	/**
	 * @memberof Player
	 * @method pause
	 * @description Pauses the current video.
	 */
	pause() {
		this.currentVideo.pause();
	}
}

export default Player;
