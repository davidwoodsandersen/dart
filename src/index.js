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
	 * @description Generates a new instance of the Player class.
	 */
	create(config) {
		return new Player(config);
	}
}

window.$GLOBAL_OBJECT$ = new Dart();
