import setUp from '../setup.js';
import tearDown from '../teardown.js';
import MasterInterval from '../../src/modules/interval.js';

beforeEach(setUp);
afterEach(tearDown);

test('When the master interval is instantiated, the interval is not running', () => {
	var interval = new MasterInterval();

	expect(typeof interval.interval).toBe('undefined');
});

test('When the master interval is instantiated, the isRunning flag is set to false', () => {
	var interval = new MasterInterval();

	expect(interval.isRunning).toBe(false);
});

test('Once the master interval\'s "run" method is called, the interval is running', () => {
	var interval = new MasterInterval();

	interval.run();

	// (In JS the type of an interval is a number)
	expect(typeof interval.interval).toBe('number');
});

test('Once the master interval\'s "run" method is called, the isRunning flag is set to true', () => {
	var interval = new MasterInterval();

	interval.run();

	expect(interval.isRunning).toBe(true);
});

test('Once the master interval\'s "destroy" method is called, the interval is cleared', () => {
	var interval = new MasterInterval();

	jest.spyOn(window, 'clearInterval');

	interval.run();
	interval.destroy();

	expect(window.clearInterval).toHaveBeenCalled();
});

test('Once the master interval\'s "destroy" method is called, the isRunning flag is set to false', () => {
	var interval = new MasterInterval();

	interval.run();
	interval.destroy();

	expect(interval.isRunning).toBe(false);
});
