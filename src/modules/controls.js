/**
 * @module controls
 * @description Hosts all player-controls-related code and the Controls class.
 */

import selectors from '../constants/selectors.js';

/**
 * @class
 * @description Facilitates user interaction with the video player.
 */
class Controls {
	/**
	 * @memberof Controls
	 * @constructor
	 * @param {object} player - The Player instance.
	 * @description The Player instance is passed directly
	 * to the controls for easy access to the top-level API.
	 */
	constructor(player) {
		this.player = player;

		this.build();
	}

	/**
	 * @memberof Controls
	 * @method build
	 * @description Create and organize the controls HTML.
	 */
	build() {
		this.container = document.createElement('div');
		this.container.className = selectors.CONTROLS_CONTAINER_CLASS;

		var playButton = document.createElement('div');
		playButton.className = selectors.CONTROLS_PLAY_BUTTON;
		playButton.onclick = () => player.play();

		var pauseButton = document.createElement('div');
		pauseButton.className = selectors.CONTROLS_PAUSE_BUTTON;
		pauseButton.onclick = () => player.pause();

		var nextButton = document.createElement('div');
		nextButton.className = selectors.CONTROLS_NEXT_BUTTON;
		nextButton.onclick = () => player.next();

		var previousButton = document.createElement('div');
		previousButton.className = selectors.CONTROLS_PREVIOUS_BUTTON;
		previousButton.onclick = () => player.previous();

		this.container.appendChild(playButton);
		this.container.appendChild(pauseButton);
		this.container.appendChild(nextButton);
		this.container.appendChild(previousButton);
	}

	/**
	 * @memberof Controls
	 * @method anchor
	 * @description Insert the controls into the player container element.
	 */
	anchor() {
		var container = this.player.container.element;

		container.appendChild(this.container);
	}
}

export default Controls;
