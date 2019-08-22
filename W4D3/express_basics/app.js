const express = require('express');
const logger = require('morgan');

const app = express();

//  -= MIDDLEWARE =-

// logger/morgan

// when using "morgan" middleware, call it with a string that describes
// the formatting of the logs.
// more can be found in the docs https://github.com/expressjs/morgan
app.use(logger('dev'));

// app.set allows us to change settings in our express app

app.set('view engine', 'ejs'); // here we are telling express to render tempaltes using ejs
//https://expressjs.com/en/4x/api.html

// requiring the express project returns a function
// that is used to create an instance of express application

// the `app` object has methods to
// expess app documentation --> (https://expressjs.com/en/4x/api.html#app)
// route http requests
// configuring middleware
// render views
// register a view engine

// URL (Uniform Resource Locator)
// scheme:://host:port/path?query
// schema
// the protocal that is being used ex. http

// host and port
// is the location of the server hosting the webapp
// google.com or localhost

// path
// is a specific resource on the server
// for google something like "/search"

// query
// extra information about the resource we're trying to get

// a route is function that specifies a response to a combination of HTTP verb and path

// HTTP verbs
// GET - requesting a resource, should only respond with data
// POST - used to create a resource
// PATCH - used to update an existing resource
// PUT - used to completely replace an existing resource
// DELETE - used to remove a resource
// ect

// respond with "hello world" when somebody visits http://localhost:4000/hello_world

// App get is a method named after the HTTP verb. Used to define a GET Route
// There are methods on the app object that correspond to each HTTP verb

// get method takes the following paremeters in order:
// a path string
// a request handler (callback)
  // the request callback has 2 arguments
  // request and response
app.get("/hello_world", (request, response) => {
  // the request object represents the request being made
  // it has information on whos trying to access the resource
  // what http verb is being used
  // query params

  // the response object contains a bunch of methods that allow a server to create
  // a reponse to the request

  // response.send will attatch the provided string to the body of html and send it back to the client
  // it also kills the connection
  response.send('Hello, adsfadsfsa');
})

app.get("/", (req, res) => {
  res.render('welcome');
})

app.get("/contact_us", (req, res) => {
    res.render('contactUs');
  })

  app.get("/thank_you", (req, res) => {
    // console.log(req.query); //we can access the query by using req.query;
    // res.send(req.query); 
    res.render('thankYou', {
      hello: 'bunny',
      name: req.query.name,
      favouriteColor: req.query.favouriteColor,
      message: req.query.message,
      favouriteDay: req.query.favouriteDay
    });
  })
  
const PORT = 4545;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
  console.log(`Express Server started on ${ADDRESS}:${PORT}`);
});