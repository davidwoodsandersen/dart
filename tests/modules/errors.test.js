import setUp from '../setup.js';
import PlayerError from '../../src/modules/errors.js';

beforeEach(setUp);

test('PlayerError.report calls the dispatcher', () => {
	var dispatcher = { publish: () => {} };
	var error = new PlayerError({}, dispatcher);

	jest.spyOn(dispatcher, 'publish');

	error.report();

	expect(dispatcher.publish).toHaveBeenCalled();
});
