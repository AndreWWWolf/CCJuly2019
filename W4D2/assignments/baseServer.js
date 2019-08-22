// LECTURE VERSION
const name = process.argv[2];
const net = require('net');
const socket = net.Socket();

socket.on("data", (data) => {
  console.log('socket recieve data');
})

const PORT = 4000;
const ADDRESS = "127.0.0.1";

socket.connect(PORT, ADDRESS, () => {
  console.log('Client Connected');
  
  // socket.write is used to send data through the connection
  socket.write(`${name}`);
})



// ANDREWS ATTEMPT
// const net = require("net");

// const server = net.createServer(socket => {
//   socket.on('data', data => {

    
//     console.log(`Hello ${data}`);
//     socket.write(`Hello ${data}`);
//   });
// });

// const PORT = 4000;
// server.listen(PORT);
// console.log('Server listening on ' + PORT);