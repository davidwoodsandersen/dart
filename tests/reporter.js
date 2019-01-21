// Used to notify circle-ci of
// test failures and errors.
class TestReporter {
	constructor(globalConfig, options) {
		this._globalConfig = globalConfig;
		this._options = options;
	}

	onRunComplete(contexts, results) {
		if (this.failed(results)) {
			console.log('Test failure detected.');
			process.exit(1);
		}
	}

	failed(results) {
		return (
			results.numPassedTestSuites < results.numTotalTestSuites ||
			results.numPassedTests < results.numTotalTests
		);
	}
}

module.exports = TestReporter;
