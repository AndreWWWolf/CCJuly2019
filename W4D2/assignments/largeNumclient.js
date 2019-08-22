// DEMO 2: Largest Number

// const net = require('net');

// const socket = net.Socket();

// const SERVER_PORT = 4000;

// socket.connect(SERVER_PORT, 'localhost', () => {
//   console.log('Connected to ' + SERVER_PORT);
//   socket.write(process.argv[2]);
// });

// socket.on('data', data => {
//   console.log(data.toString());
//   socket.end()
// });


// // BRANDON SOLUTION (uncomment once to run)
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const client = new net.Socket();

client.connect(4000, 'localhost', () => {
	rl.question('enter comma separated numbers like this 1,2,3,4: ', input => {
		client.write(input);
	});
});

client.on('data', data => {
	console.log(data + '');
	process.exit();
});
