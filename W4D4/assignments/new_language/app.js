const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs"); // tells express that we are using ejs for templates
app.set("views", "views"); // tells express that our views live in a directory at /views

app.use(cookieParser()); 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let greeting = '';
  let language = req.cookies.language;
  console.log(req.cookies);
  switch(req.cookies.language.toLowerCase()) {
    case "english":
      greeting = "Hello";
      break;
    case "french":
      greeting = "Bonjour";
      break;
    case "spanish":
      greeting = "Hola";
      break;
    default:
      greeting = "Welcome to my Awesome Website";
  }
  console.log(greeting);
  res.render('home', {n: req.cookies.name, g: greeting});
});

app.get('/language', (req, res) => {
  res.render('language');
});

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
app.post('/language', (req, res) => {
  const {name, language} = req.body;
  res.cookie('name', name, { maxAge: ONE_WEEK });
  res.cookie('language', language, {maxAge: ONE_WEEK });
  res.redirect('/');
})
  
const PORT = 4747;
const ADDRESS = 'localhost'; // is an alias for 127.0.0.1
// Tell express to start listening for requests at this host
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on ${ADDRESS}:${PORT}`);
});