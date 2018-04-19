const config = require('./package.json');
const fs = require('fs');

var args = process.argv.slice(2);

if (!args.length) {
	console.log('Please include a destination folder.');
	process.exit();
}

var target = args[0] + `/${config.vars.fileName}.js`;
var source = `./lib/${config.vars.fileName}.js`;

var readStream = fs.createReadStream(source);

readStream.on('error', (err) => {
	console.log(err);
	process.exit();
});

var writeStream = fs.createWriteStream(target);

writeStream.on('error', (err) => {
	console.log(err);
	process.exit();
});

writeStream.on('close', () => {
	console.log(`${config.vars.fileName}.js copied to ${target}`);
	process.exit();
});

readStream.pipe(writeStream);
