// These actions will be taken before every test:
export default function setUp() {
	jest.spyOn(HTMLVideoElement.prototype, 'play')
		.mockImplementation(() => {});

	jest.spyOn(HTMLVideoElement.prototype, 'pause')
		.mockImplementation(() => {});
}