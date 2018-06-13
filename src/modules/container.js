/**
 * @module container
 * @description Hosts the Container class.
 */

import { DOMHelpers } from './helpers.js';
import PlayerError from './errors.js';
import selectors from '../constants/selectors.js';
import layout from '../constants/layout.js';
import defaultStyles from '../constants/defaultStyles.js';

const { getWidth, getHeight } = DOMHelpers;

/**
 * @constant
 * @type {object}
 * @description The default player dimensions if neither
 * "resizeToFitParent" nor "dimensions" are passed on instantiation.
 */
const defaultDimensions = {
	width: 900,
	height: 500
};

/**
 * @class
 * @description The video player's outer HTML.
 */
class Container {
	/**
	 * @memberof Container
	 * @constructor
	 * @param {object} props - Configuration for the container.
	 * @param {object} dispatcher - The Dispatcher instance of the video player.
	 */
	constructor(props, dispatcher) {
		this.dispatcher = dispatcher;

		this.id = props.id;

		if (!this.id) {
			new PlayerError({
				message: 'The container must have an ID.'
			}, this.dispatcher).report();
		}

		this.parent = props.parent;
		this.fullscreen = props.fullscreen;
		this.resizeToFitParent = props.resizeToFitParent;
		this.dimensions = props.dimensions || defaultDimensions;

		this.element = document.createElement('div');
		this.element.setAttribute('id', this.id);
		this.element.className = selectors.CONTAINER_CLASS;

		this.videoContainer = document.createElement('div');
		this.videoContainer.className = selectors.VIDEO_CONTAINER_CLASS;

		this.loadingScreen = document.createElement('div');
		this.loadingScreen.className = selectors.LOADING_SCREEN_CLASS;
		this.loadingScreen.show = () => {
			this.loadingScreen.className = selectors.LOADING_SCREEN_CLASS + ' ' + selectors.LOADING_SCREEN_ACTIVE_CLASS;
		};
		this.loadingScreen.hide = () => {
			this.loadingScreen.className = selectors.LOADING_SCREEN_CLASS;
		};

		this.element.appendChild(this.videoContainer);
		this.element.appendChild(this.loadingScreen);

		this.injectCss(layout);
		this.injectCss(defaultStyles);
		this.setDimensions();
	}

	/**
	 * @memberof Container
	 * @method injectCss
	 * @description Insert CSS into the video container.
	 */
	injectCss(css) {
		var styleTag = document.createElement('style');
		styleTag.textContent = css.replace(/\$video_id\$/g, this.id);

		this.element.appendChild(styleTag);
	}

	/**
	 * @memberof Container
	 * @method anchor
	 * @description Adds the container element to the DOM.
	 */
	anchor() {
		this.parent.appendChild(this.element);
	}

	/**
	 * @memberof Container
	 * @method remove
	 * @description Removes the container element from the DOM.
	 */
	remove() {
		this.parent.removeChild(this.element);
	}

	/**
	 * @memberof Container
	 * @method setDimensions
	 * @description Set the width and height of the video player.
	 */
	setDimensions() {
		var width, height;

		if (this.resizeToFitParent) {
			let container = this.parent;

			width = getWidth(container);
			height = getHeight(container);
		}
		else {
			width = this.dimensions.width;
			height = this.dimensions.height;
		}

		this.element.style.width = `${width}px`;
		this.element.style.height = `${height}px`;
	}

	/**
	 * @memberof Container
	 * @method loadVideo
	 * @param {object} video - An instance of the Video class.
	 * @description Append a video element to the container.
	 */
	loadVideo(video) {
		this.videoContainer.innerHTML = '';
		this.videoContainer.appendChild(video.element);

		video.resize();
	}
}

export default Container;
