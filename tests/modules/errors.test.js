import setUp from '../setup.js';
import tearDown from '../teardown.js';
import PlayerError from '../../src/modules/errors.js';

beforeEach(setUp);
afterEach(tearDown);

test('The PlayerError "report" method triggers a dispatcher "error" event', () => {
	var dispatcher = { publish: () => {} };
	var error = new PlayerError({}, dispatcher);

	jest.spyOn(dispatcher, 'publish');

	error.report();

	expect(dispatcher.publish).toHaveBeenCalled();
});
