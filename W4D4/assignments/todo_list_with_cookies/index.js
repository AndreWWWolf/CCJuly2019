const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const tasksRouter = require('./routes/tasks');

const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
	// Set properties on `response.locals` to create variables
	// that are global to all of our rendered templates
	// including any partial.
	// The following line means that a variable named "username"
	// with a value of "" will useable in our templates.
	response.locals.username = '';
	const username = request.cookies.username;
	if (username) {
	  response.locals.username = username;
	}
	next();
  });

app.use((request, response, next) => {
	const todoList = request.cookies.todoList;
	response.locals.todoList = [];
	if (todoList) {
		// This initializes a variable called `todoList` which will be available to
		// all of the views. The variable `todoList` is assigned the value of the
		// `cookies.todoList` array
		response.locals.todoList = todoList;
	}

	// The middleware is finished. Go on to next middleware and/or route
	next();
});

app.use('/tasks', tasksRouter);

// Have the root path redirect the browser to the todo listing page
app.get('/', (request, response) => {
	response.redirect('/tasks');
});

const PORT = 4000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
	console.log(`The server is listening at http://${DOMAIN}:${PORT}`);
});
