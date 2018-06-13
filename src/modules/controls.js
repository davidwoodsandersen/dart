/**
 * @module controls
 * @description Hosts all player-controls-related code and the Controls class.
 */

import selectors from '../constants/selectors.js';
import { DOMHelpers } from './helpers.js';

const { createElement } = DOMHelpers;

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
		this.container = document.createElement('div');
		this.container.className = selectors.CONTROLS_CONTAINER_CLASS;

		this.build(player);
	}

	/**
	 * @memberof Controls
	 * @method build
	 * @param {object} player - The player instance to bind the controls to.
	 * @description Create and organize the controls HTML.
	 */
	build(player) {
		var playButton = this.createButton({
			classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PLAY_BUTTON}`,
			action: () => { player.play() }
		});

		var pauseButton = this.createButton({
			classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PAUSE_BUTTON}`,
			action: () => { player.pause() }
		});

		this.addControl(playButton);
		this.addControl(pauseButton);

		if (player.isPlaylist) {
			let nextButton = this.createButton({
				classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_NEXT_BUTTON}`,
				action: () => { player.next() }
			});

			let previousButton = this.createButton({
				classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PREVIOUS_BUTTON}`,
				action: () => { player.previous() }
			});

			this.addControl(nextButton);
			this.addControl(previousButton);
		}
	}

	/**
	 * @memberof Controls
	 * @method addControl
	 * @param {object} control - A DOM node to append to the container.
	 * @description - Add a specific control to the controls UI.
	 */
	addControl(control) {
		this.container.appendChild(control);
	}

	/**
	 * @memberof Controls
	 * @method createButton
	 * @param {object} config - The configuration for the button.
	 * @description - Creates and returns a button for the controls.
	 */
	createButton(config) {
		var { classes, action } = config;

		return createElement('div', {
			className: classes,
			onclick: action
		});
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
