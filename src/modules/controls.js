/**
 * @module controls
 * @description Hosts all player-controls-related code and the Controls class.
 */

import selectors from '../constants/selectors.js';
import { playIcon, pauseIcon, previousIcon, nextIcon } from '../constants/icons.js';
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

		this.build(player);
	}

	/**
	 * @memberof Controls
	 * @method build
	 * @param {object} player - The player instance to bind the controls to.
	 * @description Create and organize the controls HTML.
	 */
	build(player) {
		this.container = document.createElement('div');
		this.container.className = selectors.CONTROLS_CONTAINER_CLASS;

		var playButton = this.createButton({
			classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PLAY_BUTTON}`,
			html: playIcon,
			action: () => { player.play() }
		});

		var pauseButton = this.createButton({
			classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PAUSE_BUTTON}`,
			html: pauseIcon,
			action: () => { player.pause() }
		});

		var nextButton = this.createButton({
			classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_NEXT_BUTTON}`,
			html: nextIcon,
			action: () => { player.next() }
		});

		var previousButton = this.createButton({
			classes: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PREVIOUS_BUTTON}`,
			html: previousIcon,
			action: () => { player.previous() }
		});

		this.container.appendChild(playButton);
		this.container.appendChild(pauseButton);
		this.container.appendChild(nextButton);
		this.container.appendChild(previousButton);
	}

	/**
	 * @memberof Controls
	 * @method createButton
	 * @param {object} config - The configuration for the button.
	 * @description - Creates and returns a button for the controls.
	 */
	createButton(config) {
		var { classes, html, action } = config;

		return createElement('div', {
			className: classes,
			innerHTML: html,
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
