import setUp from '../setup.js';
import tearDown from '../teardown.js';
import { DOMHelpers } from '../../src/modules/helpers.js';

beforeEach(setUp);
afterEach(tearDown);

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

test('The "createElement" DOM helper returns an HTML element', () => {
	var testElement = DOMHelpers.createElement({ type: 'div' });

	expect(testElement instanceof Node).toBe(true);
});

test('The properties passed to "createElement" are assigned to the element', () => {
	var testElement = DOMHelpers.createElement({
		type: 'div',
		properties: { testFlag: 1 }
	});

	expect('testFlag' in testElement).toBe(true);
});

test('The HTML attributes passed to "createElement" are assigned to the element', () => {
	var testElement = DOMHelpers.createElement({
		type: 'div',
		attributes: { 'data-test-attr': '1' }
	});

	expect(testElement.getAttribute('data-test-attr')).toBe('1');
});

test('The type of element returned by "createElement" matches the type argument', () => {
	var testElement = DOMHelpers.createElement({ type: 'li' });

	expect(testElement.nodeName).toBe('LI');
});
