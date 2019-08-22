// DEMO 2: Largest Number
// const net = require("net");
// const server = net.createServer(socket => {
//     socket.on("data", data => {
//         let num = data.toString();
//         let big = num.split(",");
//     console.log(`Reversed: ${Math.max.apply(Math, big)}`)
//     socket.write(`Roger That: ${Math.max.apply(Math, big)}`);
//     });
// });

// const PORT = 4000;

// server.listen(PORT);
// console.log("server listening on: " + PORT); 


// // BRANDON SOLUTION (uncomment once to run)

const net = require('net');

const server = net.createServer(socket => {
	socket.on('data', data => {
		let list = `${data}`.split(','); // list = [1,2,3,4,5];
		console.log('Data from client: ' + list);
        const max = Math.max.apply(Math, list);
        console.log(`the largest number is: ${max}`);
		// max is an integer
		// socket.write requires a buffer of bytes, or a string, NOT an integer
		// max+'' converts returns max as a string
		socket.write(`${max}`);
	});
});

server.listen(4000);
console.log('Server listening on port 4000');