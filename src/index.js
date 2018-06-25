import Player from './modules/player.js';

/**
 * @class
 * @description Gets instantiated and written to the window
 * as the value of "globalVarName" in package.json.
 */
class Dart {
	/**
	 * @memberof Dart
	 * @method create
	 * @description Generates a new instance of the Player class
	 * and exposes a limited interface.
	 */
	create(config) {
		var player = new Player(config);

		return {
			destroy: () => { player.destroy(); },
			init: () => { player.init(); },
			next: () => { player.next(); },
			on: (event, callback) => { player.on(event, callback) },
			pause: () => { player.pause(); },
			play: () => { player.play(); },
			previous: () => { player.previous(); },
			start: () => { player.start(); }
		}
	}
}

window.$GLOBAL_OBJECT$ = new Dart();
