const mongoose = require("mongoose");
const express = require("express");
const config = require("config");
const app = express();
const log = require("../service/logger");
module.exports = function createMongo() {
	console.log("Im Here");
	mongoose
		.connect(config.get("mongoUrl"))
		.then((result) => {
			log.info("Connected");
		})
		.catch((err) => log.info(err));
};
