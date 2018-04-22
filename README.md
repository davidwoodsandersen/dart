# :dart: Dart

Dart is an all-purpose JavaScript video player.

### Development

- Run `npm install` to install dependencies.
- You can customize the file name, output path and global variable name in [package.json](package.json).
- Run `npm run build` to generate a compiled static asset in the `lib` folder.
- Import the asset file into your project.
- You can also run `npm run dev` to automate the build during development.

### Example Usage

```javascript
var video = dart.create({
	controls: true,
	playlist: true,
	container: {
		id: 'example-video',
		parent: document.getElementById('video'),
		dimensions: {
			width: 900,
			height: 550
		}
	},
	videos: [
		{ source: 'https://example.link/video1.mp4' },
		{ source: 'https://example.link/video2.mp4' },
	]
});

video.init();
video.play();
```

### Documentation

Documentation for the player API is programmatically generated through [JSDoc](http://usejsdoc.org/). Read it [here](docs/api.md). Update the docs by running `npm run docs`.

### Testing

Unit tests are implemented using [Jest](https://facebook.github.io/jest/). Run `npm run test` to launch the test suite.

### Features

|Description|Status|
|-----------|------|
|Debug mode: monitor player events in real time.|:white_check_mark:|
|Playlists: queue multiple video files to be played.|:white_check_mark:|
|Custom themes: design your own controls UI|:construction:|
