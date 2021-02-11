const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(path.join(__dirname, "public")));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/burgersController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on: http://localhost:${PORT}`);
  }
});

// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var User = require('./models/burger');

// //Put the code below your app.use(Router.js)

// app.use(require('express-session')({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()))
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


// //Server generated
// var express = require('express');
// var bodyParser = require('body-parser');
// var fs = require('fs');

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//   return res.send('<h2>Welcome to Express App<h2>');
// })

// var Port = process.env.PORT || 3000;
// var IP = process.env.IP || '127.0.0.1';
// app.listen(Port, IP, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Server is listening at ' + IP + ':' + Port);
//   }
// });

// var express = require('express');
// // modelName should be replaced here with your choice
// var modelName = require('../models/burger');

// var route = express.Router();

// route.get('/', (req, res) => {
//   res.send('This the Routes Home page')
// });

// module.exports = route;

// app.get('/someurl1', (req, res) => {
//   return res.send('A app.get route has been generated')
// });
