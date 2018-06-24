import setUp from '../setup.js';
import tearDown from '../teardown.js';
import Player from '../../src/modules/player.js';
import Dispatcher from '../../src/modules/dispatcher.js';
import MasterInterval from '../../src/modules/interval.js';
import testLinks from '../../test-links.json';

beforeEach(setUp);
afterEach(tearDown);

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

test('Once a player is started, its master interval should be running', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }]
	});

	player.init();
	player.start();

	expect(player.masterInterval.isRunning).toBe(true);
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

test('When Player.next is called, the next video in the queue is played', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }, { source: testLinks.video }]
	});

	player.init();
	player.start();
	player.next();

	// Player.index starts at -1, and player.start() calls next()
	// for the first time. Therefore:
	// player.start() <- index should be 0
	// player.next() <- index should be 1
	expect(player.index).toBe(1);
	expect(player.currentVideo).toBe(player.queue[1]);
});

test('When Player.previous is called, the previous video in the queue is played', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [
			{ source: testLinks.video },
			{ source: testLinks.video },
			{ source: testLinks.video }
		]
	});

	player.init();
	player.start();
	player.next();
	player.next();
	player.previous();

	// Player.index starts at -1, and player.start() calls next()
	// for the first time. Therefore:
	// player.start() <- index should be 0
	// player.next() <- index should be 1
	// player.next() <- index should be 2
	// player.previous() <- index should be 1
	expect(player.index).toBe(1);
	expect(player.currentVideo).toBe(player.queue[1]);
});

test('When a video is assigned to "currentVideo", the "hasActiveVideo" method returns true', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }]
	});

	player.init();
	player.start();

	expect(player.hasActiveVideo()).toBe(true);
});

test('When a video is not assigned to "currentVideo", the "hasActiveVideo" method returns false', () => {
	var player = new Player({
		container: { parent: document.body },
		videos: [{ source: testLinks.video }]
	});

	player.init();

	expect(player.hasActiveVideo()).toBe(false);
});
