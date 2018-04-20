import Player from '../../src/modules/player.js';
import testLinks from '../../test-links.json';

test('Player constructor creates a video element', () => {
	var player = new Player({});
	var hasVideoElement = player.element instanceof Element;

	expect(hasVideoElement).toBeTruthy();
});

test('Player.init sets the element "src" attribute to props.source', () => {
	var player = new Player({
		source: testLinks.video,
		parent: document.body
	});

	player.init();

	expect(player.element.getAttribute('src')).toEqual(testLinks.video);
});

test('Player.init anchors the video player in the DOM', () => {
	var player = new Player({
		source: testLinks.video,
		parent: document.body
	});

	jest.spyOn(HTMLElement.prototype, 'appendChild')
		.mockImplementation(() => {});

	player.init();

	expect(HTMLElement.prototype.appendChild).toHaveBeenCalledTimes(1);
});

test('Player.play plays the video file', () => {
	var player = new Player({
		source: testLinks.video,
		parent: document.body
	});

	jest.spyOn(HTMLMediaElement.prototype, 'play')
		.mockImplementation(() => {});

	player.init();
	player.play();

	expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
});

test('Player.pause pauses the video file', () => {
	var player = new Player({
		source: testLinks.video,
		parent: document.body
	});

	jest.spyOn(HTMLMediaElement.prototype, 'play')
		.mockImplementation(() => {});

	jest.spyOn(HTMLMediaElement.prototype, 'pause')
		.mockImplementation(() => {});

	player.init();
	player.play();
	player.pause();

	expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1);
});

test('Player.on calls EventsManager.subscribe with both arguments', () => {
	var player = new Player({
		source: testLinks.video,
		parent: document.body
	});
	var eventHandler = function() {};

	jest.spyOn(player.eventsManager, 'subscribe');

	player.on('play', eventHandler);

	expect(player.eventsManager.subscribe).toBeCalledWith('play', eventHandler);
});
