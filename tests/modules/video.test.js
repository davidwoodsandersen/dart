import setUp from '../setup.js';
import Video from '../../src/modules/video.js';
import testLinks from '../../test-links.json';

beforeEach(setUp);

test('When a video is instantiated, it creates a new HTMLVideoElement', () => {
	var video = new Video({});

	expect(video.element instanceof HTMLVideoElement).toBe(true);
});

test('When a video is instantiated, the "source" input becomes the src attribute of the element', () => {
	var input = { source: testLinks.video };
	var video = new Video(input);

	expect(video.element.getAttribute('src')).toEqual(input.source);
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
