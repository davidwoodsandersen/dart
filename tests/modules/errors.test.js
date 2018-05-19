import setUp from '../setup.js';
import PlayerError from '../../src/modules/errors.js';
import Dispatcher from '../../src/modules/dispatcher.js';

beforeEach(setUp);

test('The PlayerError "report" method triggers a dispatcher "error" event', () => {
	var dispatcher = { publish: () => {} };
	var error = new PlayerError({}, dispatcher);

	jest.spyOn(dispatcher, 'publish');

	error.report();

	expect(dispatcher.publish).toHaveBeenCalled();
});
