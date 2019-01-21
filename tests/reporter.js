// Used to notify circle-ci of
// test failures and errors.
class TestReporter {
	constructor(globalConfig, options) {
		this._globalConfig = globalConfig;
		this._options = options;
	}

	onRunComplete(contexts, results) {
		if (!results.success) {
			console.log('Test failure detected.');
			process.exit(1);
		}
	}
}

module.exports = TestReporter;
