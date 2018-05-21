import setUp from '../setup.js';
import tearDown from '../teardown.js';
import Video from '../../src/modules/video.js';
import testLinks from '../../test-links.json';

beforeEach(setUp);
afterEach(tearDown);

test('When a video is instantiated, it creates a new HTMLVideoElement', () => {
	var video = new Video({});

	expect(video.element instanceof HTMLVideoElement).toBe(true);
});

test('When a video is instantiated, the "source" input becomes the src attribute of the element', () => {
	var input = { source: testLinks.video };
	var video = new Video(input);

	expect(video.element.getAttribute('src')).toEqual(input.source);
});

test('When a video is instantiated, its dispatcher events are initialized', () => {
	jest.spyOn(Video.prototype, 'initEvents')
		.mockImplementation(() => {});

	var input = { source: testLinks.video };
	var video = new Video(input);

	expect(video.initEvents).toHaveBeenCalled();
});

test('The video\'s "play" method calls HTMLVideoElement.prototype.play', function() {
	var input = { source: testLinks.video };
	var video = new Video(input, { publish: () => {} });

	jest.spyOn(HTMLVideoElement.prototype, 'play')
		.mockImplementation(() => {});

	video.play();

	expect(HTMLVideoElement.prototype.play).toHaveBeenCalled();
});

test('The video\'s "pause" method calls HTMLVideoElement.prototype.pause', function() {
	var input = { source: testLinks.video };
	var video = new Video(input, { publish: () => {} });

	jest.spyOn(HTMLVideoElement.prototype, 'pause')
		.mockImplementation(() => {});

	video.pause();

	expect(HTMLVideoElement.prototype.pause).toHaveBeenCalled();
});

test('The video\'s "resize" method applies the container dimensions to the video element', () => {
	var parentNode = document.createElement('div');
	parentNode.style.width = '500px';
	parentNode.style.height = '500px';

	var videoContainer = document.createElement('div');
	var video = new Video({});

	parentNode.appendChild(videoContainer);
	videoContainer.appendChild(video.element);

	video.resize();

	expect(video.element.style.width).toBe('500px');
	expect(video.element.style.height).toBe('500px');
});

test('The video\'s "reset" method sets the video back to its beginning', () => {
	var input = { source: testLinks.video };
	var video = new Video(input, { publish: () => {} });

	video.element.currentTime = 100;
	video.hasBeenStarted = true;

	video.reset();

	expect(video.element.currentTime).toBe(0);
	expect(video.hasBeenStarted).toBe(false);
});

test('The video\'s "getReadyState" method returns the element\'s ready state', () => {
	var input = { source: testLinks.video };
	var video = new Video(input, { publish: () => {} });

	// Stub video element:
	video.element = {};
	video.element.readyState = 4;

	expect(video.getReadyState()).toBe(4);

	video.element.readyState = 1;

	expect(video.getReadyState()).toBe(1);
});
