const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

//setting express for static files like css in ejs view engine
app.use(express.static(path.join(__dirname, "public")));

// setting ejs as view engine https://ejs.co/#docs
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", function (req, res) {
	res.render("main");
});
const fetchingRoutes = require("./routes/routes");
app.use(fetchingRoutes);

mongoose
	.connect("mongodb://localhost:27017/test")
	.then((result) => {
		app.listen(3000);
		console.log("Connected");
	})
	.catch((err) => console.log("ERROR!"));
