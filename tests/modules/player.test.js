import Player from '../../src/modules/player.js';
import Dispatcher from '../../src/modules/dispatcher.js';
import MasterInterval from '../../src/modules/interval.js';
import testLinks from '../../test-links.json';

test('When a player is instantiated, the video queue is created', () => {
	var player1 = new Player({
		container: {},
		videos: [{ source: testLinks.video }]
	});

	expect(player1.queue.length).toBe(1);

	var player2 = new Player({
		container: {},
		videos: [{ source: testLinks.video }, { source: testLinks.video }]
	});

	expect(player2.queue.length).toBe(2);
});

test('When a player is instantiated, it instantiates a dispatcher', () => {
	var player = new Player({
		container: {},
		videos: [{ source: testLinks.video }]
	});

	expect(player.dispatcher instanceof Dispatcher).toBe(true);
});

test('When a player is instantiated, its master interval is not yet created', () => {
	var player = new Player({
		container: {},
		videos: [{ source: testLinks.video }]
	});

	expect(typeof player.masterInterval).toBe('undefined');
});

test('When a player is initialized, its master interval is created', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }]
	});

	player.init();

	expect(player.masterInterval instanceof MasterInterval).toBe(true);
});

test('When a player is destroyed, its master interval no longer runs', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }]
	});

	player.init();
	player.start();
	player.destroy();

	expect(player.masterInterval.isRunning).toBe(false);
});

test('When player.next is called, the next video in the queue is played', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }, { source: testLinks.video }]
	});

	player.init();
	player.start();
	player.next();

	// Player.index starts at -1, and player.start() calls next()
	// for the first time. Therefore after the second call to next(),
	// player.index should be 1 and the second video should be played.
	expect(player.index).toBe(1);
	expect(player.currentVideo).toBe(player.queue[1]);
});
