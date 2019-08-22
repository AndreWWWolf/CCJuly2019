const http = require('http');
const url = require('url');

// When creating a server we pass a callback that will be called when
// a client makes a request to the server.
// clients to an http server are usually browsers (chrome, firefox, ect)


// http://localhost:4000/temp?celsius=90&name=Bob&job=Server
// scheme | host  | port | path | query (search)
const server = http.createServer((request, response) => {
  const queryParams = url.parse(request.url, true).query;
  // request is a object that represents the request to the server
  // console.log(request);
  console.log(queryParams);
  // response is a object that represents the response from the server
  response.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  </html>
  `)
  response.end();
});

const PORT = 4000;
const ADDRESS = '127.0.0.1';
server.listen(PORT, ADDRESS, () => {
  console.log(`http server listening on ${ADDRESS}:${PORT}`);
})

// to connect to the server navigate to http://127.0.0.1:4000/ OR localhost:4000