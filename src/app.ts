const express =require('express')
const request = require('request')
const path = require('path')
const setVariable = require('./utils/setVariables')
const capsule = require('./capsule/capsule')


const app = express();
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");
app.set("views", "views");

var capsuleInfo;
capsule.getcapsule(function (data) {
	capsuleInfo = data;
});

app.get("/capsules", function (req, res) {
	console.log(capsuleInfo);
	res.render("capsules", {
		capsules: capsuleInfo,
	});
});


app.listen(3000)