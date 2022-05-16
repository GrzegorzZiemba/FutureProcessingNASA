const express = require("express");
const router = express.Router();
const fetchItems = require("../utils/fetch");
const Dragon = require("../schemas/dragon");
const Capsule = require("../schemas/capsule");
const dragonFetch = require("../mongodb/dragon");
const capsuleFetch = require("../mongodb/capsules");

dragonFetch.dragonsMongo();
capsuleFetch.capsuleMongo();

router.get("/capsules", function (req, res) {
	Capsule.find().then((result) => {
		res.render("capsules", {
			capsules: result,
		});
	});
});

router.get("/dragons", function (req, res) {
	Dragon.find().then((result) => {
		res.render("dragons", {
			dragons: result,
		});
	});
});

module.exports = router;
