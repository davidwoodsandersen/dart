import setUp from '../setup.js';
import Dispatcher from '../../src/modules/dispatcher.js';

beforeEach(setUp);

test('The dispatcher\'s "subscribe" method adds an entry to the registry', () => {
	var dispatcher = new Dispatcher();
	var eventHandler = function() {};

	dispatcher.subscribe('play', eventHandler);

	expect(dispatcher.registry['play'][0]).toEqual(eventHandler);
});

test('The dispatcher\'s "publish" method calls the associated handlers', () => {
	var dispatcher = new Dispatcher();
	var test = {
		eventHandler: function() {}
	};

	jest.spyOn(test, 'eventHandler');

	dispatcher.subscribe('play', test.eventHandler);
	dispatcher.publish('play');

	expect(test.eventHandler).toHaveBeenCalledTimes(1);
});

test('Invalid events are not added to the registry', () => {
	var dispatcher = new Dispatcher();

	dispatcher.subscribe('fakeEvent', function() {});

	var addedToRegistry = 'fakeEvent' in dispatcher.registry;

	expect(addedToRegistry).toBeFalsy();
});

test('The dispatcher\'s "printEventReport" method logs data to the console', () => {
	var dispatcher = new Dispatcher();

	jest.spyOn(console, 'group').mockImplementation(() => {});
	jest.spyOn(console, 'groupEnd').mockImplementation(() => {});
	jest.spyOn(console, 'log').mockImplementation(() => {});

	dispatcher.printEventReport('test', {});

	expect(console.group).toHaveBeenCalled();
	expect(console.groupEnd).toHaveBeenCalled();
	expect(console.log).toHaveBeenCalled();
});
