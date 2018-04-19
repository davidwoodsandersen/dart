import Video from '../../src/modules/video.js';

test('Video constructor creates a video element', () => {
	var video = new Video({});
	var hasVideoElement = video.element instanceof Element;

	expect(hasVideoElement).toBeTruthy();
});
