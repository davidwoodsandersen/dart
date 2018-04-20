/**
 * @module player
 * @description Hosts the Player class.
 */

import EventsManager from './events.js';
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
		this.videos = props.videos;
		this.containerSettings = props.container;

		this.queue = [];
		this.index = 0;
		this.currentVideo;

		this.eventsManager = new EventsManager();
		this.container = new Container(this.containerSettings);

		this.createQueue();
	}

	/**
	 * @memberof Player
	 * @method init
	 * @description Initializes the video player.
	 */
	init() {
		try {
			this.container.anchor();
			this.next();
		}
		catch (e) {
			throw new Error(e);
		}
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
				new Video(settings, this.eventsManager)
			);
		}
	}

	/**
	 * @memberof Player
	 * @method next
	 * @description Load the next video in the queue.
	 */
	next() {
		this.currentVideo = this.queue[this.index];
		this.container.loadVideo(this.currentVideo);
		this.index++;
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
