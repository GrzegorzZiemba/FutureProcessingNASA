const express = require("express");

const router = express.Router();
import { getRoadster } from "../interfaces/roadsterInterface";
const request = require("../utils/getRequest");

let roadsterInfo



request.getData(function (data) {
	roadsterInfo = data;
});

router.get("/roadster", function (req, res) {
	console.log(roadsterInfo  + "   ================ Here");
	res.render("roadster", {
		roadster: roadsterInfo,
	});
});

module.exports = router;
