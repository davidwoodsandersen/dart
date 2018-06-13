import setUp from '../setup.js';
import tearDown from '../teardown.js';
import Container from '../../src/modules/container.js';

beforeEach(setUp);
afterEach(tearDown);

test('When the container is instantiated, the layout styles are injected', () => {
	jest.spyOn(Container.prototype, 'injectCss')
		.mockImplementation(() => {});

	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	expect(container.injectCss).toHaveBeenCalled();
});

test('When the container is instantiated, the player dimensions are set', () => {
	jest.spyOn(Container.prototype, 'setDimensions')
		.mockImplementation(() => {});

	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	expect(container.setDimensions).toHaveBeenCalled();
});

test('When the container is instantiated, the player loading screen is created', () => {
	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	expect(container.loadingScreen instanceof Node).toBe(true);
});

test('The "anchor" method appends the container element to the parent element', () => {
	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	container.anchor();

	expect(container.element.parentNode).toEqual(input.parent);
});

test('The "remove" method removes the container element from the DOM', () => {
	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	jest.spyOn(Node.prototype, 'removeChild')
		.mockImplementation(() => {});

	container.remove();

	expect(Node.prototype.removeChild).toHaveBeenCalledWith(container.element);
});

test('The "setDimensions" method applies the input dimensions to the container element', () => {
	var input = {
		dimensions: {
			width: 500,
			height: 500
		}
	};
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	container.setDimensions();

	expect(container.element.style.width).toEqual('500px');
	expect(container.element.style.height).toEqual('500px');
});

test('The "loadVideo" method appends a video element to the container', () => {
	var videoStub = {
		element: document.createElement('video'),
		resize: () => {},
		initEvents: () => {}
	};
	var dispatcher = { publish: () => {} };
	var container = new Container({}, dispatcher);

	container.loadVideo(videoStub);

	expect(videoStub.element.parentNode).toEqual(container.videoContainer);
});
