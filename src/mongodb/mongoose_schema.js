const mongoose = require("mongoose");

const capsule = {
	last_update: String,
	id: String,
	serial: String,
	type: String,
};

const dataSchema = new mongoose.Schema(capsule);
const NewModel = mongoose.model("capsule", dataSchema);

module.exports = {
	model: NewModel,
	capsule: capsule,
};
