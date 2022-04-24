const { MongoClient } = require("mongodb");
const connectionUtils = require("./connection_utils.js");
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false";
const client = new MongoClient(uri);

async function main() {
	try {
		await client.connect();
		console.log("connected");
	} catch (e) {
		console.error(e);
	}
}
main().catch(console.error);

async function capsuleData(
	last_update = null,
	id = null,
	serial = null,
	type = null,
	callback = null
) {
	const doc = { last_update, id, serial, type };
	if (id == null) {
		console.log("Null");
		await connectionUtils.getDatafromDatabase("ThatDb", callback, client);
	} else {
		connectionUtils.writeToDatabase("ThatDb", client, doc.id, doc);
	}
}

module.exports = {
	client: client,
	capsuleData: capsuleData,
};
