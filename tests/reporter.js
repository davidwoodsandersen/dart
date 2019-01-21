class TestReporter {
	constructor(globalConfig, options) {
		this._globalConfig = globalConfig;
		this._options = options;
	}

	onRunComplete(contexts, results) {
		if (results.snapshot.failure) {
			console.log('Test failure detected.');
			process.exit(1);
		}
	}
}

module.exports = TestReporter;
