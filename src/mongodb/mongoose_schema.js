const mongoose = require("mongoose");
const getRoadster = {
	name: String,
	launch_date_utc: String,
	longitude: Number,
	earth_distance_km: Number,
	id: Number,
};

const capsule = {
	last_update: String,
	id: String,
	serial: String,
	type: String,
};

console.log(getRoadster);
const capsuleSchema = new mongoose.Schema(capsule);
const CapsuleModel = mongoose.model("capsule", capsuleSchema);

const roadsterSchema = new mongoose.Schema(getRoadster);
const RoadsterModel = mongoose.model("roadster", roadsterSchema);

module.exports = {
	roadsterModel: RoadsterModel,
	model: CapsuleModel,
	capsule: capsule,
};
