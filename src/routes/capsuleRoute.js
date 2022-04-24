const express = require("express");
const capsule = require("../capsule/capsule");

const router = express.Router();

let capsuleInfo;
capsule.getcapsule(function (data) {
	capsuleInfo = data;
});

router.get("/capsules", function (req, res) {
	console.log(capsuleInfo);
	res.render("capsules", {
		capsules: capsuleInfo,
	});
});

module.exports = router;
