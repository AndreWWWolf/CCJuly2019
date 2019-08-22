// BASE CLIENT FILE
const net = require('net');

const socket = net.Socket();

const SERVER_PORT = 4000;

socket.connect(SERVER_PORT, 'localhost', () => {
  console.log('Connected to ' + SERVER_PORT);
  socket.write(process.argv[2]);
});

socket.on('data', data => {
  console.log(data.toString());
  socket.end()
});