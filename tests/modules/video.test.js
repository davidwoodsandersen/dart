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

test('Video.init anchors the video player in the DOM', () => {
	var video = new Video({
		source: testLinks.video,
		parent: document.body
	});

	jest.spyOn(HTMLElement.prototype, 'appendChild')
		.mockImplementation(() => {});

	video.init();

	expect(HTMLElement.prototype.appendChild).toHaveBeenCalledTimes(1);
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

test('Video.pause pauses the video file', () => {
	var video = new Video({
		source: testLinks.video,
		parent: document.body
	});

	jest.spyOn(HTMLMediaElement.prototype, 'play')
		.mockImplementation(() => {});

	jest.spyOn(HTMLMediaElement.prototype, 'pause')
		.mockImplementation(() => {});

	video.init();
	video.play();
	video.pause();

	expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1);
});

test('Video.on calls EventsManager.subscribe with both arguments', () => {
	var video = new Video({
		source: testLinks.video,
		parent: document.body
	});
	var eventHandler = function() {};

	jest.spyOn(video.eventsManager, 'subscribe');

	video.on('play', eventHandler);

	expect(video.eventsManager.subscribe).toBeCalledWith('play', eventHandler);
});
