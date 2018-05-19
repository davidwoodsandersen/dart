import setUp from '../setup.js';
import { DOMHelpers } from '../../src/modules/helpers.js';

beforeEach(setUp);

test('DOMHelpers.getWidth returns the width of an element', () => {
	var testElement = document.createElement('div');
	testElement.style.width = '500px';

	var computedWidth = DOMHelpers.getWidth(testElement);

	expect(computedWidth).toBe(500);
});

test('DOMHelpers.getHeight returns the height of an element', () => {
	var testElement = document.createElement('div');
	testElement.style.height = '500px';

	var computedWidth = DOMHelpers.getHeight(testElement);

	expect(computedWidth).toBe(500);
});