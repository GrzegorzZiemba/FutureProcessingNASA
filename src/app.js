// const express =require('express')
var request = require('request');
var setVariable = require('./utils/setVariables');
var capsule = require('./capsule/capsule');
var connect = require('./mongodb/connect');
// const app = express()
connect;
request('https://api.spacexdata.com/v4/capsules', function (error, response, body) {
    console.log(error);
    var set = setVariable(JSON.parse(body));
    console.log("connect" + connect.client);
    capsule.getDataFromApi(set, connect.client);
});
// app.listen(3000)
