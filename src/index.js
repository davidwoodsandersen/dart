import Video from './modules/video.js';

class Dart {
	create(config) {
		return new Video(config);
	}
}

window.$GLOBAL_OBJECT$ = new Dart();