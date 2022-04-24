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

module.exports = {
	capsuleData: capsuleData,
};
