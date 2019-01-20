class TestReporter {
	constructor(globalConfig, options) {
		this._globalConfig = globalConfig;
		this._options = options;
	}

	getLastError() {
		if (this._shouldFail) {
			return new Error();
		}
	}
}

module.exports = TestReporter;
