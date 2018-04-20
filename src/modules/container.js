/**
 * @module container
 * @description Hosts the Container class.
 */

import DOMHelpers from './helpers.js';
import selectors from '../constants/selectors';

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
	 */
	constructor(props) {
		this.id = props.id;
		this.parent = props.parent;
		this.fullscreen = props.fullscreen;
		this.resizeToFitParent = props.resizeToFitParent;
		this.dimensions = props.dimensions || defaultDimensions;

		this.element = document.createElement('div');
		this.element.className = selectors.CONTAINER_CLASS;
		this.element.style.backgroundColor = '#000';
		this.element.style.display = 'inline-block';

		this.setDimensions();
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
		this.element.innerHTML = '';
		this.element.appendChild(video.element);

		video.resize();
	}
}

export default Container;