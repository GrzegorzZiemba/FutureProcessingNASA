var express = require('express');
var request = require('request');
var path = require('path');
var setVariable = require('./utils/setVariables');
var capsule = require('./capsule/capsule');
var connect = require('./mongodb/connect');
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");
var capsuleInfo;
capsule.getcapsule(function (data) {
    capsuleInfo = data;
});
app.get("/capsules", function (req, res) {
    console.log(capsuleInfo);
    res.render("capsules", {
        capsules: capsuleInfo
    });
});
app.listen(3000);
