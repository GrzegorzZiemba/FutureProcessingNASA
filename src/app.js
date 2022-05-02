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
app.get('/', function (req, res) {
    res.render("main");
});
var capsuleRoutes = require('./routes/capsuleRoute');
var roadsterRoute = require('./routes/roadsterRoute');
app.use(capsuleRoutes);
app.use(roadsterRoute);
app.listen(3000);
