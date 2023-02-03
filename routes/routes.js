const express = require("express");
const path = require("path");
const cors = require("cors");
const Dragon = require("../schemas/dragon");
const Capsule = require("../schemas/capsule");
const Roadster = require("../schemas/roadster");
const dragonFetch = require("../mongodb/dragon");
const capsuleFetch = require("../mongodb/capsules");
const roadsterFetch = require("../mongodb/roadster");
const config = require("config");
const app = express();
const log = require("../service/logger");

module.exports = function appRoutes() {
	app.listen(config.get("Customer.dbConfig.port"));
	app.use(express.static(path.join(__dirname, "public")));
	app.use(cors());
	app.set("view engine", "ejs");
	app.set("views", "views");
	app.get("/", function (req, res) {
		res.render("main");
	});
	app.get("/capsules", function (req, res) {
		try {
			capsuleFetch.capsuleMongo();

			Capsule.find().then((result) => {
				res.render("capsules", {
					capsules: result,
				});
			});
		} catch (error) {
			log.inf(error);
		}
	});

	app.get("/dragons", function (req, res) {
		try {
			dragonFetch.dragonsMongo();

			Dragon.find().then((result) => {
				res.render("dragons", {
					dragons: result,
				});
			});
		} catch (error) {
			log.info(error);
		}
	});

	app.get("/roadster", function (req, res) {
		try {
			roadsterFetch.roadsterMongo();

			Roadster.find().then((result) => {
				res.render("roadster", {
					roadster: result,
				});
			});
		} catch (e) {
			console.log(e);
		}
	});
};
