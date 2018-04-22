# :dart: Dart

Dart is an all-purpose JavaScript video player.

### Usage

- Run `npm install` to install dependencies.
- You can customize the file name and global variable name in [package.json](package.json).
- Run `npm run build` to generate a compiled static asset in the `lib` folder.
- Import the asset file into your project.
- You can also run `npm run publish` to compile the asset and copy it directly to your project:
	- `npm run publish ~/my/project/directory`

### Documentation

Documentation for the player API is programmatically generated through [JSDoc](http://usejsdoc.org/). Read it [here](docs/api.md). Update the docs by running `npm run docs`.

### Testing

Unit tests are implemented using [Jest](https://facebook.github.io/jest/). Run `npm run test` to launch the test suite.

### Features

|Description|Status|
|-----------|------|
|Debug mode: monitor player events in real time.|:white_check_mark:|
|Playlists: queue multiple video files to be played.|:white_check_mark:|
