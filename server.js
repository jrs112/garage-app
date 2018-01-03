require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const flash = require("connect-flash");
var mongoUser = process.env.Mongo_User;
var mongoPassword = process.env.Mongo_Password;

console.log("USER: ", mongoUser, " ", mongoPassword)
// Connect
const db = "mongodb://" + mongoUser + ":" + mongoPassword + "@ds239587.mlab.com:39587/garage-app";
useMongoClient: true;
mongoose.Promise = global.Promise;
//connect and show any mongoose errors
mongoose.connect(db, function(err) {
  if(err) {
      console.log('Error connecting');
  }
  else{
    console.log('Mongoose connection successful.')
  }
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// API file for interacting with MongoDB
const api = require('./server/routes/api');

const serviceapi = require('./server/routes/serviceapi');

const auth = require("./server/routes/auth");


// Parsers
app.use(bodyParser.json());
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: false}));

// required for passport
app.use(session({ secret: 'robsgarageistheshiz112',
                  saveUninitialized: true,
                  resave: true})); // session secret
app.use(passport.initialize());
app.use(flash());

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
})
app.use(passport.session()); // persistent login sessions

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});
// API location
app.use('/api', api);

app.use('/serviceapi', serviceapi);

app.use("/auth", auth);
require('./server/config/passport.js')(passport);


//app.use()

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log("Running on localhost"));
