/**
 * @module controls
 * @description Hosts all player-controls-related code and the Controls class.
 */

import selectors from '../constants/selectors.js';
import { playIcon, pauseIcon, previousIcon, nextIcon } from '../constants/icons.js';

/**
 * @class
 * @description Facilitates user interaction with the video player.
 */
class Controls {
	/**
	 * @memberof Controls
	 * @constructor
	 * @param {object} actions - Actions from the player API.
	 * @param {object} parentNode - The element to append the controls to.
	 * @description Methods from the Player instance are passed
	 * on an as-needed basis.
	 */
	constructor(player, parentNode) {
		this.player = player;
		this.parent = parentNode;

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
		playButton.className = (
			selectors.CONTROLS_BUTTON_CLASS + ' ' +
			selectors.CONTROLS_PLAY_BUTTON
		);
		playButton.innerHTML = playIcon;
		playButton.onclick = () => { this.player.play() };

		var pauseButton = document.createElement('div');
		pauseButton.className = (
			selectors.CONTROLS_BUTTON_CLASS + ' ' +
			selectors.CONTROLS_PAUSE_BUTTON
		);
		pauseButton.innerHTML = pauseIcon;
		pauseButton.onclick = () => { this.player.pause() };

		var nextButton = document.createElement('div');
		nextButton.className = (
			selectors.CONTROLS_BUTTON_CLASS + ' ' +
			selectors.CONTROLS_NEXT_BUTTON
		);
		nextButton.innerHTML = nextIcon;
		nextButton.onclick = () => { this.player.next() };

		var previousButton = document.createElement('div');
		previousButton.className = (
			selectors.CONTROLS_BUTTON_CLASS + ' ' +
			selectors.CONTROLS_PREVIOUS_BUTTON
		);
		previousButton.innerHTML = previousIcon;
		previousButton.onclick = () => { this.player.previous() };

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
		this.parent.appendChild(this.container);
	}
}

export default Controls;
