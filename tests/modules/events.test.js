import EventsManager from '../../src/modules/events.js';

test('EventsManager.subscribe adds an entry to this.registry', () => {
	var eventsManager = new EventsManager();
	var eventHandler = function() {};

	eventsManager.subscribe('play', eventHandler);

	expect(eventsManager.registry['play'][0]).toEqual(eventHandler);
});

test('EventsManager.publish calls the associated handlers', () => {
	var eventsManager = new EventsManager();
	var test = {
		eventHandler: function() {}
	};

	jest.spyOn(test, 'eventHandler');

	eventsManager.subscribe('play', test.eventHandler);
	eventsManager.publish('play');

	expect(test.eventHandler).toHaveBeenCalledTimes(1);
});

test('Invalid events are not added to this.registry', () => {
	var eventsManager = new EventsManager();

	eventsManager.subscribe('fakeEvent', function() {});

	var addedToRegistry = 'fakeEvent' in eventsManager.registry;

	expect(addedToRegistry).toBeFalsy();
});
