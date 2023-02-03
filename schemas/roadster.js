const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roadsterSchema = new Schema({
	earthDistanceKm: String,
	longitude: String,
});

module.exports = mongoose.model("Roadster", roadsterSchema);
