import Container from '../../src/modules/container.js';

test('Container.anchor appends Container.element to Container.parent', () => {
	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	container.anchor();

	expect(container.element.parentNode).toEqual(input.parent);
});

test('Container.remove calls removeChild and passes Container.element', () => {
	var input = { parent: document.body };
	var dispatcher = { publish: () => {} };
	var container = new Container(input, dispatcher);

	jest.spyOn(Node.prototype, 'removeChild')
		.mockImplementation(() => {});

	container.remove();

	expect(Node.prototype.removeChild).toHaveBeenCalledWith(container.element);
});

test('Container.setDimensions applies Container.dimensions.{width, height} to Container.element', () => {
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

test('Container.loadVideo appends a video element to Container.videoContainer', () => {
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
