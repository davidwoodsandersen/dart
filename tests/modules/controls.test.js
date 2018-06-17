import setUp from '../setup.js';
import tearDown from '../teardown.js';
import Player from '../../src/modules/player.js';
import Controls from '../../src/modules/controls.js';
import selectors from '../../src/constants/selectors.js';

beforeEach(setUp);
afterEach(tearDown);

function createMockControls(player, parent) {
	var player = player || {};
	var parent = parent || document.createElement('div');

	player.on = player.on || function() {};

	return new Controls(player, parent);
}

test('Controls are built on instantiation', () => {
	jest.spyOn(Controls.prototype, 'build')
		.mockImplementation(() => {});

	var controls = new Controls(null, null);

	expect(controls.build).toHaveBeenCalled();
});

test('When the controls are built, the play button is added to the container', () => {
	var parent = document.createElement('div');
	var controls = createMockControls(null, parent);

	controls.anchor();

	var playButtonInContainer = parent.querySelectorAll(`.${selectors.CONTROLS_PLAY_BUTTON}`).length > 0;

	expect(playButtonInContainer).toBe(true);
});

test('When the controls are built, the pause button is added to the container', () => {
	var parent = document.createElement('div');
	var controls = createMockControls(null, parent);

	controls.anchor();

	var pauseButtonInContainer = parent.querySelectorAll(`.${selectors.CONTROLS_PAUSE_BUTTON}`).length > 0;

	expect(pauseButtonInContainer).toBe(true);
});

test('When the controls are built, the next button is added to the container', () => {
	var parent = document.createElement('div');
	var controls = createMockControls({ isPlaylist: true }, parent);

	controls.anchor();

	var nextButtonInContainer = parent.querySelectorAll(`.${selectors.CONTROLS_NEXT_BUTTON}`).length > 0;

	expect(nextButtonInContainer).toBe(true);
});

test('When the controls are built, the previous button is added to the container', () => {
	var parent = document.createElement('div');
	var controls = createMockControls({ isPlaylist: true }, parent);

	controls.anchor();

	var previousButtonInContainer = parent.querySelectorAll(`.${selectors.CONTROLS_PREVIOUS_BUTTON}`).length > 0;

	expect(previousButtonInContainer).toBe(true);
});

test('The "createButton" method returns an HTML element', () => {
	var testButton = Controls.prototype.createButton({});

	expect(testButton instanceof Node).toBe(true);
});

test('The "createButton" method assigns the correct classes', () => {
	var testButton = Controls.prototype.createButton('play');

	expect(testButton.getAttribute('class').split(' ')).toContain(`${selectors.CONTROLS_PLAY_BUTTON}`);
});

test('The "createButton" method assigns an onclick action', () => {
	var testButton = Controls.prototype.createButton('play');

	expect(typeof testButton.onclick).toBe('function');
});

test('The "addControl" method appends an element to the controls container', () => {
	var parent = document.createElement('div');
	var testElement = document.createElement('div');
	var controls = createMockControls(null, parent);

	controls.addControl(testElement);

	expect(testElement.parentElement).toBe(controls.container);
});
