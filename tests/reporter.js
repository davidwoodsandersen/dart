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
			this.numPassedTestSuites < this.numTotalTestSuites ||
			this.numPassedTests < this.numTotalTests
		);
	}
}

module.exports = TestReporter;
