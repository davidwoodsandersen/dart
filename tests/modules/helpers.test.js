import setUp from '../setup.js';
import { DOMHelpers } from '../../src/modules/helpers.js';

beforeEach(setUp);

test('The "getWidth" DOM helper returns the width of an element', () => {
	var testElement = document.createElement('div');
	testElement.style.width = '500px';

	var computedWidth = DOMHelpers.getWidth(testElement);

	expect(computedWidth).toBe(500);
});

test('The "getHeight" DOM helper returns the height of an element', () => {
	var testElement = document.createElement('div');
	testElement.style.height = '500px';

	var computedWidth = DOMHelpers.getHeight(testElement);

	expect(computedWidth).toBe(500);
});
