/**
 * @module player
 * @description Hosts the Player class.
 */

import MasterInterval from './interval.js';
import Dispatcher from './dispatcher.js';
import Container from './container.js';
import Controls from './controls.js';
import Video from './video.js';
import readyStates from '../constants/readystates.js';

const { HAVE_ENOUGH_DATA, HAVE_FUTURE_DATA } = readyStates;

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
		this.controls = props.controls;
		this.debug = props.debug;
		this.videos = props.videos;
		this.containerSettings = props.container;

		this.volume = typeof props.volume === 'number' ? props.volume : 1;

		this.isPlaylist = this.videos.length > 1;
		this.queue = [];
		this.index = -1;
		this.currentVideo;
		this.masterInterval;

		this.dispatcher = new Dispatcher(this.debug);

		this.createQueue();
		this.initPlugins(props.plugins);
	}

	/**
	 * @memberof Player
	 * @method init
	 * @description Initializes the video player.
	 */
	init() {
		var _this = this;

		this.container = new Container(this.containerSettings, this.dispatcher);
		this.container.anchor();

		if (this.controls) {
			this.controls = new Controls(this, this.container.element);
			this.controls.anchor();
		}

		this.masterInterval = new MasterInterval();

		this.masterInterval.register('checkReadyState', () => {
			var currentVideo = _this.currentVideo;
			var loadingScreen = _this.container.loadingScreen;

			if (currentVideo) {
				let state = currentVideo.getReadyState();
				let canPlay = state === HAVE_ENOUGH_DATA || state === HAVE_FUTURE_DATA;

				canPlay ? loadingScreen.hide() : loadingScreen.show();
			}
		});

		if (this.isPlaylist) {
			this.on('videoEnd', () => {
				this.next();
			});
		}

		this.dispatcher.publish('init', {
			timestamp: Date.now()
		});
	}

	/**
	 * @memberof Player
	 * @method initPlugins
	 * @description Pass the Player instance to all plugins specified
	 * in the configuration, and call their initialization functions.
	 */
	initPlugins(plugins) {
		if (plugins) plugins.forEach((plugin) => { plugin(this); });
	}

	/**
	 * @memberof Player
	 * @method hasActiveVideo
	 * @description Returns true if the player has a current video established.
	 */
	hasActiveVideo() {
		return !!(this.currentVideo && this.currentVideo.element);
	}

	/**
	 * @memberof Player
	 * @method start
	 * @description Plays the first video for the first time.
	 */
	start() {
		if (!this.masterInterval.isRunning) this.masterInterval.run();
		this.next();
	}

	/**
	 * @memberof Player
	 * @method destroy
	 * @description Destroys the video player.
	 */
	destroy() {
		this.masterInterval.destroy();
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
		if (this.index < this.queue.length - 1) {
			this.index++;
			this.currentVideo = this.queue[this.index];
			this.container.loadVideo(this.currentVideo);
			this.currentVideo.reset();
			this.currentVideo.setVolume(this.volume);
			this.play();
		}
	}

	/**
	 * @memberof Player
	 * @method previous
	 * @description Load the previous video in the queue.
	 */
	previous() {
		if (this.index > 0) {
			this.index--;
			this.currentVideo = this.queue[this.index];
			this.container.loadVideo(this.currentVideo);
			this.currentVideo.reset();
			this.currentVideo.setVolume(this.volume);
			this.play();
		}
	}

	/**
	 * @memberof Player
	 * @method updateVolume
	 * @description Update the volume of the current video. Other videos
	 * in the playlist will grab the canonical volume from the player
	 * on initialization.
	 */
	updateVolume(volume) {
		this.volume = volume;
		this.currentVideo.setVolume(volume);
	}

	/**
	 * @memberof Player
	 * @method getCurrentTime
	 * @description Get the current time of the current video.
	 */
	getCurrentTime() {
		return this.currentVideo.element.currentTime;
	}

	/**
	 * @memberof Player
	 * @method setCurrentTime
	 * @description Set the current time of the current video.
	 */
	setCurrentTime(time) {
		this.currentVideo.element.currentTime = time;
	}

	/**
	 * @memberof Player
	 * @method getCurrentDuration
	 * @description Get the duration of the current video.
	 */
	getCurrentDuration() {
		return this.currentVideo.element.duration;
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
		if (!this.masterInterval.isRunning) this.masterInterval.run();
		this.currentVideo ? this.currentVideo.play() : this.start();
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
