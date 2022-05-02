const mongoose = require("mongoose");
const connectionUtils = require("./connection_utils");
const mongoose_schema = require("./mongoose_schema");

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://localhost:27017/test");
}

async function capsuleData(
	last_update = null,
	id = null,
	serial = null,
	type = null,
	callback = null
) {
	const doc = { last_update, id, serial, type };

	if (id == null) {
		await connectionUtils.getDatafromDatabase(callback, mongoose_schema.model);
	} else {
		connectionUtils.writeToDatabase(
			callback,
			doc,
			doc.id,
			mongoose_schema.model
		);
	}
}

async function roadsterData(
	name = null,
	launch_date_utc = null,
	longitude = null,
	earth_distance_km = null,
	id = null,
	callback
) {
	const doc = { name, launch_date_utc, longitude, earth_distance_km, id };
	console.log(doc);
	console.log(name + " =====..");

	if (doc.id == null) {
		await connectionUtils.getDatafromDatabase(
			callback,
			mongoose_schema.roadsterModel
		);
	} else {
		connectionUtils.writeToDatabase(
			callback,
			doc,
			doc.id,
			mongoose_schema.roadsterModel
		);
	}
}

module.exports = {
	capsuleData: capsuleData,
	roadsterData: roadsterData,
};
