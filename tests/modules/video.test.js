import Video from '../../src/modules/video.js';
import testLinks from '../../test-links.json';

test('Video.constructor assigns a video element to Video.element', () => {
	var video = new Video({});
	var isVideoElement = video.element instanceof HTMLVideoElement;

	expect(isVideoElement).toBeTruthy();
});

test('Video props.source input becomes source attribute of video element', () => {
	var input = { source: testLinks.video };
	var video = new Video(input);

	expect(video.element.getAttribute('src')).toEqual(input.source);
});

test('Video.play calls HTMLVideoElement.prototype.play', function() {
	var input = { source: testLinks.video };
	var video = new Video(input, {
		publish: () => {}
	});

	jest.spyOn(HTMLVideoElement.prototype, 'play')
		.mockImplementation(() => {});

	video.play();

	expect(HTMLVideoElement.prototype.play).toHaveBeenCalled();
});

test('Video.pause calls HTMLVideoElement.prototype.pause', function() {
	var input = { source: testLinks.video };
	var video = new Video(input, {
		publish: () => {}
	});

	jest.spyOn(HTMLVideoElement.prototype, 'pause')
		.mockImplementation(() => {});

	video.pause();

	expect(HTMLVideoElement.prototype.pause).toHaveBeenCalled();
});

test('Video.resize applies the parent node dimensions to the video element', () => {
	var parentNode = document.createElement('div');
	parentNode.style.width = '500px';
	parentNode.style.height = '500px';

	var video = new Video({});

	parentNode.appendChild(video.element);

	video.resize();

	expect(video.element.style.width).toBe('500px');
	expect(video.element.style.height).toBe('500px');
});
