const express = require("express");
const path = require("path");
const Dragon = require("../schemas/dragon");
const Capsule = require("../schemas/capsule");
const dragonFetch = require("../mongodb/dragon");
const capsuleFetch = require("../mongodb/capsules");
const config = require("config");
const app = express();
const log = require("../service/logger");

module.exports = function appRoutes() {
	app.listen(config.get("Customer.dbConfig.port"));
	app.use(express.static(path.join(__dirname, "public")));

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
};
