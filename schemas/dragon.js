const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dragonSchema = new Schema({
	heatShield: String,
	dragonImage: Array,
	firstFlight: String,

	id: String,
});

module.exports = mongoose.model("Dragon", dragonSchema);
