import Player from '../../src/modules/player.js';
import testLinks from '../../test-links.json';

test('Player.constructor initializes the video queue', () => {
	var player = new Player({
		container: {},
		videos: [
			{ source: testLinks.video }
		]
	});

	expect(player.queue.length).toBe(1);
});

test('Player.play calls Player.currentVideo.play', () => {
	var player = new Player({
		container: {
			parent: document.body
		},
		videos: [
			{ source: testLinks.video }
		]
	});

	player.init();

	jest.spyOn(player.currentVideo, 'play')
		.mockImplementation(() => {});

	player.play();

	expect(player.currentVideo.play).toHaveBeenCalled();
});

test('Player.pause calls Player.currentVideo.pause', () => {
	var player = new Player({
		container: {
			parent: document.body
		},
		videos: [
			{ source: testLinks.video }
		]
	});

	player.init();

	jest.spyOn(player.currentVideo, 'pause')
		.mockImplementation(() => {});

	player.pause();

	expect(player.currentVideo.pause).toHaveBeenCalled();
});

test('Player.next calls Player.container.loadVideo', () => {
	var player = new Player({
		container: {
			parent: document.body
		},
		videos: [
			{ source: testLinks.video }
		]
	});

	player.init();

	jest.spyOn(player.container, 'loadVideo')
		.mockImplementation(() => {});

	player.next();

	expect(player.container.loadVideo).toHaveBeenCalled();
});
