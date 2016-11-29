#!/usr/bin/env node

var spawn = require('child_process').spawn;

var server = spawn('http-server', ['.', '-p', '9911']);

var child = spawn('./node_modules/.bin/mocha-phantomjs', [
	'http://localhost:9911/test/spec/index.html',
	'--timeout', '25000',
	'--hooks', './test/hooks.js',
	'-p', '/usr/local/bin/phantomjs'
]);

child.on('close', function (code) {
	console.log('Mocha process exited with code ' + code);
	server.kill('SIGINT');
	if (code > 0) process.exit(1);
});
