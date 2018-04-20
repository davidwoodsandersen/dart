import Container from '../../src/modules/container.js';

test('Container.anchor appends Container.element to Container.parent', () => {
	var input = { parent: document.body };
	var container = new Container(input);

	container.anchor();

	expect(container.element.parentNode).toEqual(input.parent);
});

test('Container.remove calls removeChild and passes Container.element', () => {
	var input = { parent: document.body };
	var container = new Container(input);

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
	var container = new Container(input);

	container.setDimensions();

	expect(container.element.style.width).toEqual('500px');
	expect(container.element.style.height).toEqual('500px');
});

test('Container.loadVideo appends a video element to Container.element', () => {
	var videoStub = {
		element: document.createElement('video'),
		resize: () => {}
	};
	var container = new Container({});

	container.loadVideo(videoStub);

	expect(videoStub.element.parentNode).toEqual(container.element);
});
