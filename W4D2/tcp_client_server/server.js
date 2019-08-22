// The "net" module is part of node. It allows us to create TCP servers
const net = require('net');
const server = net.createServer((socket) => {
  // This callback will be called when ever a client makes a request to this server

  // It will be called once per connection

  // The first argument to this callback is `socket` and it represents the connection.
  // Its the `socket`'s job to listen for requests, 
  // respond to requests, and close connections, and check errors
  console.log('- Connection Opened! -')

  // Socket.on is a method of the socket object
  // its called an event listener and it is used to listen for events and respond.

  // the first argument of socket.on is a string of the event we are listening for
  // the second argument is a callback which does something when the event is triggered
  socket.on("data", (data) => {

    console.log(`Server got data!: ${data.toString()}`);
    socket.write(`Greetings! ${data}`)
  })
})

const PORT = 5000;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on port ${PORT} and address ${ADDRESS}`);
});