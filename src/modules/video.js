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

		this.element = document.createElement('video');

		if (typeof this.attributes === 'object') {
			for (var attr in props.attributes) {
				this.element.setAttribute(attr, props.attributes[attr]);
			}
		}
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
}

export default Video;
