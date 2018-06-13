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
	 * @description Create and organize the controls HTML.
	 */
	build() {
		this.addControl(this.createButton('play'));
		this.addControl(this.createButton('pause'));

		if (this.player.isPlaylist) {
			this.addControl(this.createButton('next'));
			this.addControl(this.createButton('previous'));
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
	 * @param {object} type - The type of button to create.
	 * @description - Creates and returns a button for the controls.
	 */
	createButton(type) {
		var _this = this;

		switch (type) {
			case 'play':
				return createElement('div', {
					className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PLAY_BUTTON}`,
					onclick: () => { _this.player.play() }
				});
			case 'pause':
				return createElement('div', {
					className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PAUSE_BUTTON}`,
					onclick: () => { _this.player.pause() }
				});
			case 'next':
				return createElement('div', {
					className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_NEXT_BUTTON}`,
					onclick: () => { _this.player.next() }
				});
			case 'previous':
				return createElement('div', {
					className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PREVIOUS_BUTTON}`,
					onclick: () => { _this.player.previous() }
				});
			default:
				return createElement('div', {});
		}
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
