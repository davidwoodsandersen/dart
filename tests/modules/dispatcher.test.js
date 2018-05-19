import setUp from '../setup.js';
import Dispatcher from '../../src/modules/dispatcher.js';

beforeEach(setUp);

test('Dispatcher.subscribe adds an entry to this.registry', () => {
	var dispatcher = new Dispatcher();
	var eventHandler = function() {};

	dispatcher.subscribe('play', eventHandler);

	expect(dispatcher.registry['play'][0]).toEqual(eventHandler);
});

test('Dispatcher.publish calls the associated handlers', () => {
	var dispatcher = new Dispatcher();
	var test = {
		eventHandler: function() {}
	};

	jest.spyOn(test, 'eventHandler');

	dispatcher.subscribe('play', test.eventHandler);
	dispatcher.publish('play');

	expect(test.eventHandler).toHaveBeenCalledTimes(1);
});

test('Invalid events are not added to this.registry', () => {
	var dispatcher = new Dispatcher();

	dispatcher.subscribe('fakeEvent', function() {});

	var addedToRegistry = 'fakeEvent' in dispatcher.registry;

	expect(addedToRegistry).toBeFalsy();
});
