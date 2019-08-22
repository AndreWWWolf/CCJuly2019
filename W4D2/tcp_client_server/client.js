const name = process.argv[2];
const net = require('net');
const socket = net.Socket();

socket.on("data", (data) => {
  console.log(`${data}`);
})

const PORT = 5000;
const ADDRESS = "127.0.0.1";

socket.connect(PORT, ADDRESS, () => {
  console.log('Client Connected');
  
  // socket.write is used to send data through the connection
  socket.write(`${name}`);
})