const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const capsuleSchema = new Schema({
	last_update: String,
	id: String,
	serial: String,
	type: String,
});

module.exports = mongoose.model("Capsule", capsuleSchema);
