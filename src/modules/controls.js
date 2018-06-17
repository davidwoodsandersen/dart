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
	 * @param {object} player - The video player instance.
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

		this.addControl(this.createVolumeSlider());
		this.addControl(this.createProgressBar());
	}

	/**
	 * @memberof Controls
	 * @method addControl
	 * @param {object} control - A DOM node to append to the container.
	 * @description Adds a specific control to the controls UI.
	 */
	addControl(control) {
		this.container.appendChild(control);
	}

	/**
	 * @memberof Controls
	 * @method createVolumeSlider
	 * @description Creates the volume slider. The input range is 0-100, but
	 * the value is converted to range 0-1 before being assigned to the player.
	 */
	createVolumeSlider() {
		var _this = this;
		var slider = createElement({
			type: 'input',
			attributes: { type: 'range', min: '0', max: '100' },
			properties: {
				className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_VOLUME_SLIDER}`,
				value: (_this.player.volume * 100),
				onchange: () => {
					var input = (slider.value / 100).toFixed(1);

					if (input !== _this.player.volume) {
						_this.player.updateVolume(input);
					}
				}
			}
		});

		return slider;
	}

	/**
	 * @memberof Controls
	 * @method createProgressBar
	 * @description Creates the progress bar for the currently playing video.
	 */
	createProgressBar() {
		var _this = this;
		var progressBar = createElement({
			type: 'div',
			properties: {
				className: `${selectors.CONTROLS_PROGRESS_BAR}`,
				onclick: (e) => {
					if (_this.player.hasActiveVideo()) {
						var offset = e.offsetX;
						var elementWidth = e.target.offsetWidth;
						var position = (offset / elementWidth).toFixed(2);
						var videoDuration = _this.player.getCurrentDuration();
						var newTime = (videoDuration * position).toFixed(0);

						_this.player.setCurrentTime(newTime);
					}
				}
			}
		});
		var progress = createElement({
			type: 'div',
			properties: { className: `${selectors.CONTROLS_PROGRESS}` }
		});

		progressBar.appendChild(progress);

		this.player.on('timeupdate', () => {
			var currentTime = _this.player.getCurrentTime();
			var duration = _this.player.getCurrentDuration();
			var percentage = ((currentTime / duration) * 100).toFixed(2);

			progress.style.width = (percentage + '%');
		});

		return progressBar;
	}

	/**
	 * @memberof Controls
	 * @method createButton
	 * @param {object} type - The type of button to create.
	 * @description Creates and returns a button for the controls.
	 */
	createButton(type) {
		var _this = this;

		switch (type) {
			case 'play':
				return createElement({
					type: 'div',
					properties: {
						className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PLAY_BUTTON}`,
						onclick: () => { _this.player.play() }
					}
				});
			case 'pause':
				return createElement({
					type: 'div',
					properties: {
						className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PAUSE_BUTTON}`,
						onclick: () => { _this.player.pause() }
					}
				});
			case 'next':
				return createElement({
					type: 'div',
					properties: {
						className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_NEXT_BUTTON}`,
						onclick: () => { _this.player.next() }
					}
				});
			case 'previous':
				return createElement({
					type: 'div',
					properties: {
						className: `${selectors.CONTROLS_BUTTON_CLASS} ${selectors.CONTROLS_PREVIOUS_BUTTON}`,
						onclick: () => { _this.player.previous() }
					}
				});
			default:
				return createElement({ type: 'div' });
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
