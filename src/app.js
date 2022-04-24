var express = require('express');
var request = require('request');
var path = require('path');
var setVariable = require('./utils/setVariables');
var app = express();
//setting express for static files like css in ejs view engine
app.use(express.static(path.join(__dirname, "public")));
// setting ejs as view engine https://ejs.co/#docs
app.set("view engine", "ejs");
app.set("views", "views");
var capsuleRoutes = require('./routes/capsuleRoute');
app.use(capsuleRoutes);
app.listen(3000);
