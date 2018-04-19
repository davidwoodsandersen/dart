// import jest from 'jest';
import Video from '../../src/modules/video.js';
import testLinks from '../../test-links.json';

test('Video constructor creates a video element', () => {
	var video = new Video({});
	var hasVideoElement = video.element instanceof Element;

	expect(hasVideoElement).toBeTruthy();
});

test('Video.init sets the element "src" attribute to props.source', () => {
	var video = new Video({
		source: testLinks.video,
		parent: document.body
	});

	video.init();

	expect(video.element.getAttribute('src')).toEqual(testLinks.video);
});

test('Video.play plays the video file', () => {
	var video = new Video({
		source: testLinks.video,
		parent: document.body
	});

	jest.spyOn(HTMLMediaElement.prototype, 'play')
		.mockImplementation(() => {});

	video.init();
	video.play();

	expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
});
